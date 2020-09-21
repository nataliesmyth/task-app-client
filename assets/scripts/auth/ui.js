'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('You have successfully signed up')
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function () {
  $('#message').text('You have successfully signed in')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed, please try again')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  $('#sign-in').show()
}
const onSignOutFailure = function () {
  $('#message').text('Sign out failed, please try again')
}
const onChangePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Your password has NOT been changed, please try again.')
  $('#change-password').trigger('reset')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
