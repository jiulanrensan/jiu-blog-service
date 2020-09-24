import koaRouter from'koa-router'
import query from '../service/db.js'

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
  const [err, data] = await ctx.state.awaitTo(query(`select * from article_list`))
  if (err) {
    return ctx.body = {
      code: '-1',
      msg: 'error'
    }
  }
  ctx.body = data
})

export default article

