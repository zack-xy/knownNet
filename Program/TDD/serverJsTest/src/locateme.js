// var locate = function() {
//   navigator.geolocation.getCurrentPosition(
//     function(position) {
//       var latitude = position.coords.latitude
//       var longitude = position.coords.longitude

//       var url = `http://maps.goole.com/?q=${latitude,longitude}`
//       window.location = url
//     },
//     function() {
//       document.getElementById('error').innerHTML = 'unable to get your location'
//     }
//   )
// }

const createURL = function (latitude, longitude) {
  if (latitude && longitude)
    return `http://maps.goole.com/?q=${latitude},${longitude}`
  return ''
}

const setLocation = function (window, url) {
  window.location = url
}

const locate = function () {
  navigator.geolocation.getCurrentPosition(onSuccess, onError)
}
var onError = function () {}
var onSuccess = function () {}
