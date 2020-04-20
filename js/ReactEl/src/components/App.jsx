'use strict';
import React from 'react'
import AddressBarPanel from '../containers/AddressBarPanel'
import FolderTreePanel from '../containers/FolderTreePanel'
import PathListPanel from '../containers/PathListPanel'
import Hello from '../containers/Hello'
import HelloShort from '../containers/HelloShort'
import HelloProps from '../containers/HelloProps'
import HelloPropsData from '../containers/HelloPropsData'
import HelloPropsLoop from '../components/HelloPropsLoop'
import {HelloState,HelloState2} from '../components/HelloState'
import {L04Event} from '../components/L04Event'
import {L05Key} from '../components/L05Key'
import {L12NymMain} from './L12Nym/L12NymMain'
import {L12NymStore} from '../store'
import {Provider} from 'react-redux'

/* アプリケーション画面の定義＠ */
const App = () => (
  <>
  <article id="study-c" className="hide">CCC</article>
  <article id="study-b">
    <section>
        <h3>Lesson-12 NYM メモ</h3>
        <Provider store={L12NymStore}>
          <L12NymMain />
        </Provider>
    </section>
  </article>
  <article id="study-a">
    <section>
      <h3>Lesson-05 Key</h3>
      <L05Key />
    </section>
    <section>
      <h3>Lesson-04 Event</h3>
      <L04Event />
    </section>
    <section>
      <h3>Lesson-03 State</h3>
      <HelloState />
      <br/>
      <HelloState2 />
    </section>
    <section>
      <h3>Lesson-02 Props</h3>
      <HelloProps name="Taro" />
      <HelloPropsData />
      <hr/>
      <HelloPropsLoop />
    </section>
    <section>
      <h3>Lesson-01 Hello</h3>
      <Hello /><HelloShort />
    </section>

    <br/><hr/>
    <div id="base">
      <AddressBarPanel />
      <hr/>
      <FolderTreePanel />
      <hr/>
      <PathListPanel />
    </div>
  </article> 
  </>
)
export default App