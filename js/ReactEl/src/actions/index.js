export const EXPAND_ROOT   = 'ルートフォルダの展開イベント'
export const TOGGLE_EXPAND = 'フォルダの展開/折畳イベント'
export const SHOW_PATHLIST = 'フォルダの一覧表示イベント'
export const SHOW_TABLEITEMLIST = 'テーブル表示'
export const SHOW_FILECONTENT = "ファイル内容表示"
/* ルートフォルダの展開イベント(action) */
export const openButtonClickEvent = (rootpath) => ({
  type: EXPAND_ROOT,
  rootpath,
})
/* フォルダの展開/折畳イベント(action) */
export const toggleExpandClickEvent = (fullpath, isExpanded) => ({
  type: TOGGLE_EXPAND,
  fullpath,
  isExpanded,
})
/* フォルダの一覧表示イベント(action) */
export const folderTreeItemClickEvent = (fullpath) => ({
  type: SHOW_PATHLIST,
  fullpath,
})
export const tableItemListEvent = () => ({
  type: SHOW_TABLEITEMLIST
})

export const openFileEvent = (fullPath, fileName) => ({
  type: SHOW_FILECONTENT,
  fullPath,
  fileName,
  //fileContent
})