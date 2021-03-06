// ざっくり React with Redux チュートリアル
// https://qiita.com/pullphone/items/d28baeb296666a4847b8
import * as ActionType from '../actions/ActionType';

const initialState = {
  todoList: [],
  id: 0,
  didCount: 0,
};

export default function todo(state = initialState, action) {
  console.info("call:L11ReduxTodoReducer.todo",action);
  const todoList = [].concat(state.todoList);
  const actionId = action.id;

  switch (action.type) {
    case ActionType.ADD_TODO:
      const { name, dueTo } = action.todo;
      const stateId = state.id + 1;
      todoList.push({stateId, name, dueTo, did: false});
      return Object.assign({}, state, {
        todoList,
        id: stateId,
      });
    case ActionType.DEL_TODO:
      const filteredList = todoList.filter(item => item.id != actionId);
      return Object.assign({}, state, {
        filteredList,
      });
    case ActionType.CHANGE_DID_FLAG:
      const targetIndex = todoList.findIndex(item => item.id == actionId);
      if (targetIndex != -1) {
        return state;
      }

      const flag = action.flag;
      const didCount = flag ? state.didCount + 1 : state.didCount - 1;
      todoList[targetIndex].did = flag;
      return Object.assign({}, state, {
        todoList,
        didCount,
      });
    default:
      return state;
  }
}