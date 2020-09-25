import query from '../utils/db.js'
import { awaitTo } from '../utils/general.js'

const article = {
  selectArticle (params) {
    return awaitTo(query('select * from article_list'))
  }
}

export default article
