if (typeof window === 'undefined') {
  global.window = {}
}

const fs = require('fs')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const searchSSR = require('../dist/search-server.js')

// 读取html文件
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')

// 读取数据
const sourceData = require('./data.json')

// 创建一个server  
const server = (port) => {
  const app = express()

  // 设置静态目录
  app.use(express.static('dist'))

  // 路由
  app.get('/search', (req, res) => {
    const html = renderHtml(renderToString(searchSSR))
    res.status(200).send(html)
  })

  // 监听端口
  app.listen(port, () => {
    console.log('server start at ' + port)
  })
}

server(process.env.PORT || 3000)

function renderHtml(str) {
  const data = JSON.stringify(sourceData)
  return template.replace('<!--HTML_PLACEHOLDER-->', str).
  replace('<!--INITIAL_DATA_PLACEHOLDER-->',`<script>window.__initial_data__=${data}</script>`)
}