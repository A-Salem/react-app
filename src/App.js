import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from './page1';
import Page2 from './page2';
import Buttons from './buttons';
import './App.css';

class App extends React.Component {
  render () {
    let display;
    
    if (window.location.pathname === '/') {
      display = {
        showPage1Btn: true,
        showPage2Btn: true
      };
    } else {
      display = {
        showPage1Btn: false,
        showPage2Btn: false
      };
    }
    
    return (
      <Router>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Buttons display={display} />
      </Router>
    );
  }
}

export default App;
