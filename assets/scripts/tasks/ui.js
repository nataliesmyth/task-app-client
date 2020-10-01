'use strict'


const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-create').trigger('reset')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  console.log('onIndexSuccess ran. Data is :', data.tasks)
// loop through tasks w/ forEach loop
data.tasks.forEach((task) => {
  $('#task-list').empty()
  console.log('To Do: ', task)
  // append elements to show task item
  $('#task-list').append(`
<div id="${task._id}">
<p>${task.text}</p>
</div>
`)
})
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting tasks')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Task successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Task successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Task successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Task successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Task successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
