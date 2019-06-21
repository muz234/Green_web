import React from 'react';
import addNewProduct from './addNewProduct';
import { Link } from 'react-router-dom';
//import ItemList from './ItemList';
//import axios from 'axios';

class reports extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thereports: []
        };
    }



    render() {
        //var addstudent = <addNewStudent />;
        return (
            <div>

                <div class="card bg-dark text-white" >
                    <img src='/ivan-bandura-1416507-unsplash.png' className="card-img" />
                    <div class="card-img-overlay">

                        <h1 style={{
                            color: "#E5EFDF",
                            fontFamily: "SignPainter", fontStyle: "italic",
                            fontWeight: "bold", fontSize: "63px",
                            
                        }}>These are your reports</h1>
                        <Link to="/addNewProduct"> <button style={{
                            
                            fontFamily: "Georgia", fontSize: "18px",
                            textAlign: "center"
                        }}>
                    Add Product
      </button></Link>




                </div>
                </div>

               
                       
            </div>

        );
    }
}


export default reports;