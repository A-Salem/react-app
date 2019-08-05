import React from 'react';
import Buttons from './buttons';
import './App.css';

export default class Page2 extends React.Component {
  render() {
    let display = {
      showPage1Btn: true,
      showPage2Btn: false
    };

    return (
      <div>
        <header>
          Here is Page2
        </header>
        <Buttons display={display} />
      </div>
    )
  }
}

