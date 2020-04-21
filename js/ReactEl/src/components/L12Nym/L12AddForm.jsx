import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chgAddMemo,execAddMemo } from '../../actions/L12NymAction';

const cls = "L12AddForm";

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
    console.info("call:%s.constructor",cls,this.state,props);
    this.doChg = this.doChg.bind(this);
    this.doExec = this.doExec.bind(this);
  }

  doChg(e){
    console.info("call:%s.doChg",cls,this.state,e);
    this.props.doChg(e.target.value);
  }

  doExec(e){
    console.info("call:%s.doExec",cls,this.state,e);
    e.preventDefault();
    this.props.doExec(this.props.text);

    //※mapDispatchToPropsは、これを外に出しているだけ？
    //let action = addMemo(this.state.message);
    //this.props.dispatch(action);

    // ※Reduxを使うとときは「基本的に」setStateを書かない
    //   書いては行けないではない。ケース・バイ・ケースなので適宜うまくやって
    //  http://cloudcafe.tech/?p=2259
    //  https://made.livesense.co.jp/entry/2016/09/29/080000
    // this.setState({
    //   text: ''
    // });
  }

  render(){
    console.info("call:%s.render",cls,this.state);
    return (
      <div id="_L12AddForm">
        <p style={this.message} className="message">{this.props.message}</p>
        <form onSubmit={this.doExec}>
        <input type="text" size="40" onChange={this.doChg}
          style={this.input} value={this.props.text} required />
        <input type="submit" style={this.btn} value="Add"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // prppsとして参照したい値を定義する(stateを直接参照しない)
  return {
    text: state.text,
    message: state.message
  }
}
const mapDispatchToProps = (dispatch) => ({
  doChg: (text) => {
    console.info("call:%s.mapDispatchToProps.doChg",cls,text);    
    let action = chgAddMemo(text);
    dispatch(action);
  },
  doExec: (text) => {
    console.info("call:%s.mapDispatchToProps.doExec",cls,text);    
    let action = execAddMemo(text);
    dispatch(action);
  }
})

export default L12AddForm = connect(mapStateToProps, mapDispatchToProps)(L12AddForm);