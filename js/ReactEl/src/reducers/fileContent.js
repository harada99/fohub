import { SHOW_FILECONTENT } from '../actions/fileContentAction'
/* パスリストの初期値 */
const initialState = []
/* パスリストの状態の更新 */
const fileContent = (state = initialState, action) => {
  console.log("--イベント(action)の内容---")
  console.log(JSON.stringify(action))
  console.log("--------------------------")
  console.log("--変更前の状態(state)------")
  console.log(state)
  console.log("--------------------------")
  switch (action.type) {
    case SHOW_FILECONTENT: // 'フォルダの一覧表示イベント'
      const fs = window.require('fs')
      const path = window.require('path')

      let filePath = path.join(action.fullPath, action.fileName)
      console.log("KITA KITA KITA KITA >>" + filePath)
      const content = fs.readFileSync(filePath, {encoding: "utf-8"});
      console.log(content);
      return content
    default:
      return state
  }
}

export default fileContent