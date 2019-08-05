import React from 'react';
import './App.css';

export default class Buttons extends React.Component {
  render() {
    let showPage1Btn = true, showPage2Btn = true;
    let display = this.props && this.props.display;
    if (display) {
      showPage1Btn = display.showPage1Btn;
      showPage2Btn = display.showPage2Btn;
    }
    showPage1Btn = showPage1Btn ? 'block' : 'none'; 
    showPage2Btn = showPage2Btn ? 'block' : 'none'; 
    
    return (
      <div>
        <div className="btnDiv">
          <a className="btn-primary btn" href="/page1" style={{ display: `${showPage1Btn}` }}>Page1</a>
          <a className="btn-primary btn" href="/page2" style={{ display: `${showPage2Btn}` }}>Page2</a>
        </div>
      </div>
    )
  }
}

