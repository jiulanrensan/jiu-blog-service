// 建表
import {traverseFile} from '../utils/general.js'
import query from '../service/db.js'
import path from 'path'
import fs from 'fs'

// 获取绝对路径
let basePath = path.resolve()
// output: D:\个人project\jiu-blog-service\src\sql

basePath = basePath.replace(/\\/g, '/') + '/'
console.log(basePath)

// sql文件列表
const fileList = traverseFile(basePath, 'sql')


// 读取sql文件内容并执行
;(async () => {
  try {
    for await(const file of fileList) {
      const sqlContent = fs.readFileSync(file, 'utf8')
      const res = await query(sqlContent)
      console.log(`${file} excuted`);
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
})()