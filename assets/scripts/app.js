'use strict'

const authEvents = require('./auth/events')
const tasksEvents = require('./tasks/events.js')


$(() => {
  authEvents.addHandlers()
  tasksEvents.addHandlers()
})
