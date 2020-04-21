import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
  const PathItemList = createReactClass({
  onFileNameClick: function(fullpath, name) {
    this.props.onFileNameClick(fullpath, name);
  },
  render : function() {
    let pathItemList = this.props.pathItemList
    return <table>
    <tr>
      <th>Name</th>
      <th>Modified</th>
    </tr>
    { 
      pathItemList.map(pathItem =>
        <tr>
        {pathItem.isDirectory
          ? <td>{/* 名前 */pathItem.name}{"/"}</td>
          : <td><a onClick={
            ()=>{
              console.log("Debug 222--> " + pathItem.fullpath + "\\" + pathItem.name)
              this.onFileNameClick.bind(this, pathItem.fullpath, pathItem.name)
              this.onFileNameClick(pathItem.fullpath, pathItem.name)
            }
          }>{/* 名前 */pathItem.name}</a></td>
        }
        <td>
          {/* 更新日 */pathItem.modified}
        </td>
      </tr>
    )
    }
  </table>
  }
})

/* パスアイテムリストの型の定義*/
PathItemList.propTypes = {
  pathItemList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    isDirectory: PropTypes.bool.isRequired,
    fullpath: PropTypes.string.isRequired,
    onFileNameClick: PropTypes.func.isRequired,
  }).isRequired).isRequired,
}
export default PathItemList