

//function to retrieve weather data for a given location 
async function getWeatherData(location) {
    try {
        let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4626ed69a3ed4fd284a194520230509&q=${location}&days=3`); 
        let weatherData = await weather.json();
        
        let city = document.querySelector("#city");
        city.textContent = weatherData.location.name

        let date = document.querySelector("#date");
        date.textContent = weatherData.location.localtime;

        let currentWeather = document.querySelector("#currentWeather span");
        currentWeather.textContent = weatherData.current.condition.text;
        
        let feelsLike = document.querySelector("#temperatureFelt span");
        feelsLike.textContent = weatherData.current.feelslike_c;

        let humidity = document.querySelector("#humidity span");
        humidity.textContent = weatherData.current.humidity;

        let rainChance = document.querySelector("#rainChance span");
        rainChance.textContent = weatherData.forecast.forecastday[0].daily_chance_of_rain;

        let windSpeed = document.querySelector("#windSpeed span");
        windSpeed.textContent = weatherData.current.wind_kph;

        console.log(weatherData);
    } catch {
        alert("Whoops, something went wrong");
    }

}

export { getWeatherData }
