'use strict'

const store = require('../store')

// const config = require('../config.js')

const indexTrips = function () {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/trips',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const findTrip = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/trips/' + data.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const addTrip = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/trips',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const updateTrip = function (id, data) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/trips/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteTrip = function (id) {
  return $.ajax({
    url: 'http://localhost:4741/trips/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexTrips,
  findTrip,
  addTrip,
  updateTrip,
  deleteTrip
}
