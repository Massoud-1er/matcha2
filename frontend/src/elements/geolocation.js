exports.getIpLocation = function()
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
