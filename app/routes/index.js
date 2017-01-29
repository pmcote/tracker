const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  req.viewData.page = {
    "title": 'Index'
  }
  res.render('index.html', req.viewData)
})

module.exports = router
