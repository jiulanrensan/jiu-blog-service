// 将promise结果返回一个数组形式的值
// 代替trycatch
export function awaitTo (promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}