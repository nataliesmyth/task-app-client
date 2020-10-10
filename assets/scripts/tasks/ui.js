'use strict'


const onCreateSuccess = function (data) {
  $('#task-create-message').text('Task successfully created')
  $('#task-create-message').removeClass()
  $('#task-create-message').addClass('success')
  $('#task-create').trigger('reset')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  $('#sign-out-message').empty()
  $('#change-password-message').empty()
}

const onCreateFailure = function (error) {
  $('#task-create-message').text('Error on creating task')
  $('#task-create-message').removeClass()
  $('#task-create-message').addClass('failure')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  $('#sign-out-message').empty()
}

const onIndexSuccess = function (data) {
  $('#task-index-message').text('All tasks successfully received')
  $('#task-index-message').removeClass()
  $('#task-index-message').addClass('success')
  $('#task-list').trigger('reset')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  // $('#sign-out-message').empty()
  $('#change-password-message').empty()
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
  $('#task-index-message').text('Error on getting tasks')
  $('#task-index-message').removeClass()
  $('#task-index-message').addClass('failure')
  $('#task-index').trigger('reset')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  $('#sign-out-message').empty()
  $('#change-password-message').empty()
}

const onShowSuccess = function (data) {
  $('#task-show-message').text('One Task successfully received')
  $('#task-show-message').removeClass()
  $('#task-show-message').addClass('success')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  $('#sign-out-message').empty()
  $('#change-password-message').empty()
  $('#task-create-message').empty()
  $('#task-update-message').empty()
  $('#task-delete-message').empty()
  $('#task-index-message').empty()
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
  $('#task-show-message').text('Error on getting task')
  $('#task-show-message').removeClass()
  $('#task-show-message').addClass('failure')
  $('#task-show').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#task-update-message').text('Task successfully updated')
  $('#task-update-message').removeClass()
  $('#task-update-message').addClass('success')
  $('#task-update').trigger('reset')
  $('#sign-in-message').empty()
  // $('#sign-up-message').empty()
  $('#sign-out-message').empty()
  $('#task-index-message').empty()
  $('#change-password-message').empty()
}

const onUpdateFailure = function (error) {
  $('#task-update-message').text('Error on updating task')
  $('#task-update-message').removeClass()
  $('#task-update-message').addClass('failure')
  $('#task-update').trigger('reset')
  $('#sign-in-message').empty()
  // $('#sign-up-m essage').empty()
  $('#sign-out-message').empty()
  $('#change-password-message').empty()
}

const onDestroySuccess = function () {
  $('#task-delete-message').text('Task successfully deleted')
  $('#task-delete-message').removeClass()
  $('#task-delete-message').addClass('success')
  $('#task-delete').trigger('reset')
  $('#sign-in-message').empty()
  $('#sign-out-message').empty()
  $('#task-update-message').empty()
  $('#task-index-message').empty()
  $('#task-create-message').empty()
  $('#task-show-message').empty()
  $('#change-password-message').empty()
}

const onDestroyFailure = function (error) {
  $('#task-delete-message').text('Error on deleting task')
  $('#task-delete-message').removeClass()
  $('#task-delete-message').addClass('failure')
  $('#task-delete').trigger('reset')
  $('#sign-in-message').empty()
  $('#sign-out-message').empty()
  $('#task-index-message').empty()
  $('#task-create-message').empty()
  $('#task-show-message').empty()
  $('#change-password-message').empty()
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
