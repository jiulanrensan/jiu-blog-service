import KoaRouter from 'koa-router'
import articleModel from '../models/articleList.js'

const article = new KoaRouter()

// 获取文章列表
/**
 * {
 *    page_size: 10
 *    page_num: 1
 * }
 */
article.get('/all', async (ctx) => {
  // const { request } = ctx
  const [err, data] = await articleModel.selectArticle()
  if (err) {
    ctx.body = ctx.state.uniformRes.err(err)
    return false
  }
  ctx.body = data
})

export default article
