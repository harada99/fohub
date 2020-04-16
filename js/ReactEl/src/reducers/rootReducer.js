import { combineReducers } from 'redux';
import folderTreeItem from './folderTreeItem';
import pathItemList from './pathItemList';

/* 分割した状態遷移の関数群(reducers)の結合(combineReducers呼び出し) */
export const rootReducer = combineReducers({
  folderTreeItem,
  pathItemList,
})

