import React from 'react';
import '../App.css';

/**
 * basically same as submitted card but for use in the analysis page
 */

const AnalyseCard = (props) => {
    const article = props.article;

    return (
        <div className ="card-container">
            <div className="desc">
                <h2>{article.title}</h2>
                <h3>{article.authors}</h3>
                <p>{article.source}</p>
            </div>
        </div>
    );
};

export default AnalyseCard;