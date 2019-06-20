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
          <div class="Indexbody" >
          <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="#" style={{ color: "white", fontStyle:"italic", fontWeight:"bold", fontSize:"63px" }}>Cultura</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav ml-auto" >
                  <li class="nav-item active">
                  <a class="nav-link abc" href="#" style={{fontsize:"73"}} >Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link abc" href="#" >Calculator</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link abc" href="#">Reports</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link abc" href="#">About Us</a>
                  </li>

                </ul>

              </div>
              

            </nav>
          
        </div>
    </div>
    </div>
  );
}
}

export default Home;
