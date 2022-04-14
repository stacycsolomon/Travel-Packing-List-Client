const getFormFields = require('../../lib/get-form-fields.js')

const tripsApi = require('./api.js')
const tripsUi = require('./ui.js')

const onIndexTrips = () => {
  console.log('Index trips working!')

  tripsApi
    .indexTrips()
    .then((response) => tripsUi.onIndexTripsSuccess(response))
    .catch(() => tripsUi.onIndexTripsFailure())
}

const onFindTrip = (event) => {
  event.preventDefault()
  console.log('Found trip!')

  const data = getFormFields(event.target)
  console.log(data)

  tripsApi
    .findTrip(data)
    .then((response) => tripsUi.onFindTripSuccess(response))
    .catch(() => tripsUi.onFindTripFailure())
}

const onAddTrip = (event) => {
  event.preventDefault()
  console.log('Trip added!')

  const data = getFormFields(event.target)

  tripsApi
    .addTrip(data)
    .then((response) => tripsUi.onAddTripSuccess(response))
    .catch(() => tripsUi.onAddTripFailure())
}

const onDeleteTrip = function (event) {
  event.preventDefault()
  // event.target will tell us more information about the thing that was clicked
  const deleteButton = event.target
  // we need to find the id of the trip
  const id = $(deleteButton).data('id')

  tripsApi
    .deleteTrip(id)
    .then(() => tripsUi.onDeleteTripSuccess())
    .catch(() => tripsUi.onDeleteTripFailure())
}

// Handle submitting the dynamic update forms
const onUpdateTrip = function (event) {
  event.preventDefault()
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const id = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the book
  // information
  const data = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  tripsApi
    .updateTrip(id, data)
    .then(() => tripsUi.onUpdateTripSuccess())
    .catch(() => tripsUi.onUpdateTripFailure())
}

module.exports = {
  onIndexTrips,
  onFindTrip,
  onAddTrip,
  onUpdateTrip,
  onDeleteTrip
}
