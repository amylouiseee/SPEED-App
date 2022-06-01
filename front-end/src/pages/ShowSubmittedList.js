import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import SubmittedCard from '../components/SubmittedCard';

class ShowSubmittedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: []
    };
  }

  componentDidMount() {
    axios
      .get('https://speed-cise.herokuapp.com/api/submitted')
      .then(res => {
        this.setState({
          submitted: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowSubmittedList');
      })
  };


  render() {
    const submitted= this.state.submitted;
    console.log("PrintSubmitted: " + submitted);
    let submittedList;

    if(!submitted) {
      submittedList = "there is no submitted record!";
    } else {
      submittedList = submitted.map((submitted, k) =>
        <SubmittedCard article={submitted} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h3 className="text-center">Submitted List</h3>
            </div>

          </div>

          <div className="list">
                {submittedList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSubmittedList;