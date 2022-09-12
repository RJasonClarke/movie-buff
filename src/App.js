import React, { Component } from 'react';
import { fetchMovies } from './actions/moviesActions';

class App extends Component {

  componentDidMount(){
    fetchMovies()
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
