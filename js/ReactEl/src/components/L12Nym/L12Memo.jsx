import React, { Component } from 'react';
import { connect } from 'react-redux';
import { execAddMemo } from '../../actions/L12NymAction';
import Item from './L12Item';

const cls = "L12Memo";;

class L12Memo extends Component {
  constructor(props){
    super(props);
    console.info("call:%s.constructor",cls,this.state,props);
  }
  doRefresh(props){
    console.info("call:%s.doChange",cls,this.state,props);
    this.setState({
      data: this.props.data
    });
  }
  render(){
    console.info("call:%s.render",cls,this.state);    
    let n = 0;
    let data;
    switch (this.props.mode){
      case 'default':
        data = this.props.data.map((value)=>(
          <Item key={value.text} value={value} index={n++} />
        ));
        break;

      case 'find':
        data = this.props.fdata.map((value)=>(
          <Item key={value.text} value={value} index={n++}/>
        ));
        break;

      case 'delete':
        data = this.props.data.map((value)=>(
          <Item key={value.text} value={value} index={n++} />
        ));
        break;

      default:
        data = this.props.data.map((value)=>(
          <Item key={value.text} value={value} index={n++} />
        ));
    }
    return (
      <table id="_L12Memo"><tbody>{data}</tbody></table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode : state.mode, 
    data : state.data, 
    fdata : state.fdata
  }
}
const mapDispatchToProps = (dispatch) => ({
  refreshMemo: () => {
    console.info("call:%s.mapDispatchToProps",this.cls,this.state);    
    dispatch(execAddMemo());
  }
})

//export default connect((state)=>state)(L12Memo);
export default connect(mapStateToProps,mapDispatchToProps)(L12Memo);
 