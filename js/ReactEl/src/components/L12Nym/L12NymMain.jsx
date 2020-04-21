'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import L12Memo from './L12Memo';
import L12AddForm from './L12AddForm';
import L12FindForm from './L12FindForm';
import L12DelForm from './L12DelForm';
import { Util } from '../../tea';
import { loadAddress } from '../../actions/L12NymAction';

const cls = "L12NymMain";

// Appコンポーネント
export class L12NymMain extends Component {
  td = {
    width:"250px"
  }

  constructor(props){
    super(props);
    console.info("call:%s.constructor",cls,this.state,props);
    this.doSaveStorage = this.doSaveStorage.bind(this);
    this.doAjaxAddress = this.doAjaxAddress.bind(this);
  }
  doSaveStorage(e){
    console.info("call:%s.doSaveStorage",cls,this.state,e);    
    this.props.doSaveStorage(this.props.memoList);
  }
  doAjaxAddress(e){
    console.info("call:%s.doAjaxAddresData",cls,this.state,e);    
    this.props.doAjaxAddress();
  }
  render() {
    console.info("call:%s.render",cls,this.state);
    return (
      <div id="_L12Nym">
        <input type="button" value="save storage" onClick={this.doSaveStorage} />
        <input type="button" value="address get:〒080-1189" onClick={this.doAjaxAddress} />
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

const mapStateToProps = (state) => {
  // prppsとして参照したい値を定義する(stateを直接参照しない)
  return {
    memoList: state.data
  }
}
const mapDispatchToProps = (dispatch) => ({
  doSaveStorage: (memoList) => {
    console.info("call:%s.mapDispatchToProps.doSaveStorage",cls,memoList);
    const saveData = {data:memoList, updated:Util.nowTimeStr()};
    localStorage.setItem("L12Memo",JSON.stringify(saveData));
  },
  doAjaxAddress: () => {
    console.info("call:%s.mapDispatchToProps.doAjaxAddresData",cls);
    fetch("https://zip-cloud.appspot.com/api/search?zipcode=0801189" ,{method: "POST"})
      .then((res)=>{
        console.info("call:%s.ajax.response",cls,res);
        return( res.json() );
      })
      .then((json)=>{
        console.info("call:%s.ajax.json",cls,json);
        //json.results
        let action = loadAddress(json);
        dispatch(action);
    })
  }
})
// https://zip-cloud.appspot.com/api/search?zipcode=0801189
// 郵便番号データを取得する。↑は1郵便番号で17住所hitする番号
// {"message": null,
// 	"results": [
// 		{
// 			"address1": "北海道",
// 			"address2": "河東郡士幌町",
// 			"address3": "共豊",
// 			"kana1": "ﾎｯｶｲﾄﾞｳ",
// 			"kana2": "ｶﾄｳｸﾞﾝｼﾎﾛﾁｮｳ",
// 			"kana3": "ｷｮｳﾎｳ",
// 			"prefcode": "1",
// 			"zipcode": "0801189"
// 		},....],
//     "status": 200
//   }
export default L12NymMain = connect(mapStateToProps, mapDispatchToProps)(L12NymMain);