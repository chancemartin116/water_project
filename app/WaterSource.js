import React, { Component } from 'react';
import CedarRiver from './CedarRiver';
import MekongRiver from './MekongRiver';
import NullWaterSource from './NullWaterSource';

export default class WaterSource extends Component {

  render() {
    const { name } = this.props;
    if (name == "Cedar River") {
      return (<CedarRiver/>);
    }
    else if (name == "Mekong River") {
      return (<MekongRiver/>);
    }
    else {
      return (<NullWaterSource/>);
    }
  }
}