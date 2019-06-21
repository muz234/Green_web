import React from 'react';
import addNewProduct from './addNewProduct';
import {Link} from 'react-router-dom';
import ItemList from './ItemList';
import "./App.css";
import axios from 'axios';

class calculator extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      greenitems: []
    };
  }
  
 
 
  render(){
    //var addstudent = <addNewStudent />;
    return  (
      <div>
        <div class="card bg-dark text-white" >
          <img src='/ivan-bandura-1416507-unsplash.png' className="card-img" />

          <div class="card-img-overlay" style={{ textAlign: "center"}}>
            <h1 style={{
              color: "#E5EFDF",
              fontFamily: "SignPainter", fontStyle: "italic",
              fontWeight: "bold", fontSize: "63px",
              
            }}>Items</h1>
     <Link to="/addNewProduct"> <button class="btn-addprdt">
              Add Product
      </button></Link>

      <ItemList greenitem = {this.state.greenitems}/>

     
      </div>
      </div>
      
      
      </div>

    );
  }
}


export default calculator;
