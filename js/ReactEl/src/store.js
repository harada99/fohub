'use strict';
import {createStore} from 'redux';
import L11ReduxTodo from './reducers/L11ReduxTodoReducer';
import L12NymReducer from './reducers/L12NymReducer';

export let L11ReduxTodoStore = createStore(L11ReduxTodo);
export let L12NymStore = createStore(L12NymReducer);
