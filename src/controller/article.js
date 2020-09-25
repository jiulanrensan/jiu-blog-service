import koaRouter from'koa-router'
import articleModel from '../models/articleList.js'
// import query from '../utils/db.js'

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
  const [err, data] = await articleModel.selectArticle()
  if (err) {
    return ctx.body = ctx.state.uniformRes.succ(data)
  }
  ctx.body = data
})

export default article

