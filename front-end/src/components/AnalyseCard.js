import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

/**
 * basically same as submitted card but for use in the analysis page
 */

const AnalyseCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <div className="desc">
                <h1 className="text-center">Article Details</h1>
                <h2 className="display-4 text-center">{article.title}</h2>
                <h3 className="lead text-center">{article.authors}</h3>
                <Link to={`/show-moderated/${article._id}`}>
 
                    <button className="btn btn-outline-info btn-lg btn-block" >Analyse</button>
                
                </Link>

            </div>
        </div>
    )
};

export default AnalyseCard;