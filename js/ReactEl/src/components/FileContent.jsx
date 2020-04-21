import React from 'react'
import PropTypes from 'prop-types'
/* パスアイテムリストの描画 */
const FileContent = (props) =>{
    return (
    <table>
    <tr>
      <th>FileContent</th>
    </tr>
    <tr><td>{props.fileContent}</td></tr>
    </table>
    );
};

export default FileContent