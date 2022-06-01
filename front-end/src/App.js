import React from "react";
import {
  Route,
  Routes ,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
import ShowSubmittedList from "./pages/ShowSubmittedList";
import AnalyseArticles from "./pages/Analyse-Articles";

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
          <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Search Articles</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
                <li><NavLink to = "/ShowSubmittedList">Show Submitted Articles</NavLink></li>
                <li><NavLink to="/AnalyseArticles">Analyse Articles</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/SEPractice" element={<SEPractice/>}/>
            <Route  path="/SubmitArticle" element={<SubmitArticle/>}/>
            <Route  path="/ShowSubmittedList" element={<ShowSubmittedList/>}/>
            <Route path="/AnalyseArticles" element={<AnalyseArticles/>}/>
            <Route exact path="/404" element={<NotFoundPage/>}/>
            <Route path="*" element={<NotFoundPage/>}
    />
          </Routes>
          </div>
        </div>
        </Router>
    );
}
 
export default App;
 
