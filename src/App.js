import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Github from './Github';
import Header from './Components/Header';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }


  static defaultProps = {
    clientID: Sz7rXtT2JeGMs18hSgGUOqeXXOIH4HPI,
    domain: 'rupesh1310.auth0.com'
  }
componentWillMount(){
  this.lock = new Auth0Lock(this.props.clientID, this.props.domain)
  this.lock.on('authenticated', (authResult) => {
    console.log(authResult);
  });
}
  
  
  
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
