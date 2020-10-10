'use strict'


const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-create').trigger('reset')
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating task')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onIndexSuccess = function (data) {
  $('#message').text('All tasks successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-list').trigger('reset')
  $('#task-list').empty()
  data.tasks.forEach((task) => {
  
  $('#task-list').append(`
    <p>task: ${task.text}</p>
    <p class="task-id">ID: ${task._id}</p>
    </div>
  `)
})
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting tasks')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#task-index').trigger('reset')
}

const onShowSuccess = function (data) {
  $('#message').text('One Task successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-show').trigger('reset')
  // data.tasks.for((task) => {
  
  //   $('#one-task').append(`
  //     <p>task: ${task.text}</p>
  //     <p class="task-id">ID: ${task._id}</p>
  //     </div>
  //   `)
  // })
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#task-show').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('Task successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-delete').trigger('reset')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#task-delete').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('Task successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#task-update').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#task-update').trigger('reset')
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
