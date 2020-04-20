import React, {Component} from 'react';

export class L04Event extends Component {
  constructor() {
    super();
    this.cls = "L04Event";
    console.info("call:%s.constructor",this.cls,this.state);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      power: false
    };
  }
  handleClick() {
    console.info("call:%s.handleClick",this.cls,this.state);
    this.setState({
      power: !this.state.power
    })
  }
  render() {
    console.info("call:%s.render",this.cls,this.state);
    return (
      <p>
        <button onClick={this.handleClick}>Switch</button>
        <span className='panel'>{this.state.power ? 'ON' : 'OFF'}</span>
      </p>
    )
  }
}



