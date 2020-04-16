'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/L10Action';
import TodoList from '../'


export class L10Redux extends Component {
  constructor() {
    super();
    this.cls = "L05Key";
    console.info("call:%s.constructor",this.cls,this.state);
    this.handleClickAddBefore = this.handleClickAddBefore.bind(this);
    this.handleClickAddAfter = this.handleClickAddAfter.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickInit = this.handleClickInit.bind(this);
    this.state = {
      power: false,
      listData: ["boo","foo","woo"]
    };
  }
  handleClickAddBefore() {
    console.info("call:%s.handleClickAddBefore",this.cls,this.state);
    this.state.listData.unshift("bef")
    this.setState({
      state: this.state.listData
    });
  }
  handleClickAddAfter() {
    console.info("call:%s.handleClickAddAfter",this.cls,this.state);
    this.state.listData.push("aft");
    this.setState({
      state: this.state.listData
    });
  }
  handleClickClear() {
    console.info("call:%s.handleClickClear",this.cls,this.state);
    this.state.listData.splice(0,this.state.listData.length);
    this.setState({
      state: this.state.listData
    });
  }
  handleClickInit() {
    console.info("call:%s.handleClickInit",this.cls,this.state);
    this.state.listData = ["boo","foo","woo"];
    this.setState({
      state: this.state.listData
    });
  }
  render() {
    console.info("call:%s.render",this.cls,this.state);
    return (
      <p>
        <button onClick={this.handleClickAddBefore}>addBefore</button>
        <button onClick={this.handleClickAddAfter}>addAfter</button>
        <button onClick={this.handleClickClear}>clear</button>
        <button onClick={this.handleClickInit}>init</button>
        <dl>
          {this.state.listData.map((val, idx) => {
            return (
            <>
              <dt>{idx}</dt>
              <dd>{val}</dd>
            </>
            )})
          }
        </dl>
      </p>
    )   
  }
  componentDidMount() {
    console.info("call:%s.componentDidMount",this.cls,this.state);
  }
  componentDidUpdate() {
    console.info("call:%s.componentDidUpdate",this.cls,this.state);
  }
  componentWillUnmount() {
    console.info("call:%s.componentWillUnmount",this.cls,this.state);
  }
};
