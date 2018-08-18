import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './App.scss';

export default class MainMenuBar extends Component {
  
  render() {
    return (
      <div className="menuBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
    )
  }
}