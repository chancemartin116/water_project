import React, { Component } from 'react';

export default class WaterSourceReport extends Component {

  render() {
    const { report } = this.props;
    return (
      <div>
        <p>{report.summary}</p>
        <h3>Water Quality</h3>
        <p>{report.quality}</p>
        <h3>Water Management</h3>
        <h3>Biological Information</h3>
      </div>
    );
  }
}