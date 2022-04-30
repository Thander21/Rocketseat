const express = require('express')
const QuestionController = require('./Controllers/QuestionController')
const RoomController = require('./Controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/room/:room', RoomController.open)

route.post('/create-room', RoomController.create)
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/enterroom', RoomController.enter)



module.exports = route