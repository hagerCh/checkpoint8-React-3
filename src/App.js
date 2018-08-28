import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Program from './components/Program';
import Location from './components/Location';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Program/> 
        <Location/>
      </div>
    );
  }
}

export default App;
