import React, { Component, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const ShowModeratedDetails = (props) => {
  const navigate = useNavigate();

    const {id} = useParams();
    //const submitted = {};
    const [moderated, setModerated] = useState({});

    useEffect(() => {
    
    axios
      .get('https://speed-cise.herokuapp.com/api/articles/'+id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        setModerated(res.data);
      })
      .catch(err => {
        console.log("Error from ShowModeratedDetails");
      })
    });

  const onDeny = () => {
    axios
        .delete('https://speed-cise.herokuapp.com/api/articles/'+id)
        .then(res => {
            props.history.push("/"); 
        })
      .catch(err => {
        console.log("Error form ShowModeratedDetails_deleteClick");
      })

      navigate("../ShowModeratedList", { replace: true });
  };

  const onApprove = () => {

    axios
        .post('https://speed-cise.herokuapp.com/api/speed', moderated)
        .then(res => {
           
        props.history.push('/');
        console.log("Moderation succesful!!");
        })
        .catch(err => {
            console.log("Error in Analysis!");
        })

  };

    let ModeratedItem = <div>
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
            <td>{ moderated.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Authors</td>
            <td>{ moderated.authors }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Source</td>
            <td>{ moderated.source }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Published Date</td>
            <td>{ moderated.pubdate }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>DOI</td>
            <td>{ moderated.doi }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Claim</td>
            <td>{ moderated.claim }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Evidence</td>
            <td>{ moderated.evidence }</td>
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
              <Link to="/ShowModeratedList" className="btn btn-outline-warning float-left">
                  Go Back to Analyse Articles
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Analyse Article</h1>
              <p className="lead text-center">
                  View Moderated Article Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
          { ModeratedItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={onApprove}>Enter into SPEED</button><br />
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeny}>Reject</button><br />
            </div>
          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }

export default ShowModeratedDetails;