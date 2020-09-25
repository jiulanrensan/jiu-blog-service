import KoaRouter from 'koa-router'
import userModel from '../models/user.js'

const user = new KoaRouter()

// 获取用户信息
/**
 * 参数
 * email: String
 * user_name: String
 */
user.get('/info', async (ctx) => {
  const [err, data] = await userModel.findExitUser(ctx.query)
  if (err) {
    ctx.body = ctx.state.uniformRes(err)
    return false
  }
  ctx.body = data
})

export default user
