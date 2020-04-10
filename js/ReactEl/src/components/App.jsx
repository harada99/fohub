import React from 'react'
import AddressBarPanel from '../containers/AddressBarPanel'
import FolderTreePanel from '../containers/FolderTreePanel'
import PathListPanel from '../containers/PathListPanel'
import Hello from '../containers/Hello'
import HelloShort from '../containers/HelloShort'
import HelloProps from '../containers/HelloProps'
import HelloPropsData from '../containers/HelloPropsData'
import HelloPropsLoop from '../containers/HelloPropsLoop'
//import TablePanel from '../containers/TablePanel'
/* アプリケーション画面の定義＠ */
const App = () => (
  <div>
    <AddressBarPanel />
    <hr/>
    <FolderTreePanel />
    <hr/>
    <PathListPanel />
    <hr/>
    Lesson 1: <Hello /><HelloShort />
    <hr/>
    Lesson 2: 
    <HelloProps name="Taro" />
    <br/>aaa
    <HelloPropsData />
    <br/>
    <HelloPropsLoop />
    <hr/>
  </div>
)
export default App