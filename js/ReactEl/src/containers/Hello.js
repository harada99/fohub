import React ,{ Component } from 'react';

class Hello extends Component{
  render() {
    let num = 1;
    num++;
    return <div>Hello, world! num of {num}</div>;
  }
}

export default Hello;