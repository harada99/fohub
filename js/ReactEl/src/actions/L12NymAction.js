'use strict';
import * as ActionType from '../actions/ActionType';

const fname = "L12NymAction";

export function addMemo(text) {
  console.info("call:%s.addMemo",fname,text);
  return {
    type: ActionType.L12NYM_MEMO_ADD,
    message:text
  }
}

// メモ削除のアクション
export function deleteMemo(num) {
  console.info("call:%s.deleteMemo",fname,num);
  return {
    type: ActionType.L12NYM_MEMO_DEL,
    index:num
  }
}

// メモ検索のアクション
export function findMemo(text) {
  console.info("call:%s.findMemo",fname,text);
  return {
    type: ActionType.L12NYM_MEMO_FIND,
    find:text
  }
}
