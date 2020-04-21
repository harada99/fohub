'use strict';
import * as ActionType from '../actions/ActionType';
import { Util } from '../tea';

const fname = 'L12NymReducer';
const initData = {
  mode:'default',
  message:'Please type message:',
  text: '',
  data: makeInitData(),
  ftext: '',
  fdata:[]
};
function makeInitData(){
  console.info("call:%s.L12NymReducer",fname,makeInitData);
  const storageData = localStorage.getItem("L12Memo");
  if(storageData){
    return JSON.parse(storageData).data;
  }else{
    return [{text:'sample AAA', created:Util.nowTimeStr()},
            {text:'sample BBB', created:Util.nowTimeStr()},
            {text:'sample CCC', created:Util.nowTimeStr()}];
  }
}

// レデューサー
export default function L12NymReducer(state=initData , action) {
  console.info("call:%s.L12NymReducer",fname,action);
  switch (action.type) {
    case ActionType.L12NYM_CHG_ADDMEMO:
      return chgAddMemoReduce(state, action);
    case ActionType.L12NYM_EXEC_ADDMEMO:
      return execAddMemoReduce(state, action);
    // case ActionType.L12NYM_CHG_FINDMEMO:
    //   return chgFindMemoReduce(state, action);
    case ActionType.L12NYM_EXEC_FINDMEMO:
      return execFindMemoReduce(state, action);
    case ActionType.L12NYM_EXEC_DELMEMO:
      return execDelMemoReduce(state, action);
    case ActionType.L12NYM_CHG_DELMEMO:
      return chgDelMemoReduce(state, action);
    case ActionType.L12NYM_LOAD_ADDRESS:
        return loadAddressReduce(state, action);
    default:
      console.info("call:%s.L12NymReducer:default",fname,action);
      state = initData;
      return state;
  }
}

// レデュースアクション

// メモ追加のレデュース処理
function chgAddMemoReduce(state, action){
  console.info("call:%s.chgAddMemoReduce",fname,state,action);
  return {
    mode: 'default',
    message: `Now input message...[${action.text}]`,
    text: action.text,
    data: state.data,
    fdata: state.fdata
  };
}
function execAddMemoReduce(state, action){
  console.info("call:%s.execAddMemoReduce",fname,state,action);
  const newData = [{text:action.text,
                    created:Util.nowTimeStr()
                  }].concat(state.data);
  return {
    mode:'default',
    message: `Added! [${action.text}]`,
    text: '',
    data: newData,
    fdata: []
  };
}

// メモ検索のレデュース処理
// function chgFindMemoReduce(state, action){
//   console.info("call:%s.chgFindMemoReduce",fname,state,action);
//   return {
//     mode: 'default',
//     message: state.message,
//     text: state.text,
//     data: state.data,
//     ftext: action.ftext,
//     fdata: []
//   };
// }
function execFindMemoReduce(state, action){
  console.info("call:%s.execFindMemoReduce",fname,state,action);
  let f = action.ftext;
  let fdata = [];
  state.data.forEach((value)=>{
    if (value.text.indexOf(f) >= 0){
      fdata.push(value);
    }
  });
  return {
    mode: 'find',
    message: `Find...[${f}] (${fdata.length}件)`,
    text: state.text,
    data: state.data,
    ftext: action.ftext,
    fdata: fdata
  };
}

// メモ削除のレデュース処理
function chgDelMemoReduce(state, action){
  console.info("call:%s.chgDelMemoReduce",fname,state,action);
  return {
    mode: 'default',
    message: `Delete target...[${action.index}]`,
    text: state.text,
    data: state.data,
    fdata: state.fdata
  };
}
function execDelMemoReduce(state, action){
  console.info("call:%s.deleteReduce",fname,state,action);
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    mode: 'delete',
    message: `Deleted! [${action.index}]`,
    text: '',
    data: newdata,
    fdata: []
  }
}

function loadAddressReduce(state, action){
  console.info("call:%s.loadAddressReduce",fname,state,action);
  const addrList = action.addressJson.results;
  const data = addrList.map( obj => {
    let addr = obj.address1 + obj.address2 + obj.address3;
    return {text:addr, created:Util.nowTimeStr()}
  });
  return {
    mode:'default',
    message: "Loaded! AddressData",
    text: '',
    data: data,
    fdata: []
  };
}
