import React from 'react';
import '../App.css';
import axios from 'axios';

const SubmittedCard = (props) => {
    const  article  = props.article;

    const data = {
        title: article.title,
        authors: article.authors,
        source: article.source,
        pub_date: article.pub_date,
        doi: article.doi,
        claim: article.claim,
        evidence: article.evidence
      };

    const allow = e => { //pass through to the articles to analyse
        e.preventDefault();

        axios
        .post('https://speed-cise.herokuapp.com/api/articles', data)
        .then(res => {
            deny();
            props.history.push('/');
            console.log("Moderation succesful!!")
        })
        .catch(err => {
            console.log("Error in SubmissionCard!");
        })
    };

    const deny = e => { //delete article from submitted
        e.preventDefault();
        
        axios
        .delete('http://speed-cise.herokuapp.com/api/submitted/'+article._id)
        .then(res => {
        props.history.push("/");
        })
      .catch(err => {
        console.log("Error form ShowSubmittedDetails_deleteClick");
      })
    };

    const check = e => { //this is where you query the db to check if article is duplicate
        e.preventDefault();

        //check if article already exists
    }

    return(
        <div className="card-container">
            <div className="desc">
                <h2>{article.title}</h2>
                <h3>{article.authors}</h3>
                <button onClick={allow}>Allow</button>
                <button onClick ={deny}>Deny</button>
                <button onClick ={check}>Check</button>
            </div>
        </div>
    )
};

export default SubmittedCard;