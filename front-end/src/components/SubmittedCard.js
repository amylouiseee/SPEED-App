import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SubmittedCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>{article.title}</h2>
                <h3>{article.authors}</h3>
                <p>{article.source}</p>
            </div>
        </div>
    )
};

export default SubmittedCard;