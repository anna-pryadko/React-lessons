import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Blog from './Blog/Blog';
import Buttons from './Buttons/buttons';

class App extends Component {
  render() {
    return (
        <div>
       
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            Please, enter the price.
          </label>
          <input
            id="search"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Search
          </button>
        </form>
        <h3>Список дел</h3>
        <FoundList items={this.state.items} />
      </div>
    );
  }
}

export default App;
