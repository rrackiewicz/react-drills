import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  updateInput(event) {
    this.setState({input: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateInput} />
        <h1>{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
