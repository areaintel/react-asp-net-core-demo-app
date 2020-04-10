import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to trips manager</h1>
        <p>Use this manager to manage your trips, by:</p>
        <ul>
          <li><strong>C</strong>reate</li>
          <li><strong>R</strong>ead</li>
          <li><strong>U</strong>pdate</li>
          <li><strong>D</strong>elete</li>
          <li><a href="/trips">Show</a> all</li>
        </ul>
        
      </div>
    );
  }
}
