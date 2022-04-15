'use strict'

const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const authApi = require('./api.js')

const onCreateAccount = function () {
  $('#auth-display').text('')
  $('#sign-up').show()
  $('#sign-in-btn').show()
  $('#create-account').hide()
}

const onSignInAccount = function () {
  $('#sign-in').show()
  $('#sign-in-btn').hide()
  $('#create-account').hide()
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('signed up')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signed in')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('password changed')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateAccount,
  onSignInAccount
}
