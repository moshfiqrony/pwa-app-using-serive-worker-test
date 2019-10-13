// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './Today/Today'
// Import the History component to be used below

class App extends Component {
  render() {
    return (
      <div className="">
          <section className="results--section">
              <div className="container">
                  <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
              </div>
          </section>
      </div>
    );
  }
}

export default App;