import Koa from 'koa'
import convert from 'koa-convert'
import midLog from './middleware/logger.js'
import router from './routes/index.js'
import KoaBody from 'koa-body'
import { awaitTo, uniformRes } from './utils/general.js'
const app = new Koa()

// 设置全局变量
app.use(async (ctx, next) => {
  ctx.state.awaitTo = awaitTo
  ctx.state.uniformRes = uniformRes
  await next()
})

// 用法 https://www.npmjs.com/package/koa-body
app.use(KoaBody())

app.use(convert(midLog()))

// app.use(async (ctx) => {
//   ctx.body = 'hello world'
// })

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('demo is starting at port 3000')
