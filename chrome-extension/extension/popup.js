window.addEventListener('load', () => {
    let long;   //defining the Latitude and longitude
    let lat;

    ///accessing elements from the popup.html with use of DOM 
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icon = document.getElementById('icon');

    //using in-built method of accessing the geo location of the user
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;    // latitude and longitude accessing current location
            lat = position.coords.latitude;

            const api = `http://api.weatherstack.com/current?access_key=a236a39c8d90042cbd950759a75d0574&query=${lat},${long}`;
            fetch(api)   // Fetching api
            .then(response => {                  // since, promise is returned from fetch
                return response.json();
            })
            .then(data => {
                console.log(data); // testing

                // replacing the value of the accessed elements with the response data
                const {temperature, weather_descriptions} = data.current;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = weather_descriptions;
                locationTimezone.textContent = data.location.region + " " + data.location.name + " " + data.location.country;
                icon.src = data.current.weather_icons[0];
                console.log(data.current.weather_icons[0])
            });
    });
}

});