import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.foods.map(e=> {
          return (
            <h1>{e}</h1>
          )
        })}
      </div>
    );
  }
}

export default App;
