import React, { Component } from 'react';
import { connect } from 'react-redux';
import { execFindMemo } from '../../actions/L12NymAction';

const cls = "L12FindForm";

class L12FindForm extends Component  {
  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  // btn = {
  //   fontSize:"12pt",
  //   color:"#006",
  //   padding:"1px 10px",
  // }

  constructor(props){
    super(props);
    console.info("call:%s.constructor",this.cls,this.state,props);
    // this.state = {
    //   find:''
    // }
    this.doExec = this.doExec.bind(this);
  }

  // doChg(e){
  //   console.info("call:%s.doChg",cls,this.state,e);
  //   this.props.doChg(e.target.value);
  // }

  doExec(e){
    console.info("call:%s.doExec",cls,this.state,e);
    e.preventDefault();
    this.props.doExec(e.target.value);
  }

  render(){
    console.info("call:%s.render",cls);
    // 入力毎にフィルタリングするよう変更
    // <input type="submit" style={this.btn} value="Find"/>
    return (
      <>
      Find Fillter：
      <input type="text" size="10" onChange={this.doExec} style={this.input} value={this.props.ftext} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // prppsとして参照したい値を定義する(stateを直接参照しない)
  return {
    ftext: state.ftext,
    fdata: state.fdata
  }
}
const mapDispatchToProps = (dispatch) => ({
  // doChg: (ftext) => {
  //   console.info("call:%s.mapDispatchToProps.doChg",cls,ftext);    
  //   let action = chgFindMemo(ftext);
  //   dispatch(action);
  // },
  doExec: (ftext) => {
    console.info("call:%s.mapDispatchToProps.doExec",cls,ftext);    
    let action = execFindMemo(ftext);
    dispatch(action);
  }
})

export default L12FindForm = connect(mapStateToProps, mapDispatchToProps)(L12FindForm);
