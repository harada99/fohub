import {SHOW_TABLEITEMLIST} from '../actions'
/* パスリストの初期値 */
const initialState = []
/* パスリストの状態の更新 */
const tableItemList = (state = initialState, action) => {
  console.log("--イベント(action)の内容---")
  console.log(JSON.stringify(action))
  console.log("--------------------------")
  console.log("--変更前の状態(state)------")
  console.log(state)
  console.log("--------------------------")
  switch (action.type) {
    case SHOW_TABLEITEMLIST:
      return state
    default:
      return state
  }
}

export default tableItemList