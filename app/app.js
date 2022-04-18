const authEvents = require('./auth/events')
const tripEvents = require('./trip/events')
const Modal = require('bootstrap').Modal

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#trips').on('click', tripEvents.onIndexTrips)
  $('#find-trip').on('submit', tripEvents.onFindTrip)
  $('#add-trip').on('submit', tripEvents.onAddTrip)
  $('#create-account').on('click', authEvents.onCreateAccount)
  $('#sign-in-btn').on('click', authEvents.onSignInAccount)
  $('#trips-display').on('click', '.delete-trip', tripEvents.onDeleteTrip)
  $('#trips-display').on('submit', '.update-trip', tripEvents.onUpdateTrip)
  $('#trips-display').on('click', '.edit-trip', tripEvents.onEditTrip)

  $(() => {
    const myModal = new Modal($('#exampleModal'))

    $('#change-password-form').on('submit', event => {
      myModal.hide()
    })
  })

  $('#sign-out-button').hide()
  $('#change-pw-modal').hide()
  $('#trip-details').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
})
