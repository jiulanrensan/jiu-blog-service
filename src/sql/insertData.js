// 插入数据

import query from '../service/db.js'

// 向article_list插入数据
(async () => {
  try {
    for (const index of Array.from({length: 100}, (item,idx) => idx)) {
      await query('INSERT INTO `article_list` set '+
        `article_title='title${index}',` +
        `article_content='content${index}', `+
        `user_id=0`
      )
      console.log('insert succ');
    }
  } catch (error) {
    console.log(error);
  }
})();

// 向user插入数据
(async () => {
  try {
    for (const index of Array.from({length: 10}, (item,idx) => idx)) {
      await query('INSERT INTO `user` set '+
        `user_name='user_name${index}',`+
        `password='password${index}',`+
        `email='${index}@example.com'`
      )
      console.log('insert succ');
    }
  } catch (error) {
    console.log(error);
  }
})();