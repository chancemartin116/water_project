import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './App.scss';
import Button from '@material-ui/core/Button';

export default class MainMenuBar extends Component {
  
  render() {
    return (
      <div className="menuBar">
        <Link to="/home">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
        <Link to="/features">
          <Button variant="contained" color="secondary">
            Features
          </Button>
        </Link>
        <Link to="/resources">
          <Button variant="contained" color="secondary">
            Resources
          </Button>
        </Link>
      </div>
    )
  }
}