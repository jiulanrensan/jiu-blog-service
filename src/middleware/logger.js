// generator中间件
// function logger (ctx) {
//   console.log( ctx.method, ctx.header.host + ctx.url )
// }

// module.exports = function () {
//   return function * ( next ) {
//     // 执行中间件的操作
//     logger( this )
//     if ( next ) {
//       yield next
//     }
//   }
// }

// async中间件
// 只能在koa2中使用
function logger (ctx) {
  console.log( ctx.method, ctx.header.host + ctx.url )
}
module.exports = function () {
  return async function (ctx, next) {
    logger(ctx)
    await next()
  }
}
