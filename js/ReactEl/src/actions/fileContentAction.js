export const SHOW_FILECONTENT = "ファイル内容表示"

export const openFileEvent = (fullPath, fileName) => ({
    type: SHOW_FILECONTENT,
    fullPath,
    fileName,
  })