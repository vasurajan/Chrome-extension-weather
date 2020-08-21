// var name = prompt("What is your name?");
// alert("Hello " + name);

//Adding event listener('click') on the button 
let button = document.getElementById('btn').addEventListener('click', getweather);

function getweather() {                     
    //accessing elements from the HTML with use of DOM             
    let city = document.getElementById('search').value; 
    let units = document.getElementById("units").value;
     
    // Fetching api
    fetch('http://api.weatherstack.com/current?access_key=a236a39c8d90042cbd950759a75d0574&query=' + city + '&units=' + units)

        .then(response => response.json())   // since, promise is returned from fetch
        .then(response => {

            // console.log(response) //testing

            // replacing the value of the accessed elements with the response data
            document.getElementById("image").src = response.current.weather_icons[0];
            document.getElementById("output").innerHTML = "<h1>" + response.current.weather_descriptions[0] + "</h1> Temperature: " + response.current.temperature + "<br> Feels like: " + response.current.feelslike + "<br> UV Index: " + response.current.uv_index + "<br> Humidity: " + response.current.humidity + "<br> Cloud Cover: " + response.current.cloudcover;
        })
}