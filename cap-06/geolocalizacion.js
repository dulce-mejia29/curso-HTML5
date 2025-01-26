function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert("La geolocalización no es compatible con este navegador.");
    }
}


function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    
    var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Estás aquí"
    });
}


function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario denegó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de ubicación no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud para obtener la ubicación ha expirado.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Se ha producido un error desconocido.");
            break;
    }
}
