import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }

  updateString(item) {
    this.setState({filterString: item})
    console.log(this.state.filterString)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateString(e.target.value)}type="text"/>
        {this.state.foods.filter(e => e.includes(this.state.filterString)).map(e => {
          return (
            <h1>{e}</h1>
          )
        })}
      </div>
    );
  }
}

export default App;
