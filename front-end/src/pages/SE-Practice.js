import React, { Component, useEffect, useState } from 'react';
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import axios from 'axios';

const SEPractice = () => {

  const [speed, setSpeed] = useState([]);

  useEffect(() => {
    
    axios
      .get('https://speed-cise.herokuapp.com/api/speed/')
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        setSpeed(res.data);
      })
      .catch(err => {
        console.log("Error from Show Speed DB");
      })
    });

    return (
      <div>
        <h2>SPEED Database</h2> <br/> 
              
               <Styles>
                 <Table
                  data={speed} //i would imagine here this would be an api link for heroku so kinda easy to plug it in
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  
