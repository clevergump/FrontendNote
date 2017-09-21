function geolocationDemo() {
    function geoSuccess(position) {
        var coords = position.coords;
        var latitude = coords.latitude;
        var longitude = coords.longitude;
        var msg = "You are at " + latitude + ", " + longitude;
        alert(msg);
    }

    function geoError(errorObj) {
        var code = errorObj.code;
        var msg = errorObj.message;
        alert("error code " + code + ", error msg: " + msg);
    }

    if (typeof navigator.geolocation != "undefined") {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("This browser does not support navigator.geolocation");
    }
}

function colorDemo() {
    var colorDepth = window.screen.colorDepth;
    document.bgColor = "red";
    alert("colorDepth = " + colorDepth);
}