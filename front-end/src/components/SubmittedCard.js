import React from 'react';
import '../App.css';
import axios from 'axios';

const SubmittedCard = (props) => {
    const  article  = props.article;

    const moderated = {
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
        .post('https://speed-cise.herokuapp.com/api/articles', moderated)
        .then(res => {
            article.status = 'approved';
            axios
            .put('https://speed-cise.herokuapp.com/api/submitted/'+article._id, article)
            .then(res => {
                console.log("submitted succesfully!!")
            })
            .catch(err => {
                console.log("Error in SubmissionCard on submission db!");
            })
        props.history.push('/');
        console.log("Moderation succesful!!");
        })
        .catch(err => {
            console.log("Error in SubmissionCard!");
        })
    };

    const deny = e => { //delete article from submitted
        e.preventDefault();
        
        axios
        .delete('https://speed-cise.herokuapp.com/api/submitted/'+article._id)
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
                <h2>Title: {article.title}</h2>
                <h3>Authors: {article.authors}</h3>
                <h3>Status: {article.status}</h3>
                <div className="buttons">
                <button onClick={allow}>Approve</button>
                <button onClick ={deny}>Deny</button>
                <button onClick ={check}>Check</button>
                </div>
            </div>
        </div>
    )
};

export default SubmittedCard;