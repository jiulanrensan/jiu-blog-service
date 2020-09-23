import koa from 'koa'
import convert from 'koa-convert'
import midLog from './middleware/logger.js'
import router from './routes/index.js'
import koaBody from 'koa-body'
const app = new koa()

// 用法 https://www.npmjs.com/package/koa-body
app.use(koaBody())

app.use(convert(midLog()))

// app.use(async (ctx) => {
//   ctx.body = 'hello world'
// })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('demo is starting at port 3000')