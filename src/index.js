import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,Link,BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import Home from './Home';
import calculator from './calculator';
import Notfound from './Notfound';
import addNewProduct from './addNewProduct';
import reports from './reports';
import aboutUs from './aboutUs';




const routing = (

	<Router>

	<div>
			<nav class="navbar navbar-expand-lg abc" style={{ backgroundcolor: "linear-gradient (#009933)"}}>
				<Link to="Home"> <a class="navbar-brand" href="#" style={{ color: "#E5EFDF", fontStyle: "italic", fontWeight: "bold", fontSize: "63px" }}>Cultura</a></Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav ml-auto" >
                  <li class="nav-item active">
							<Link to ="Home"><a class="nav-link abc" href="#" style={{ fontSize: "22px" }} >Home <span class="sr-only">(current)</span></a></Link>
                  </li>
                  <li class="nav-item">
					<Link to="calculator"><a class="nav-link abc" href="#" style={{ fontSize: "22px" }}>Calculator</a></Link>
					</li>
                  <li class="nav-item">
								<Link to="reports"><a class="nav-link abc" href="#" style={{ fontSize: "22px" }}>Reports</a></Link>
                  </li>
                  <li class="nav-item">
								<Link to="aboutUs"><a class="nav-link abc" href="#" style={{ fontSize: "22px" }}>About Us</a></Link>
                  </li>

                </ul>

              </div>
              

            </nav>

		{/* <ul>
		  <li><Link to = "Home">Home</Link></li>
		 <li><Link to = "calculator">calculator</Link></li>
		 <li><Link to = "reports">Reports</Link></li>
         <li><Link to = "aboutUs">About Us</Link></li>
			
		</ul> */}

	<Switch>
		<Route exact path = "/Home" component ={Home} />
		<Route path = "/calculator" component ={calculator}/>
		<Route path = "/reports" component ={reports}/>
		<Route path="/aboutUs" component={aboutUs} />

		<Route path = "/addNewProduct" component ={addNewProduct}/>
	
		
		<Route component ={Notfound}/>
	</Switch>
	</div>
	


	</Router>



	)


ReactDOM.render(routing, document.getElementById('root'));
