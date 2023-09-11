import { format, parseISO } from "date-fns"

//function to retrieve weather data for a given location 
async function getWeatherData(location) {
    try {
        let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4626ed69a3ed4fd284a194520230509&q=${location}&days=3`); 
        let weatherData = await weather.json();
        
        let city = document.querySelector("#city span");
        city.textContent = weatherData.location.name

        let country = document.querySelector("#country span");
        country.textContent = weatherData.location.country;

        let date = document.querySelector("#date span");
        let dateArray = weatherData.location.localtime.split(" ");
        let day = format(new Date (parseISO(dateArray[0])), "MMMM do yyyy");
        date.textContent = day;

        let hour = document.querySelector("#hour span");
        hour.textContent = dateArray[1];

        let currentWeather = document.querySelector("#currentWeather span");
        currentWeather.textContent = weatherData.current.condition.text;

        let currentTemperatureMetric = document.querySelector("#currentTemperature .metric span");
        currentTemperatureMetric.textContent = weatherData.current.temp_c + " " + "°C";

        let currentWeatherIcon = document.querySelector("#currentWeather img");
        //create switch case scenario for currentWeather Icon and app backgroud


        let currentTemperatureImperial = document.querySelector("#currentTemperature .imperial span");
        currentTemperatureImperial.textContent = weatherData.current.temp_f + " " + "°F";
        
        let feelsLikeMetric = document.querySelector("#temperatureFelt .metric span");
        feelsLikeMetric.textContent = weatherData.current.feelslike_c + " " + "°C";

        let feelsLikeImperial = document.querySelector("#temperatureFelt .imperial span");
        feelsLikeImperial.textContent = weatherData.current.feelslike_f  + " " + "°F";

        let humidity = document.querySelector("#humidity div .value");
        humidity.textContent = weatherData.current.humidity  + " " + "%";

        let rainChance = document.querySelector("#rainChance div .value");
        rainChance.textContent = weatherData.forecast.forecastday[0].day.daily_chance_of_rain + " " + "%";

        let windSpeedMetric = document.querySelector("#windSpeed .metric span");
        windSpeedMetric.textContent = weatherData.current.wind_kph + " " + "Km/h"; 

        let windSpeedImperial = document.querySelector("#windSpeed .imperial span");
        windSpeedImperial.textContent = weatherData.current.wind_mph + " " + "Mph";

        console.log(weatherData);
    } catch {
        alert("Whoops, something went wrong");
    }

}

export { getWeatherData }
