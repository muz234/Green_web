import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import ItemList from './ItemList';
class addNewProduct extends React.Component {



  constructor(props) {
    super(props);
    this.state = {

      product: '',
      unitstoproduce: '',
      productvalue: '',
      options: [],

      redirect: false

    };
  }


  //   handleChange = e => {
  //     this.setState({ 'firstname': e.target.value});
  //   };

  componentDidMount() {
    this.handleonChange();
  }

  handleonChange = e => {

    axios.get('https://bridge.buddyweb.fr/api/greens/greendata')
      .then((resolve) => {   // Called when data is returned
        this.setState({ options: resolve.data });




        // Populating the drop down
        let select = document.getElementById('theSelect');
        for (let prod of resolve.data)
          select.innerHTML += "<option>" + prod.product + "</option>";

        console.log(resolve.data.product);
      })
      .catch((err) => console.log(err));



  };



  handleChange2 = e => {
    this.setState({ 'unitstoproduce': e.target.value });

  };



  handleOnSubmit = (event) => {
    // alert(this.state.name + " you select " + this.state.language + " as your default programming language");
    event.preventDefault();
    let select = document.getElementById('theSelect');


    let productname = select.options[select.selectedIndex].value
    console.log('this is to get  values from the select' + productname);

    let target = event.target[1].value;



    console.log();

    //find rateperpound
    let foundrate;
    for (let rate of this.state.options) {
      if (rate.product === productname) {
        foundrate = rate.rate_per_pound
      }

    }

    console.log(foundrate);
    var numberOfunits = parseFloat(target);
    console.log(numberOfunits);

    let revenue = numberOfunits * foundrate;

    console.log('this is the revenue' + revenue);

    let data = {
      product: productname,
      unitsToProduce: numberOfunits,
      revenue: revenue





    }

    console.log("sending data")
    console.log(data)
    axios.post(`http://localhost:4000/addItems`, data)
      .then(res => {

        console.log('This is the post  in the addnewProduct function');
        console.log(res.data);

        this.setState({ redirect: true })

      });



  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/calculator" />
    }

    let allOptions = this.state.options
    return (
      <div>
        <div class="card bg-dark text-white" >
          <img src='/ivan-bandura-1416507-unsplash.png' className="card-img" />
          <div class="card-img-overlay">
            <h2 style={{
              color: "#E5EFDF",
              fontFamily: "SignPainter", fontStyle: "italic",
              fontWeight: "bold", fontSize: "63px",
              textAlign: "center"
            }}>Product</h2>





            <form onSubmit={this.handleOnSubmit} style={{
              color: "#E5EFDF",
              fontFamily: "Georgia", fontSize: "25px",
              textAlign: "center"
            }}>

              Product Name:
            <br />
              <select id="theSelect">

              </select>
              <br />
              {/* <input value={this.state.} placeholder="firstname " onChange={this.handleChange} /> */}
              Expected Production:<br />
              <input type onChange={this.handleChange2} />


              <button>Add Product</button>
              {/* <button>Add Student</button>  */}


            </form>

          </div>
        </div>
      </div>

    );
  }
}


export default addNewProduct;