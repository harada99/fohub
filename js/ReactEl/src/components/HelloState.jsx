import React, {Component} from 'react';

export class HelloState extends Component {
  constructor() {
    super();
    this.state = {
      power: false
    };
  }
  render() {
    return (
      <span>
        {this.state.power ? 'ON' : 'OFF'}      
      </span>
    )
  }
}

export class HelloState2 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'taro',
      data: {
        height: 170,
        weight: 65
      }
    };
  }
  render() {
    return (
      <dl>
        <dt>Name</dt><dd>{this.state.name}</dd>
        <dt>Height</dt><dd>{this.state.data.height}</dd>
        <dt>Weight</dt><dd>{this.state.data.weight}</dd>
      </dl>
    )
  }
}



