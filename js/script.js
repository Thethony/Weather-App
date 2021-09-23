$(function(){
    //constant Variables
    const Base_URL= "https://api.openweathermap.org/data/2.5/weather?q=";
    const API_KEY= "41d64fa396367cb3de4eed10a11cc491";
    let weatherData;

// cached element reference
    const $city = $('#city');
    const $temp = $('#temp');
    const $feel = $('#feel');
    const $forecast = $('#forecast');
    const $form = $('form')
    const $input = $('input[type="text"]');

    // Event handler
    $form.on('submit', handleGetData)

    // function

    function handleGetData(event) {
        // request to api from js
        event.preventDefault();
        // turn off default page refresh
        const weatherCity = $input.val();
        $input.val("");
        $.ajax(`${Base_URL}${weatherCity}&units=imperial&appid=${API_KEY}`).then(function(data) {
            weatherData = data;
            console.log(weatherData)
            render();
        }, function(error) {
            // failure call back
            console.log(error);
        });
    }

function render(){
    $city.text(weatherData.name);
    $temp.text("Temperature: " + weatherData.main.temp);
    $feel.text("Feels Like:" + weatherData.main.feels_like);
    $forecast.text("Weather: " + weatherData.weather[0].description);
}


});