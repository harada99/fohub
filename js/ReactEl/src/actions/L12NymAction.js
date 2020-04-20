'use strict';
import * as ActionType from '../actions/ActionType';

const fname = "L12NymAction";

export function chgAddMemo(text) {
  console.info("call:%s.chgAddMemo",fname,text);
  return {
    type: ActionType.L12NYM_CHG_ADDMEMO,
    text:text
  }
}
export function execAddMemo(text) {
  console.info("call:%s.submitAddMemo",fname,text);
  return {
    type: ActionType.L12NYM_EXEC_ADDMEMO,
    text:text
  }
}

// メモ検索のアクション
// export function chgFindMemo(ftext) {
//   console.info("call:%s.findMemo",fname,ftext);
//   return {
//     type: ActionType.L12NYM_CHG_FINDMEMO,
//     ftext:ftext
//   }
// }
export function execFindMemo(ftext) {
  console.info("call:%s.findMemo",fname,ftext);
  return {
    type: ActionType.L12NYM_EXEC_FINDMEMO,
    ftext: ftext
  }
}

// メモ削除のアクション
export function chgDelMemo(num) {
  console.info("call:%s.chgAddMemo",fname,num);
  return {
    type: ActionType.L12NYM_CHG_DELMEMO,
    index:num
  }
}
export function execDelMemo(num) {
  console.info("call:%s.deleteMemo",fname,num);
  return {
    type: ActionType.L12NYM_EXEC_DELMEMO,
    index:num
  }
}