import React, { Component } from 'react';
import { connect } from 'react-redux';

const cls = "L12Item";
class L12Item extends Component {
  th = {
    fontSize:"14px",
    minWidth:"45px"
  };
  td = {
    fontSize:"14px",
    minWidth:"430px"
  };
  date = {
    fontSize:"14px",
    width:"60px"
  };

  render(){
    console.info("call:%s.render",cls,this.state);    
    // let d = this.props.value.created;
    // let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let f = this.props.value.created;
    return (
    <tr><th style={this.th}>No.{this.props.index}</th>
      <td style={this.td}>{this.props.value.text}</td>
      <td style={this.date}>{f}</td>
    </tr>
    );
  }
}
export default connect()(L12Item);