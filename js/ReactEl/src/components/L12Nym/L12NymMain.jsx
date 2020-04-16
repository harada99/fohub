'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Memo from './L12Memo';
import AddForm from './L12AddForm';
import FindForm from './L12FindForm';
import DelForm from './L12DelForm';

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
      <div id="_L12NymMain">
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}
export default connect()(L12NymMain);
