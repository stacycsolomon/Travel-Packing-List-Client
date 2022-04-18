'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').show()
  $('#auth-display').text('Account created! Sign in to start planning your trip')
  $('form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#auth-display').show()
  $('#auth-display').text('Error while signing up')
}

const onSignInSuccess = function (response) {
  $('#auth-display').show()
  $('#auth-display').html('<p>Start planning your trip &#128515</p>')
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
  $('#auth-display').show()
  $('#auth-display').text('Error signing in. Please check your email/password')
}

const onChangePasswordSuccess = function (data) {
  $('#auth-display').show()
  $('#auth-display').text('Your password has been changed').fadeOut(3000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').show()
  $('#auth-display').text('Error while changing password').fadeOut(3000)
}

const onSignOutSuccess = function () {
  $('#auth-display').show()
  $('#auth-display').text('Bon Voyage!')
  $('#create-account').show()
  $('#sign-in-btn').show()
  $('#trip-details').hide()
  $('#sign-out-button').hide()
  $('#change-pw-modal').hide()
  $('#trips-display').text('')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').show()
  $('$auth-display').text('Error while signing out')
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
