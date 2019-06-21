import React from 'react';
import ReportItem from './ReportItem';
import axios from 'axios';

class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/userItems')
      .then(res => {
        console.log(res.data);
        this.setState({ itemData: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  forceRefresh = () => {
    console.log('hey');
    axios.get('http://localhost:4000/userItems')
      .then(res => {
        console.log(res.data);
        this.setState({ itemData: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));

  }

  render() {
    const reportItems = this.state.itemData.map((object) => {

      return <ReportItem updatelist={this.forceRefresh} key={'userItems' + object.id} {...object} />;
    });

    return (<div>

      {reportItems}




    </div>);


  }

}


export default ReportList;