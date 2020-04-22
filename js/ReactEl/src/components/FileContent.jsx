import React from 'react'
import PropTypes from 'prop-types'
/* パスアイテムリストの描画 */
const FileContent = (props) =>{
    return (
    <table>
    <tr>
      <th>FileContent({props.fileContent.File})</th>
    </tr>
    <tr><td>{props.fileContent.Content}</td></tr>
    </table>
    );
};

export default FileContent