'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateTask = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexTasks = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowTask = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const task = data.task

  if (task.id.length !== 0) {
    api.show(task)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#task-show-message').html('<p>Please provide a task id!</p>')
    $('#task-show-message').css('background-color', 'red')
  }
}

const onDeleteTask = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const task = data.task

  if (task.id.length !== 0) {
    api.destroy(task.id)
      .then(ui.onDestroySuccess)
      .catch(ui.onDestroyFailure)
  } else {
    $('#task-delete-message').html('<p>Please provide a task id!</p>')
    $('#task-delete-message').css('background-color', 'red')
  }
}

const onUpdateTask = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const task = data.task

  if (task.text === '') {
    $('#task-update-message').html('<p>Text is required</p>')
    $('#task-update-message').css('background-color', 'red')
    return false
  }
  if (task.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#task-update-message').html('<p>Please provide an task id!</p>')
    $('#task-update-message').css('background-color', 'red')
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
