import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from './App.scss';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <img className="logo" src="SWIM.png" alt="SWIM"/>
        <div className="menuBar">
          <button>Home</button>
          <Link to="/features">Features</Link>
          <button>Resources</button>
        </div>
        <ul>
          <li>
            <a>Water Quality</a>
          </li>
          <li>Climate, Hydrology & Climate Change  Resiliency</li>
          <li>Water Management Planning</li>
          <li>Infrastructure</li>
          <li>Biological/Ecological Information</li>
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


// TODO: add interactive map for each page, add page for each bullet, pics of community center and exhibits, link for teachers: lesson plans, etc., literature database,
// TODO: run analytics on map