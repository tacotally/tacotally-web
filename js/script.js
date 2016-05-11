var socket = io('http://tacotally-server.adie.io');

socket.on('taco', function (data) {
    console.log(data);
    tacoPoints.push(new google.maps.LatLng(data.lat, data.long));
});