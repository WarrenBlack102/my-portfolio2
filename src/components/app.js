import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from "./portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Warren Black's Portfolio</h1>
        <h2>This class is Awesome</h2>
        <h3><PortfolioContainer/></h3>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
