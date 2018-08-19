import React, { Component } from 'react';

export default class MekongRiver extends Component {

  constructor() {
    super();
    this.state = {
      summary: "The Mekong is a trans-boundary river in Southeast Asia. It is the world's twelfth longest river and the seventh longest in Asia. Its estimated length is 4,350 km (2,703 mi) and it drains an area of 795,000 km2 (307,000 sq mi), discharging 475 km3 (114 cu mi) of water annually.",
      quality: "Not good"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.summary}</p>
        <h3>Water Quality</h3>
        <p>{this.state.quality}</p>
      </div>
    );
  }
}