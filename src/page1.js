import React from 'react';
import Buttons from './buttons';
import './App.css';

export default class Page1 extends React.Component {
  render() {
    let display = {
      showPage1Btn: false,
      showPage2Btn: true
    };

    return (
      <div>
        <header>
          Here is Page1
        </header>
        <Buttons display={display}/>
      </div>
    )
  }
}


