const onIndexTripsSuccess = function (response) {
  let tripsHtml = ''

  response.trips.forEach((trip) => {
    tripsHtml += `
                    <div>
                    <br>
                     <p>${trip.destination}</p>
                        <p>${trip.date}</p>
                        <p>${trip.length} nights</p>
            
      <form class="update-trip" id="update-${trip._id}" data-id=${trip._id}>
          <input type="text" name="trip[destination]" placeholder="Destination">
          <input type="date" name="trip[date]" placeholder="Date of Trip">
          <input type="number" name="trip[length]" placeholder="Length of Stay">
          <button type="submit">Update Trip</button>
       </form><br>
      <button class="delete-trip" data-id=${trip._id}>Delete</button>
      <button class="edit-trip" data-id=${trip._id}>Edit</button>
  
                      </div>  

                     `
  })
  $('#trips-display').html(tripsHtml)
  $('#auth-display').text('Showing all upcoming trips')
  $('form').trigger('reset')
  $('#error-message').text('')
}
const onIndexTripsFailure = function () {
  $('#error-message').show()
  $('#error-message').text('There was an error').fadeOut(5000)
}

const onFindTripSuccess = function (response) {
  const tripHtml = `
                      <div>
                        <p>${response.trip.destination}</p>
                        <p>${response.trip.date}</p>
                        <p>${response.trip.length}</p> 
                      </div>
                    `
  $('#display').html(tripHtml)
  $('form').trigger('reset')
  $('#error-message').text('')
  console.log(response)
}

const onFindTripFailure = function () {
  $('#error-message').show()
  $('#error-message').text('Failure while trying to find trip').fadeOut(5000)
}

const onAddTripSuccess = function (response) {
  const tripHtml = `
                      <div>
                        <p>${response.trip.destination}</p>
                        <p>${response.trip.date}</p>
                        <p>${response.trip.length} nights</p> 
                        
                      </div>
                    `
  $('#trips-display').html(tripHtml)
  $('#display').show()
  $('#display').text('Success trip added').fadeOut(5000)
  $('form').trigger('reset')
  $('#error-message').text('')
  console.log(response)
}

const onAddTripFailure = function () {
  $('#error-message').show()
  $('#error-message').text('Failure while adding trip').fadeOut(5000)
}

const onUpdateTripSuccess = function (id) {
  console.log(id)
  console.log($(`#${id}`))
  $('#display').show()
  $('#display').text('Trip successfully updated').fadeOut(5000)
  $('form').trigger('reset')
}

const onUpdateTripFailure = function () {
  $('#error-message').show()
  $('#error-message').text('Failure while trying to update trip').fadeOut(5000)
}

const onDeleteTripSuccess = function () {
  $('#display').show()
  $('#display').text('Success. Trip deleted!').fadeOut(5000)
  $('form').trigger('reset')
}

const onDeleteTripFailure = function () {
  $('#error-message').show()
  $('#error-message').text('Failure while trying to delete trip').fadeOut(5000)
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
