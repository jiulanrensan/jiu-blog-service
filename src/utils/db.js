import CONFIG from '../config/index.js'
import mysql from 'mysql'
// 用连接池管理
const pool = mysql.createPool(CONFIG.dbConfig)

// 从连接池获得连接时触发
pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
})

// 当连接池建立新的连接时触发
pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
})

// 执行sql脚本对数据库进行读写 
// connection.query('SELECT * FROM my_table',  (error, results, fields) => {
//   if (error) throw error
//   // connected! 
  
//   // 结束会话
//   connection.release() 
// });


const query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, (err, rows) => {
          if (err) reject(err)
          else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

export default query