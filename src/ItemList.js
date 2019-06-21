import React from 'react';
import UserItem from './UserItem.js';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ItemList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      itemData: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/userItems')
    .then( res => {
      console.log(res.data);
      this.setState({itemData: res.data});
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  forceRefresh = ()=>{
    console.log('hey');
    axios.get('http://localhost:4000/userItems')
    .then( res => {
      console.log(res.data);
      this.setState({itemData: res.data});
      console.log(res);
    })
    .catch(err => console.log(err));

  }

  render() {
      const userItems = this.state.itemData.map((object) => {
     
      return <UserItem updatelist ={this.forceRefresh} key={'userItems'+object.id} {...object} />;
    });

    return( 
      <div >
      <Container>
        <div class="d-flex justify-content-start">
        
        <Row>
          <Col>{userItems } </Col>
                
        </Row>
        
        </div >
      </Container>
      
      
    </div>);
   
    
  }
   
}


  export default ItemList;