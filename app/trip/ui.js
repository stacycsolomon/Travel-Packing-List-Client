const onIndexTripsSuccess = function (response) {
  let tripsHtml = ''

  response.trips.forEach((trip) => {
    tripsHtml += `
                    <div>
                    <br>
                     <p>${trip.destination}</p>
                        <p>${trip.date}</p>
                        <p>${trip.length}</p>
            
      <form class="update-trip" id="update-${trip._id}" data-id=${trip._id}>
          <input type="text" name="trip[destination]" placeholder="Destination" required>
          <input type="date" name="trip[date]" placeholder="Date of Trip" required>
          <input type="text" name="trip[length]" placeholder="Length of Stay" required>
          <button type="submit">Update Trip</button>
       </form><br>
      <button class="delete-trip" data-id=${trip._id}>Delete trip</button>
      <button class="edit-trip" data-id=${trip._id}>Edit</button>
  
                      </div>  

                     `
  })
  $('#trips-display').html(tripsHtml)
  $('form').trigger('reset')
  $('#error-message').text('')
}
const onIndexTripsFailure = function () {
  $('#error-message').text('There was an error').fadeOut(3000)
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
  $('#error-message').text('Failure while trying to find trip').fadeOut(3000)
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
  $('#display').text('Success trip added').fadeOut(3000)
  $('form').trigger('reset')
  $('#error-message').text('')
  console.log(response)
}

const onAddTripFailure = function () {
  $('#error-message').text('Failure while adding trip').fadeOut(3000)
}

const onUpdateTripSuccess = function (id) {
  console.log(id)
  console.log($(`#${id}`))
  $('#display').text('Trip successfully updated').fadeOut(3000)
  $('form').trigger('reset')
}

const onUpdateTripFailure = function () {
  $('#error-message').text('Failure while trying to update trip').fadeOut(3000)
}

const onDeleteTripSuccess = function () {
  $('#display').text('Success. Trip deleted!').fadeOut(3000)
  $('form').trigger('reset')
}

const onDeleteTripFailure = function () {
  $('#error-message').text('Failure while trying to delete trip').fadeOut(3000)
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

//  <div id=${trip._id}></div>
