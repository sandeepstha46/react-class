import React, {Component} from 'react';
import './App.css';

import DisplayProfile from './components/DisplayProfile';



class App extends Component {

  state = {
    year: 2021,
    name : "Rahul",
    email : "jhondoe@email.com",
    age : 20,
    address : "Damak, Jhapa",
    number : "9845678901",
  };

  render() {
    return (
      <div>
        <p>Welcome to class {this.state.year}</p>
        <DisplayProfile profileInformation = {this.state} />
      </div>
    );
  }
}


export default App;
