import React, { Component } from 'react';

export default class CedarRiver extends Component {

  constructor() {
    super();
    this.state = {
      summary:  "The Cedar River is a river in the U.S. state of Washington. About 45 miles (72 km) long, it originates in the Cascade Range and flows generally west and northwest, emptying into the southern end of Lake Washington. Its upper watershed is a protected area called the Cedar River Watershed, which provides drinking water for the greater Seattle area.",
      quality: "Good"
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