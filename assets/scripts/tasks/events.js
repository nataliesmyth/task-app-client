'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateTask = function (event) {
  event.preventDefault()
  // console.log('onCreateTask ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexTasks = function (event) {
  event.preventDefault()
  // console.log('onIndexTasks ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowTask = function (event) {
  event.preventDefault()
  // console.log('onShowTask ran!')

  const data = getFormFields(event.target)
  const task = data.task

  if (task.id.length !== 0) {
    api.show(task)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide a task id!</p>')
    $('#message').css('background-color', 'red')
    // console.log('Please enter a task id!')
  }
}

const onDeleteTask = function (event) {
  event.preventDefault()
  // console.log('onDeleteTask ran!')

  const data = getFormFields(event.target)
  const task = data.task

  if (task.id.length !== 0) {
    api.destroy(task.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide a task id!</p>')
    // $('#message').css('background-color', 'red')
    // console.log('Please provide a task id!')
  }
}

const onUpdateTask = function (event) {
  event.preventDefault()
  // console.log('onUpdateTask ran!')

  const data = getFormFields(event.target)
  const task = data.task

  if (task.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    // console.log('Text is required!')
    return false
  }
  if (task.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an task id!</p>')
    $('#message').css('background-color', 'red')
    // console.log('Please provide a task id!')
  }
}

const addHandlers = () => {
  $('#task-create').on('submit', onCreateTask)
  $('#task-index').on('submit', onIndexTasks)
  $('#task-show').on('submit', onShowTask)
  $('#task-delete').on('submit', onDeleteTask)
  $('#task-update').on('submit', onUpdateTask)
}

module.exports = {
  addHandlers
}
