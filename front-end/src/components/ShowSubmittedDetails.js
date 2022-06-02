import React, { Component, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const ShowSubmittedDetails = (props) => {

    const {id} = useParams();
    //const submitted = {};
    const [submitted, setSubmitted] = useState({});

    useEffect(() => {
    
    axios
      .get('https://speed-cise.herokuapp.com/api/submitted/'+id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        setSubmitted(res.data);
      })
      .catch(err => {
        console.log("Error from ShowSubmittedDetails");
      })
    });

  const onDeny = () => {
    setSubmitted({...submitted, status : "Failed Moderation"})
    const update = {
        title: submitted.title,
        authors: submitted.authors,
        source: submitted.source,
        pubdate: submitted.pubdate,
        doi: submitted.doi,
        claim: submitted.claim,
        evidence: submitted.evidence,
        status: 'Failed Moderation'
      };

    axios
        .put('https://speed-cise.herokuapp.com/api/submitted/'+id, update)
        .then(res => {
            console.log("submitted succesfully!!")
        })
        .catch(err => {
            console.log("Error in denying moderation!");
        })
  };

  const onApprove = () => {
    setSubmitted({...submitted, status : "Passed Moderation"})
    const update = {
        title: submitted.title,
        authors: submitted.authors,
        source: submitted.source,
        pubdate: submitted.pubdate,
        doi: submitted.doi,
        claim: submitted.claim,
        evidence: submitted.evidence,
        status: 'Passed Moderation'
      };

    axios
        .put('https://speed-cise.herokuapp.com/api/submitted/'+id, update)
        .then(res => {
            console.log("submitted succesfully!!")
        })
        .catch(err => {
            console.log("Error in denying moderation!");
        })

    axios
        .post('https://speed-cise.herokuapp.com/api/articles', update)
        .then(res => {
           
        props.history.push('/');
        console.log("Moderation succesful!!");
        })
        .catch(err => {
            console.log("Error in SubmissionCard!");
        })

  };

    let SubmittedItem = <div>
      <table className="table table-hover">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ submitted.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Authors</td>
            <td>{ submitted.authors }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Source</td>
            <td>{ submitted.source }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Published Date</td>
            <td>{ submitted.pubdate }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>DOI</td>
            <td>{ submitted.doi }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Claim</td>
            <td>{ submitted.claim }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Evidence</td>
            <td>{ submitted.evidence }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Status</td>
            <td>{ submitted.status }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowSubmittedDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/ShowSubmittedList" className="btn btn-outline-warning float-left">
                  Go Back to Submitted Articles
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Moderate Article</h1>
              <p className="lead text-center">
                  View Submitted Article Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
          { SubmittedItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={onApprove}>Approve</button><br />
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeny}>Deny</button><br />
            </div>
          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }

export default ShowSubmittedDetails;