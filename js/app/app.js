//document.addEventListener("deviceready", onDeviceReady, false);

var map;
var showInfo;

function initMap() {
    var uluru = {lat: 7.9465, lng: 1.0232};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: uluru
    });
}

function locateButton() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


function errorlocation(browserHasGeolocation, showInfo, pos) {
    showInfo.setPosition(pos);
    showInfo.open(map);
}

// onSuccess Geolocation
//
function onSuccess(position) {

    var element = document.getElementById('geolocation');
    
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var geolocation = {lat: latitude, lng: longitude};
    
    var marker = new google.maps.Marker({
        position: geolocation,
        map: map
    });
    map.setCenter(geolocation);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}