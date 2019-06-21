import React from 'react';
import logo from './logo.svg';
import './App.css';
import { resolve } from 'dns';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      
    }
}  


render() {
  
  return (
    
      <div class="card bg-dark text-white" >
        <img src='ivan-bandura-1416507-unsplash.png' className="card-img" />
      <div class="card-img-overlay">
        <h1 id="demo"
          style={{
            color: "#E5EFDF",
            fontFamily: "SignPainter", fontStyle: "italic",
            fontWeight: "bold", fontSize: "63px",
            textAlign: "center"
          }}> Welcome </h1>
        </div>
    
    </div>
  );
}
}

export default Home;
