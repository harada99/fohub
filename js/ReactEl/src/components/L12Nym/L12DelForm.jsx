import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chgDelMemo,execDelMemo } from '../../actions/L12NymAction';

const cls = "L12DelForm";

class L12DelForm extends Component {
  input = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"10pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    console.info("call:%s.constructor",this.cls,this.state,props);
    this.state = {
      index:0
    }
    this.doChange = this.doChange.bind(this);
    this.doExec = this.doExec.bind(this);
  }

  doChange(e){
    console.info("call:%s.doChange",this.cls,this.state,e);
    this.props.doChange(e.target.value);
  }

  doExec(e){
    console.info("call:%s.doExec",this.cls,this.state,e);
    e.preventDefault();
    this.props.doExec(this.props.index);
  }

  render(){
    console.info("call:%s.render",this.cls,this.state);
    let n = 0;
    let items = this.props.data.map((value)=>(
      <option key={n} value={n++}>{value.text.substring(0,10)}</option>
    ));
    // <select onChange={this.doChange}
    return (
      <div id="_L12DelForm">
        <form onSubmit={this.doExec}>
          <select defaultValue="-1"  onChange={this.doChange} style={this.input}>
            {items}
          </select>
        <input type="submit" style={this.btn} value="Del"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.index,
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => ({
  doChg: (num) => {
    console.info("call:%s.mapDispatchToProps.doChg",cls,num);    
    let action = chgDelMemo(num);
    dispatch(action);
  },
  doExec: (num) => {
    console.info("call:%s.mapDispatchToProps.doExec",cls,num);    
    let action = execDelMemo(num);
    dispatch(action);
  }
})

export default L12DelForm = connect(mapStateToProps, mapDispatchToProps)(L12DelForm);
