function initializeMap() {
    const location = {lat: 51.95236783331443, lng: 5.207905274171069};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18, 
        center: location
    });
    new google.maps.Marker({ position: location, map: map});
}
