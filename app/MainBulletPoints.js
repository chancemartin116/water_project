import React, { Component } from 'react';
import classes from './App.scss';

export default class MainBulletPoints extends Component 
{
  render()
  {
    return (
      <ul>
        <li>Water Quality</li>
        <li>Climate, Hydrology & Climate Change  Resiliency</li>
        <li>Water Management Planning</li>
        <li>Infrastructure</li>
        <li>Biological/Ecological Information</li>
      </ul>
    )
  }
}