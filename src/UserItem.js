import React from 'react';
import axios from 'axios';


class UserItem extends React.Component { 

  constructor(props){
    super(props);
  }

handleonDelete = (event) => {

  
    axios.delete('http://localhost:4000/userItems/'+this.props.id)
    .then( res => {
      
      this.props.updatelist();
    }).catch(err => console.log(err));
  }

  handleonEdit = (event) =>{

    axios.put('http://localhost:4000/userItems/'+this.props.id)
    .then( res => {
      
      this.props.updatelist();
    }).catch(err => console.log(err));

  }

  

 



  render(){

  
  
  return (
    
    <div >
      
      <h1>
        
       {this.props.product}
       {this.props.unitstoproduce} 
       
    </h1>
   
    <button onClick={this.handleonDelete}>Delete</button>
    </div>
  );
  }
  }
export default UserItem;