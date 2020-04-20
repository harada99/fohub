import { connect } from 'react-redux'
import PathItemList from '../components/PathItemList'
import { openFileEvent } from '../actions'
/* パスアイテムリストの状態の切り出し */
const mapStateToProps = (state)=> {
  return {
    pathItemList: state.pathItemList
  }
}
// ADD EventProc
const mapDispatchToProps = (dispatch) => ({
  onFileNameClick: (fullPath, fileName) => {
    console.log('Debug 111--> ' + fullPath + ',' + fileName)
    dispatch(openFileEvent(fullPath, fileName))
  },
})

/* パスアイテムリストの状態と画面(コンテナ)の接続(connect呼び出し) */
const PathItemListPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(PathItemList)

export default PathItemListPanel