import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Github from './Github';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Github/>
      </div>
    );
  }
}

export default App;
