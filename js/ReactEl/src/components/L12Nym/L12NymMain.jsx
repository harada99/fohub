'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import L12Memo from './L12Memo';
import L12AddForm from './L12AddForm';
import L12FindForm from './L12FindForm';
import L12DelForm from './L12DelForm';

// Appコンポーネント
export class L12NymMain extends Component {
  td = {
    width:"250px"
  }

  constructor(props){
    super(props);
    this.cls = "L12NymMain";
    console.info("call:%s.constructor",this.cls,this.state,props);
  }

  render() {
    console.info("call:%s.render",this.cls,this.state);
    return (
      <div id="_L12Nym">
        <L12AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><L12FindForm /></td>
          <td style={this.td}><L12DelForm /></td>
        </tr></tbody></table>
        <L12Memo />
      </div>
    );
  }
}
export default connect()(L12NymMain);

