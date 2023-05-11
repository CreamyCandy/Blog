const express = require('express')
const api = express()
// const user = express.Router()
// const goods = express.Router()

function globalMiddleware(req, res, next) {
  console.warn('这是一个中间件')
  next()
}

api.use(globalMiddleware)

api.get('/', function(req, res, next) {
  console.log('这是一个局部路由中间件')
  next()
}, function(req, res) {
  console.log(req.query)
  res.send('Hello Express')
})

// user.get('/detail', function(req, res) {
//   res.send({
//     id: 1,
//     name: '李丹丹'
//   })
// })
// goods.get('/detail', function(req, res) {
//   res.send({
//     name: '薯片',
//     price: 3
//   })
// })

// api.use('/user', user)
// api.use('/goods', goods)

api.listen('3000', function() {
  console.log('服务已启动')
})