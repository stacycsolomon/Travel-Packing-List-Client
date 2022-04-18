const getFormFields = require('../../lib/get-form-fields.js')

const tripsApi = require('./api.js')
const tripsUi = require('./ui.js')

const onIndexTrips = () => {
  tripsApi
    .indexTrips()
    .then((response) => tripsUi.onIndexTripsSuccess(response))
    .catch(() => tripsUi.onIndexTripsFailure())
}

const onFindTrip = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)

  tripsApi
    .findTrip(data)
    .then((response) => tripsUi.onFindTripSuccess(response))
    .catch(() => tripsUi.onFindTripFailure())
}

const onAddTrip = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)

  tripsApi
    .addTrip(data)
    .then((response) => tripsUi.onAddTripSuccess(response))
    .then(onIndexTrips)
    .catch(() => tripsUi.onAddTripFailure())
}

const onDeleteTrip = function (event) {
  event.preventDefault()

  const deleteButton = event.target
  const id = $(deleteButton).data('id')

  tripsApi
    .deleteTrip(id)
    .then(() => tripsUi.onDeleteTripSuccess())
    .then(onIndexTrips)
    .catch(() => tripsUi.onDeleteTripFailure())
}

const onUpdateTrip = function (event) {
  event.preventDefault()

  const updateForm = event.target
  const id = $(updateForm).data('id')
  const data = getFormFields(event.target)

  tripsApi
    .updateTrip(id, data)
    .then(onIndexTrips)
    .then(() => tripsUi.onUpdateTripSuccess(id))
    .catch(() => tripsUi.onUpdateTripFailure())
}

const onEditTrip = function (event) {
  const id = $(event.target).data('id')
  $(`#update-${id}`).show()
}

module.exports = {
  onIndexTrips,
  onFindTrip,
  onAddTrip,
  onUpdateTrip,
  onDeleteTrip,
  onEditTrip
}
