// ざっくり React with Redux チュートリアル
// https://qiita.com/pullphone/items/d28baeb296666a4847b8
import * as ActionType from '../actions/ActionType';

const fname = "L11ReduxTodoAction";

export function addTodo(name, dueTo) {
  console.info("call:%s.todo",fname,name,dueTo);
  return {
    type: ActionType.ADD_TODO,
    todo: {name, dueTo},
  };
}

export function delTodo(id) {
  console.info("call:%s.delTodo",fname,name,dueTo);
  return {
    type: ActionType.DEL_TODO,
    id,
  };
}

export function changeDidFlag(id, flag) {
  console.info("call:%s.changeDidFlag",fname,name,dueTo);
  return {
    type: ActionType.DEL_TODO,
    id,
    flag,
  };
}
