'use strict'


const onCreateSuccess = function (data) {
  $('#message').text('Task successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating task')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Tasks successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#index-tasks')
  console.log('onIndexSuccess ran. Data is :', data.tasks)
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

// const taskArray = function ()

// const taskList = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const taskArray = array[i].tasks
//     $('#show-collections').append(`<div id="${array[i]._id}">${array[i].title}</div>`)
//     $('div').append(`<h6>${array[i].description}</h5>`)
//     addTask(taslArray)
//   }
// }

// // taskList
// const taskList = function (collections) {
//   // loop through tasks w/ forEach loop
//   tasks.forEach((tasks) => {
//       console.log('To Do: ', collection)
//       // append elements to show collection item
//       $('#show-collections').append(`
//     <div id="${collection._id}">
//     <p>${collection.text}</p>
//     </div>
//     `)
//       // loop through each task
//       collection.tasks.forEach(function (task) {
//         console.log('task is ', task)
//       })
//     })
// }
 
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
