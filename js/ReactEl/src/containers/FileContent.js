import { connect } from 'react-redux'
import FileContent from '../components/FileContent'
/* パスアイテムリストの状態の切り出し */
const mapStateToProps = (state)=> {
/*
  return {
    file: state.fileContent.File,
    content: state.fileContent.Content,
  }
*/
return {
  fileContent: state.fileContent,
}
}
/* パスアイテムリストの状態と画面(コンテナ)の接続(connect呼び出し) */
const FileContentPanel = connect(
  mapStateToProps
)(FileContent)

export default FileContentPanel