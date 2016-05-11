var socket = io('http://tacotally-server.adie.io');

socket.on('taco', function (data) {
    console.log(data);
    tacoPoints.push(new google.maps.LatLng(data.lat, data.long));
});

socket.on('all', function (data) {
    console.log(data);
    for(var i = 0; i < data.length; i++) {
    	var point = data[i];
    	tacoPoints.push(new google.maps.LatLng(point.lat, point.long));
    }
});

socket.on('connect', function () {
	socket.emit('all');
});