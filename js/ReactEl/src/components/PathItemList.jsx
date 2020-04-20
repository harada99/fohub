import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
/* パスアイテムリストの描画 */
/*
const PathItemList = ({pathItemList = []}) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Modified</th>
    </tr>
    { 
      pathItemList.map(pathItem =>
      <PathItem
        {...pathItem} // パスアイテムの描画を呼び出す
      />
      )
    }
  </table>
)
*/
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
/* パスアイテムの描画 */
//const PathItem = ({ name, modified, isDirectory, fullpath, functor }) => (
//  <tr>
//    {isDirectory
//      ? <td>{/* 名前 */name}{"/"}</td>
//      : <td><a onClick={
//        ()=>{
//          console.log("Debug 222--> " + fullpath + "\\" + name)
//          //functor.bind(this, fullpath + "\\" + name)
//          functor(fullpath + "\\" + name)
//        }
//      }>{/* 名前 */name}</a></td>
//    }
//    <td>
//      {/* 更新日 */modified}
//    </td>
//  </tr>
//)
/* パスアイテムの型の定義 */
/*
PathItem.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired,
  fullpath: PropTypes.string.isRequired,
  onFileNameClick: PropTypes.func.isRequired,
}
*/
export default PathItemList