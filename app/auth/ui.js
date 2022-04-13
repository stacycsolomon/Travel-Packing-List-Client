'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Signed up successfully</p>')
  $('form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>Successfully signed in</p>')
  console.log(response)
  store.user = response.user

  $('form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-button').show()
  $('#change-password-form').show()
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error signing in. Please check your email/password</p>')
}

const onChangePasswordSuccess = function (data) {
  $('#auth-display').html('<p>Your password has been changed</p>')
  $('form').trigger('reset')
  $('#change-password-form').hide()
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Successfully signed out</p>')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-out-button').hide()
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('$auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
