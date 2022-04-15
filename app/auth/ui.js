'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Signed up successfully</p>').fadeOut(3000)
  $('form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>').fadeOut(3000)
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>Successfully signed in</p>').fadeOut(3000)
  console.log(response)
  store.user = response.user

  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-account').hide()
  $('#sign-in-btn').hide()
  $('#sign-out-button').show()
  $('#change-pw-modal').show()
  $('#trip-details').show()
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error signing in. Please check your email/password</p>').fadeOut(3000)
}

const onChangePasswordSuccess = function (data) {
  $('#auth-display').html('<p>Your password has been changed</p>').fadeOut(3000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>').fadeOut(3000)
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Successfully signed out</p>').fadeOut(3000)
  $('#create-account').show()
  $('#sign-in-btn').show()
  $('#trip-details').hide()
  $('#sign-out-button').hide()
  $('#change-pw-modal').hide()
  $('#trips-display').text('')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('$auth-display').html('<p>Error while signing out</p>').fadeOut(3000)
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
