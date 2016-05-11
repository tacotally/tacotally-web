var mapElement = document.getElementById("map");            
var heatmap;
var map;    
var tacoPoints;

function initMap() {

    var styledMap = new google.maps.StyledMapType(getStyled(),
        {name: "Styled Map"});

    map = new google.maps.Map(mapElement,
        {
            center: {lat: 38.540, lng:-95.546},
            zoom: 5
        });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    tacoPoints = new google.maps.MVCArray([]);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: tacoPoints,
        map: map
    });
    var gradient = [
              'rgba(0, 255, 255, 0)',
              'rgba(0, 255, 255, 1)',
              'rgba(0, 191, 255, 1)',
              'rgba(0, 127, 255, 1)',
              'rgba(0, 63, 255, 1)',
              'rgba(0, 0, 255, 1)',
              'rgba(0, 0, 223, 1)',
              'rgba(0, 0, 191, 1)',
              'rgba(0, 0, 159, 1)',
              'rgba(0, 0, 127, 1)',
              'rgba(63, 0, 91, 1)',
              'rgba(127, 0, 63, 1)',
              'rgba(191, 0, 31, 1)',
              'rgba(255, 0, 0, 1)'
            ]
    heatmap.set('gradient', gradient);
    
    //getPoints();

    setTimeout(function(){
        mapElement.style.position = "fixed";
    }, 1000);
}

function getPoints() {
    var arr = [];
    for (var i = 0; i < 100; i++) {
        var lat = (Math.random() * 4) + 40.540;
        var lng = (Math.random() * 4) + -78.546;
        tacoPoints.push(new google.maps.LatLng(lat, lng));
    }
    return arr;
}

function getStyled() {
    return [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]           
}