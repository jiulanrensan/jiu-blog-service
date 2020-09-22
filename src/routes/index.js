const Router = require('koa-router')
const koaRouter = require('koa-router')

const home = new koaRouter()

home
.get('/', async (ctx) => {
  ctx.body = 'koa-router get /'
})

const page = new koaRouter()
page
.get('/404', async (ctx) => {
  ctx.body = '404 page'
})
.get('/helloworld', async (ctx) => {
  ctx.body = 'hello world page'
})

// 装载所有子路由
const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

module.exports = router
