import React, { Component } from 'react';
import { render } from 'react-dom';

import Home from './components/home.jsx';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
};

export default App;

render(
  <App/>,
  document.getElementById('app')
);
