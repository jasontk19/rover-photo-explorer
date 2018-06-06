import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default App;
