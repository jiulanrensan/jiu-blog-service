import dbUtil from '../utils/db.js'
import { awaitTo } from '../utils/general.js'

const articleModel = {
  selectArticle (model) {
    return awaitTo(dbUtil.query('select * from article_list'))
  }
}

export default articleModel
