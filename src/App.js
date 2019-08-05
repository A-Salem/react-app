import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from './page1';
import Page2 from './page2';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <div className="btnDiv">
        <a className="btn-primary btn" href="/page1">Page1</a>
        <a className="btn-primary btn" href="/page2">Page2</a>
      </div>
    </Router>
  );
}

export default App;
