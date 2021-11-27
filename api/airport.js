var request = require('request');

var url = 'http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerArrivals';
var queryParams = '?' + encodeURIComponent('serviceKey') + '0HUlOoacEL2nXPo2eFcKC8qHfvHxgvFHGMn5cATNvP4fSdzPnEy5GVhFT34EtAVP8aBGIJGT%2B7ul28On6M8mtQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('from_time') + '=' + encodeURIComponent('0000'); /* */
queryParams += '&' + encodeURIComponent('to_time') + '=' + encodeURIComponent('2400'); /* */
queryParams += '&' + encodeURIComponent('airport') + '=' + encodeURIComponent('　 HKG'); /* */
queryParams += '&' + encodeURIComponent('flight_id') + '=' + encodeURIComponent('　 KE846'); /* */
queryParams += '&' + encodeURIComponent('airline') + '=' + encodeURIComponent('　 KE'); /* */
queryParams += '&' + encodeURIComponent('lang') + '=' + encodeURIComponent('　K'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
});