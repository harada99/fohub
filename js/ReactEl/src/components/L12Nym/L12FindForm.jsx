import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from '../../actions/L12NymAction';


class L12FindForm extends Component  {
  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  btn = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px 10px",
  }

  constructor(props){
    super(props);
    this.cls = "L12FindForm";
    console.info("call:%s.constructor",this.cls,this.state,props);
    this.state = {
      find:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    console.info("call:%s.doChange",this.cls,this.state,e);
    this.setState({
      find: e.target.value
    });
  }


  doAction(e){
    console.info("call:%s.doAction",this.cls,this.state,e);
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }


  render(){
    console.info("call:%s.render",this.cls);
    return (
      <form onSubmit={this.doAction} id="_L12FindForm">
        <input type="text" size="10" onChange={this.doChange}
          style={this.input} value={this.state.message} />
        <input type="submit" style={this.btn} value="Find"/>
      </form>
    );
  }
}
export default connect((state)=>state)(L12FindForm);
