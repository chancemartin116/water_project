import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from './App.scss';

class Features extends Component {

  render() {
    return (
      <div>
          <h1>Features</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Features);