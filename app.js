const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.use(express.static('./public'))

nunjucks.configure('./app/views', {
  autoescape: true,
  watch: true,
  express: app
});

app.use('/*', function(req, res, next){
  req.viewData = {}
  req.viewData.global = {
    "title": "Starter Kit"
  }
  next()
})

app.use('/', require('./app/routes/index'))

app.listen(process.env.PORT || 3000, function () {
  console.log(`Node server listening on port ${process.env.PORT || 3000}`)
})
