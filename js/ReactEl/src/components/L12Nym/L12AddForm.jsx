import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from '../../actions/L12NymAction';


class L12AddForm extends Component {
  input = {
    fontSize:"16pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"14pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    this.cls = "L12AddForm";
    console.info("call:%s.constructor",this.cls,this.state,props);
    this.state = {
      message:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e){
    console.info("call:%s.doChange",this.cls,this.state,e);
    this.setState({
      message: e.target.value
    });
  }

  doAction(e){
    console.info("call:%s.doAction",this.cls,this.state,e);
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }

  render(){
    console.info("call:%s.render",this.cls,this.state);
    return (
      <div id="_L12AddForm">
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doAction}>
        <input type="text" size="40" onChange={this.doChange}
          style={this.input} value={this.state.message} required />
        <input type="submit" style={this.btn} value="Add"/>
        </form>
      </div>
    );
  }
}
export default connect((state)=>state)(L12AddForm);