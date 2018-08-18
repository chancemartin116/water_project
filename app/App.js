import React, { Component } from 'react';
import classes from './App.scss';
import MainMenuBar from './MainMenuBar';
import MainBulletPoints from './MainBulletPoints';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <img className="logo" src="SWIM.png" alt="SWIM"/>
        <MainMenuBar />
        <MainBulletPoints />
      </div>
    );
  }
}
