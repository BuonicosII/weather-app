

//function to retrieve weather data for a given location 
async function getWeatherData(location) {
    try {
        let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4626ed69a3ed4fd284a194520230509&q=${location}&days=3`); 
        let weatherData = await weather.json();
        console.log(weatherData);
    }catch {
        alert("Whoops, something went wrong");
    }

}

export { getWeatherData }
