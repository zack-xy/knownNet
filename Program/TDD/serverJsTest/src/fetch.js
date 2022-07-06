const fetchLocation = function (onSuccss, onError) {
  const returnLocation = function (position) {
    const location = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    onSuccss(location)
  }
  navigator.geolocation.getCurrentPosition(returnLocation, onError)
}
