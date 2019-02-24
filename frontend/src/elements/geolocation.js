function getIpLocation()
{
    var http = require('http');
    var geoip = require('geoip-lite');
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
        resp.on('data', function(ip) {
            var geo = geoip.lookup(""+ip);
            console.log(geo);
            return geo;
        });
      });
}

//maximumAge => Number of milliseconds to keep position data cached for
function getGeolocation(){
navigator.geolocation.getCurrentPosition(
    displayLocationInfo,
    handleLocationError,
    { maximumAge: 1500000, timeout: 0 }
  );
  
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
  
    console.log(`longitude: ${lng} | latitude: ${lat}`);
  }
  
  function handleLocationError(error) {
    switch (error.code) {
      case 3:
        // timeout was hit, meaning nothing's in the cache
        // let's provide a default location:
        var geoIp = getIpLocation();
        var long = geoIp.ll[0];
        var lati = geoIp.ll[1];
        displayLocationInfo({ coords: { longitude: long, latitude: lati }});
  
        // now let's make a non-cached request to get the actual position
        navigator.geolocation.getCurrentPosition(displayLocationInfo, handleLocationError);
        break;
      case 2:
        // ...
        break;
      case 1:
      // ...
    }
  }
}
getIpLocation();