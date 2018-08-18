import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from './App.scss';
import MainMenuBar from './MainMenuBar';
import MainBulletPoints from './MainBulletPoints';

class App extends Component 
{
  render() 
  {
    return (
      <div>
        <img className="logo" src="SWIM.png" alt="SWIM"/>
        <MainMenuBar />
        <MainBulletPoints />
      </div>
    );
  }
}

export const mapStateToProps = (state) => 
{
  return 
  {
  };
};

export const mapDispatchToProps = (dispatch) => 
{
  return 
  {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);