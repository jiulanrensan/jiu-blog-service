const koa = require('koa')
const convert = require('koa-convert')
const logger  = require('./middleware/logger')
const app = new koa()
const router = require('./routes')
const koaBody = require('koa-body')

// 用法 https://www.npmjs.com/package/koa-body
app.use(koaBody())

app.use(convert(logger()))

// app.use(async (ctx) => {
//   ctx.body = 'hello world'
// })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')