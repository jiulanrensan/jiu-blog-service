import dbUtil from '../utils/db.js'
import { awaitTo } from '../utils/general.js'

const userModel = {
  /**
   * @description 创建用户
   * @param {Object} model 参数
   */
  create (model) {},

  /**
   * @description 根据邮箱和用户查找已存在用户的信息
   * @param {Object} model 参数
   */
  findExitUser (model) {
    // const { email, userName } = model
    const whereSql = dbUtil.whereSqlJoin(model)
    return awaitTo(dbUtil.query(`select * from user ${whereSql}`))
  }
}

export default userModel
