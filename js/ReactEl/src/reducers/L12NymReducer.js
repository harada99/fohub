'use strict';
import * as ActionType from '../actions/ActionType';

const fname = 'L12NymReducer';
const initData = {
  data:[{message:'sample data', created:new Date()}],
  message:'please type message:',
  mode:'default',
  fdata:[]
};

// レデューサー
export default function L12NymReducer(state = initData, action) {
  console.info("call:%s.L12NymReducer",fname,action);
  switch (action.type) {
    case ActionType.L12NYM_MEMO_ADD:
      return addReduce(state, action);

    case ActionType.L12NYM_MEMO_DEL:
      return deleteReduce(state, action);

    case ActionType.L12NYM_MEMO_FIND:
      return findReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション

// メモ追加のレデュース処理
function addReduce(state, action){
  console.info("call:%s.addReduce",fname,state,action);
  let data = {
    message:action.message,
    created:new Date()
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode:'default',
    fdata:[]
  };
}

// メモ検索のレデュース処理
function findReduce(state, action){
  console.info("call:%s.findReduce",fname,state,action);
  let f = action.find;
  let fdata = [];
  state.data.forEach((value)=>{
    if (value.message.indexOf(f) >= 0){
      fdata.push(value);
    }
  });
  return {
    data:state.data,
    message:'find "' + f + '":',
    mode:'find',
    fdata:fdata
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action){
  console.info("call:%s.deleteReduce",fname,state,action);
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data:newdata,
    message:'delete "' + action.index + '":',
    mode:'delete',
    fdata:[]
  }
}