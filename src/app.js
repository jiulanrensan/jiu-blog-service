const koa = require('koa')
const convert = require('koa-convert')
const logger  = require('./middleware/logger')
const app = new koa()
const router = require('./routes')

app.use(convert(logger()))

// app.use(async (ctx) => {
//   ctx.body = 'hello world'
// })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')