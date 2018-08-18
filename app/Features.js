import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from './App.scss';

var cedarSummary = "The Cedar River is a river in the U.S. state of Washington. About 45 miles (72 km) long, it originates in the Cascade Range and flows generally west and northwest, emptying into the southern end of Lake Washington. Its upper watershed is a protected area called the Cedar River Watershed, which provides drinking water for the greater Seattle area."
var mekongSummary = "The Mekong is a trans-boundary river in Southeast Asia. It is the world's twelfth longest river and the seventh longest in Asia. Its estimated length is 4,350 km (2,703 mi) and it drains an area of 795,000 km2 (307,000 sq mi), discharging 475 km3 (114 cu mi) of water annually."

export default class Features extends Component {
  
  constructor() {
    super();
    this.state = {riverBasinSummary: ""};
  }

  render() {
    return (
      <div className="features">
          <h1>Features</h1>
          <div className="selectRiverBasin">
            <h3>Select a river basin: </h3>
            <select onChange={this.handleRiverBasinChange.bind(this)}>
              <option selected></option>
              <option>Cedar</option>
              <option>Mekong</option>
            </select>
          </div>
          <div>
            <p>{this.state.riverBasinSummary}</p>
          </div>
      </div>
    );
  }

  handleRiverBasinChange(e) {
    var riverBasinName = e.target.value;
    if (riverBasinName == "Cedar") {
      this.setState({riverBasinSummary: cedarSummary});
    }
    else if (riverBasinName == "Mekong") {
      this.setState({riverBasinSummary: mekongSummary});
    }
  }
}

