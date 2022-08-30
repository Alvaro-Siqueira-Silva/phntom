const express = require('express')

const app = express()

const porta = process.env.PORT || 3000

const consign = require('consign')

consign().include('./routes').into(app)

app.use(express.static('./src/'))

module.exports = {app, porta}