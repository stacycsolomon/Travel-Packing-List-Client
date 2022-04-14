const store = require('../store')

const onIndexTripsSuccess = function (response) {
  let tripsHtml = ''

  response.trips.forEach((trip) => {
    tripsHtml += `
                    <div>
                     <p>${trip.destination}</p>
                        <p>${trip.date}</p>
                        <p>${trip.length}</p>
      <form class="update-trip" data-id=${trip._id}>
      <input type="text" name="trip[destination]" placeholder="Destination" required>
      <input type="date" name="trip[date]" placeholder="Date of Trip" required>
      <input type="text" name="trip[length]" placeholder="Length of Stay" required>
      <button type="submit">Update Trip</button>
       </form>
      <button class="delete-trip" data-id=${trip._id}>Delete trip</button>
                      </div>
                     `
  })

  $('#trips-display').html(tripsHtml)
  $('form').trigger('reset')
  $('#error-message').text('')
}
const onIndexTripsFailure = function () {
  $('#error-message').text('There was an error')
}

const onFindTripSuccess = function (response) {
  const tripHtml = `
                      <div>
                        <p>${response.trip.destination}</p>
                        <p>${response.trip.date}</p>
                        <p>${response.trip.length}</p> 
                      </div>
                    `
  $('#trips-display').html(tripHtml)
  $('form').trigger('reset')
  $('#error-message').text('')
  console.log(response)
}

const onFindTripFailure = function () {
  $('#error-message').text('Failure while trying to find trip')
}

const onAddTripSuccess = function (response) {
  const tripHtml = `
                      <div>
                        <p>${response.trip.destination}</p>
                        <p>${response.trip.date}</p>
                        <p>${response.trip.length}</p> 
                      </div>
                    `
  $('#trips-display').html(tripHtml)
  $('form').trigger('reset')
  $('#error-message').text('')
  console.log(response)
  store.trip = response.trip
}

const onAddTripFailure = function () {
  $('#error-message').text('Failure while adding trip')
}

const onUpdateTripSuccess = function (response) {
  $('#trips-display').html('Trip successfully updated')

  $('form').trigger('reset')
  console.log(response)
  store.trip = response.trip
}

const onUpdateTripFailure = function () {
  $('#error-message').text('Failure while trying to update trip')
}

const onDeleteTripSuccess = function () {
  $('#trips-display').html('Success. Trip deleted!')
  $('form').trigger('reset')
}

const onDeleteTripFailure = function () {
  $('#error-message').text('Failure while trying to delete trip')
}

module.exports = {
  onIndexTripsSuccess,
  onIndexTripsFailure,
  onFindTripSuccess,
  onFindTripFailure,
  onAddTripSuccess,
  onAddTripFailure,
  onUpdateTripSuccess,
  onUpdateTripFailure,
  onDeleteTripSuccess,
  onDeleteTripFailure
}
