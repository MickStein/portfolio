const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

const homeRouter = require('./routes/home.js')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))

app.use('/', homeRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
