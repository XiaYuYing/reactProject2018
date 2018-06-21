import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './less/component.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="header-ul">
            <li><a href="/">首页</a></li>
            <li><a href="/" target="_blank">工作相关</a></li>
            <li><a href="/">私人兴趣</a></li>
          </ul>
        </header>
        <p className="App-intro">
          begin your work
        </p>
      </div>
    );
  }
}

export default App;
