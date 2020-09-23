import koaRouter from'koa-router'
const article = new koaRouter()

// 获取文章列表
/**
 * {
 *    page_size: 10
 *    page_num: 1
 * }
 */
article.get('/all', async (ctx) => {
  const {request} = ctx
  ctx.body = request
})

export default article

