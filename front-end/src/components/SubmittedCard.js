import React from 'react';
import '../App.css';
import axios from 'axios';

const SubmittedCard = (props) => {
    const  article  = props.article;

    const allow = e => { //pass through to the articles to analyse
        e.preventDefault();

        //post using axios to articles to analyse
    };

    const deny = e => { //delete article from submitted
        e.preventDefault();
        
        //axios.delete here
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
                <p>{article.source}</p>
                <button onClick={allow}>Allow</button>
                <button onClick ={deny}>Deny</button>
                <button onClick ={check}>Check</button>
            </div>
        </div>
    )
};

export default SubmittedCard;