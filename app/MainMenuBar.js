import React, { Component } from 'react';
import classes from './App.scss';

export default class MainMenuBar extends Component
{
  render()
  {
    return (
      <div className="menuBar">
        <button>Home</button>
        <button>Features</button>
        <button>Resources</button>
      </div>
    )
  }
}