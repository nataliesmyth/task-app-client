'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up-message').text('Signed up successfully')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('success')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#sign-up-message').text('Error on sign up')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('failure')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('#sign-out-message').empty()
  $('#sign-up-message').empty()
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#task-create').show()
  $('#task-index').show()
  $('#task-delete').show()
  $('#task-update').show()
  $('#task-show').show()
  store.user = data.user
}

const signInFailure = function (error) {
  $('#sign-in-message').text('Error on sign in')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  $('#sign-in').trigger('reset')
  $('#sign-up-message').empty()
  $('#sign-in-message').empty()
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('success')
  $('#sign-in-message').empty()
  $('#change-password-message').empty()
  $('#text-index-message').empty()
  $('#text-create-message').empty()
  $('#text-show-message').empty()
  $('#text-update-message').empty()
  $('#text-delete-message').empty()
  $('#sign-in').trigger('reset')
  $('#task-show').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#task-create').hide()
  $('#task-index').trigger('reset')
  $('#task-index').hide()
  $('#task-delete').hide()
  $('#task-update').hide()
  $('#task-show').hide()
  store.user = null
}

const signOutFailure = function (error) {
  $('#sign-out-message').text('Error on sign out')
  $('#sign-out-message').removeClass()
  $('#sign-out-message').addClass('failure')
  $('#sign-in-message').empty()
  $('#change-password-message').empty()
  // $('#sign-up-message').empty()
  $('#text-index-message').empty()
  $('#text-create-message').empty()
  $('#text-show-message').empty()
  $('#text-update-message').empty()
  $('#text-delete-message').empty()
}

const changePasswordSuccess = function () {
  $('#change-password-message').text('Changed password successfully')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('success')
  $('#change-password').trigger('reset')
  $('#sign-in-message').empty()
  $('#text-index-message').empty()
  $('#text-create-message').empty()
  $('#text-show-message').empty()
  $('#text-update-message').empty()
  $('#text-delete-message').empty()
}

const changePasswordFailure = function (error) {
  $('#change-password-message').text('Error on change password')
  $('#change-password-message').removeClass()
  $('#change-password-message').addClass('failure')
  $('#change-password').trigger('reset')
  $('#sign-in-message').empty()
  $('#text-index-message').empty()
  $('#text-create-message').empty()
  $('#text-show-message').empty()
  $('#text-update-message').empty()
  $('#text-delete-message').empty()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
