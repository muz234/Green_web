import React from 'react';
import axios from 'axios';


class ReportItem extends React.Component {

  constructor(props) {
    super(props);
  }

  handleonDelete = (event) => {


    axios.delete('http://localhost:4000/userItems/' + this.props.id)
      .then(res => {

        this.props.updatelist();
      }).catch(err => console.log(err));
  }








  render() {


    console.log(this.props);
    return (

      <div>
          <div style={{textAlign:"center"}}>
        <h5 style={{
          color: "#E5EFDF",
          fontFamily: "Georgia", fontStyle: "italic",
          fontWeight: "bold", fontSize: "15px"
        }}>this is you report changess here</h5>
          <p>{this.props.product}</p> 
          <p>Revenue generate based on this {this.props.unitsToProduce} units at market price: {this.props.revenue}
</p>



        
        <button onClick={this.handleonDelete}>Delete</button>
      </div>
      </div>
    );
  }
}
export default ReportItem;