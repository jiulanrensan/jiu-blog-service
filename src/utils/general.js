import fs from 'fs'
/**
 * @description 将promise结果返回一个数组形式的值,代替trycatch
 * @param {Promise} promise 
 * @return {Array} array
 */
export function awaitTo (promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}

/**
 * @description 遍历目录文件
 * @param {String} path 文件路径
 * @param {String} suffix 文件后缀
 * @return {Array}
 */
export function traverseFile (path, suffix) {
  const files = fs.readdirSync(path)
  const fileList = files.filter(el => {
    const fileName = el.split('.')
    if (fileName.length > 1) return fileName[1] === suffix
    return false
  })
  return fileList
}
