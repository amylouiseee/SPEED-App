import React from "react";
import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
              <Dropdown/>
               <Styles>
                 <Table
                  data={articles} //i would imagine here this would be an api link for heroku so kinda easy to plug it in
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  
