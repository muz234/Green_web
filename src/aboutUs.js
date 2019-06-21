import React from 'react';
import addNewProduct from './addNewProduct';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import "./App.css";
import axios from 'axios';

class aboutUs extends React.Component {

    



    render() {
        //var addstudent = <addNewStudent />;
        return (
            <div>
                <div class="card bg-dark text-white" >
                    <img src='/ivan-bandura-1416507-unsplash.png' className="card-img" />

                    <div class="card-img-overlay" style={{textAlign:"center"}} >
                        
                        <div class="container-fluid">
                            
                            <h2 style={{
                                color: "#E5EFDF",
                                fontFamily: "SignPainter", fontStyle: "italic",
                                fontWeight: "bold", fontSize: "63px",
                                textAlign: "center"
                            }}>About Company Page</h2>
                            
                            {/* <button class="btn btn-default btn-dark">Get in Touch</button> */}
                        </div>

                        <div class="container-fluid bg-grey">
                            <h2>Our Values</h2>
                            <h4><strong>MISSION:</strong> Our mission lorem ipsum.Lorem ipsum dolor sit amet, in duo antiopam argumentum disputando, essent liberavisse sit ne. Nam amet lobortis ex. Oratio putent reprehendunt an has, eu nec iudico inermis. Falli mazim zril ex qui, mei melius mentitum consulatu ex. Ad eam regione graecis, pro te facete oblique concludaturque.</h4>
                            <br/>

                            <p><strong>VISION:</strong> Our vision Lorem ipsum Iudico necessitatibus ne mea. An mea tota commune. Dicta elitr sed ne, id usu tation euripidis incorrupte, elit conclusionemque eu mel. Noster doctus cum at, per prima mutat officiis et. An his omnis affert, duis eius consequat an has. Vim ad sumo noluisse, posse consequuntur ne nam, at has vide prima porro.</p>
                            </div>

                    </div>
                </div>
                

            </div>

        );
    }
}


export default aboutUs;
