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
  const result = await query(`select * from article_list`)
  ctx.body = result
})

export default article

