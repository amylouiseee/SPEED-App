import React from 'react';
import '../App.css';
import axios from 'axios';

/**
 * basically same as submitted card but for use in the analysis page
 */

const AnalyseCard = (props) => {
    const  article  = props.article;

    const analysed = {
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
        .post('https://speed-cise.herokuapp.com/api/speed',analysed)
        .then(res => {
            axios
            .delete('https://speed-cise.herokuapp.com/api/articles/'+article._id)
            .then(res => {
                props.history.push("/");
            })
            .catch(err => {
            console.log("Error form ShowModeratedDetails_deleteClick");
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
        .delete('https://speed-cise.herokuapp.com/api/articles/'+article._id)
        .then(res => {
            props.history.push("/");
        })
      .catch(err => {
        console.log("Error form ShowModeratedDetails_deleteClick");
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
                <div className="buttons">
                <button onClick={allow}>Enter into SPEED</button>
                <button onClick ={deny}>Reject</button>
                </div>
            </div>
        </div>
    )
};

export default AnalyseCard;