import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from './App.scss';
import WaterSource from './WaterSource';

export default class Features extends Component {
  
  constructor() {
    super();
    this.state = {waterSourceName: ""};
  }

  render() {
    return (
      <div className="features">
        <h1>Features</h1>
        <div className="selectWaterSource">
          <h3>Select a water source: </h3>
          <select onChange={this.handleWaterSourceChange.bind(this)}>
            <option defaultValue></option>
            <option>Cedar River</option>
            <option>Mekong River</option>
          </select>
        </div>
        <WaterSource name={this.state.waterSourceName}/>
      </div>
    );
  }

  handleWaterSourceChange(e) {
    this.setState({waterSourceName: e.target.value});
  }
}

