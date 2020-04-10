import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

/* フォルダツリーアイテムの描画＠＠＠ */
const TableItemList = createReactClass({
  render : function() {
    return <table>
      <tr>
        <th>列1</th>
        <th>列2</th>
        <th>列3</th>
      </tr>
      <tr>
        <td>val1</td>
        <td>val2</td>
        <td>val3</td>
      </tr>
      <tr>
        <td>val1</td>
        <td>val2</td>
        <td>val3</td>
      </tr>
      </table>
  }
})
/* フォルダツリーアイテムの型の定義*/
TableItemList.propTypes = {
  tableItemList: PropTypes.object.isRequired
}

export default TableItemList