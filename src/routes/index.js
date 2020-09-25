// 在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法
// query返回是格式化好的参数对象，querystring返回的是请求字符串，
// 由于ctx对request的API有直接引用的方式，所以获取GET请求数据有两个途径
// 1. 从上下文直接获取
// 请求对象ctx.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.querystring，返回如 a=1&b=2
// 2. 从上下文的request对象获取
// 请求对象ctx.request.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.request.querystring，返回如 a=1&b=2

// 对于POST请求的处理，koa2没有封装获取参数的方法，
// 需要通过解析上下文context中的原生node.js请求对象req，
// 将POST表单数据解析成query string（例如：a=1&b=2&c=3），
// 再将query string 解析成JSON格式（例如：{"a":"1", "b":"2", "c":"3"}）
// 注意：ctx.request是context经过封装的请求对象，ctx.req是context提供的node.js原生HTTP请求对象，
// 同理ctx.response是context经过封装的响应对象，ctx.res是context提供的node.js原生HTTP响应对象

// const koaRouter = require('koa-router')

// const home = new koaRouter()

// home
// .get('/', async (ctx) => {
//   const url = ctx.url
//   // request对象
//   const {request} = ctx
//   const {query: req_query, querystring: req_querystring} = request
//   // 上下文直接获取
//   const {query: ctx_query, querystring: ctx_querystring} = ctx
//   ctx.body = {
//     url,
//     req_query,
//     req_querystring,
//     ctx_query,
//     ctx_querystring
//   }
// })

// const page = new koaRouter()
// page
// .post('/', async (ctx) => {
//   let body = ''
//   ctx.req.addListener('data', (postDataChunk) => {
//     // postDataChunk拿到的是二进制数据
//     body += postDataChunk
//     console.log('post数据',postDataChunk);
//   })
//   ctx.req.addListener('end', () => {
//     console.log('接收post数据完毕', typeof body)
//   })
//   // 使用中间件
//   body = ctx.request.body
//   ctx.body = body
// })

import KoaRouter from 'koa-router'
import article from '../controller/article.js'

// 装载所有子路由
const router = new KoaRouter()
router.use('/article', article.routes(), article.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

export default router
