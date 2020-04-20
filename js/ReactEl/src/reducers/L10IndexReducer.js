import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import L10TodoReducer from './L10TodoReducer';

const L10TodoApp = combineReducers({
  visibilityFilter,
  L10TodoReducer
})
export default L10TodoApp;