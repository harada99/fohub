import { L10_ADD_TODO } from '../actions/L10Action';

const initialState = {
  list: []
}

function todos(state = initialState, action) {
  console.info("call:L10TodoReducer.todos",action);
  switch (action.type) {
    case L10_ADD_TODO:
      return Object.assign({}, state, {
        list: [
          ...state.list,
          {
            text: action.text,
            completed:false
          }
        ]
      })
    default:
      return state
  }
}
export default todos