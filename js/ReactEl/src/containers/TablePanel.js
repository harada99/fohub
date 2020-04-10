import { connect } from 'react-redux'
import TableItemList from '../components/TableItemList'
/* パスアイテムリストの状態の切り出し */
const tableStateToProps = (state)=> {
  return {
    TableItemList
  }
}
/* パスアイテムリストの状態と画面(コンテナ)の接続(connect呼び出し) */
const TablePanel = connect(
  tableStateToProps
)()

export default TablePanel