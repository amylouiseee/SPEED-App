/**
 * In this page the articles ready for analysis would go (AnalyseCard.js). An analyst can submit them into the database.
 */

 import React, { Component } from 'react';
 import '../App.css';
 import axios from 'axios';
 //import { Link } from 'react-router-dom';
 import AnalyseCard from '../components/AnalyseCard';
 
 class ShowModeratedList extends Component {
   constructor(props) {
     super(props);
     this.state = {
       moderated: []
     };
   }
 
   componentDidMount() {
     axios
       .get('https://speed-cise.herokuapp.com/api/articles')
       .then(res => {
         this.setState({
          moderated: res.data
         })
       })
       .catch(err =>{
         console.log('Error from ShowModeratedList');
       })
   };
 
 
   render() {
     const moderated= this.state.moderated;
     console.log("PrintModerated: " + moderated);
     let moderatedList;
 
     if(!moderated) {
      moderatedList = "there is no submitted record!";
     } else {
      moderatedList = moderated.map((moderated, k) =>
         <AnalyseCard article={moderated} key={k} />
       );
     }
 
     return (
       <div className="ShowModeratedList">
         <div className="container">
           <div className="row">
             <div className="col-md-12">
               <br />
               <h3 className="text-center">Articles to Analyse</h3>
             </div>
 
           </div>
 
           <div className="list">
                 {moderatedList}
           </div>
         </div>
       </div>
     );
   }
 }
 
 export default ShowModeratedList;