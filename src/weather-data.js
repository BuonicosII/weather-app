import { format, parseISO } from "date-fns"
import { updateDays } from "./update-days";
import { todayForecast } from "./today-forecast";
import { tomorrowForecast } from "./tomorrow-forecast";
import { afterTmrwForecast } from "./dayAfterTomorrow-forecast";

//function to retrieve weather data for a given location 
async function getWeatherData(location) {
    try {
        let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4626ed69a3ed4fd284a194520230509&q=${location}&days=3`); 
        let weatherData = await weather.json();

        updateDays(weatherData.forecast.forecastday[1].date, weatherData.forecast.forecastday[2].date);
        
        let city = document.querySelector("#city div");
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

        let background = document.querySelector("body");
        let currentWeatherImage = document.querySelector("#currentSituation img");

        switch (weatherData.current.condition.code) {
            case 1000: 
                if (weatherData.current.is_day === 1) {
                    background.setAttribute("style", "background-image: url(./Background/sun.jpg); background-size: cover;");
                    currentWeatherImage.src = "./Icons/sunny.png";
                } else if (weatherData.current.is_day === 0) {
                    background.setAttribute("style", "background-image: url(./Background/clearnight.jpg); background-size: cover;");
                    currentWeatherImage.src = "./Icons/clearsky.png";
                }
                break;
            case 1003:
            case 1006:
            case 1009:
                background.setAttribute("style", "background-image: url(./Background/cloudy.jpg); background-size: cover;");
                currentWeatherImage.src = "./Icons/cloudy.png";
                break;
            case 1030:
            case 1135:
            case 1147:
                background.setAttribute("style", "background-image: url(./Background/fog.jpg); background-size: cover;");
                currentWeatherImage.src = "./Icons/fog.png";
                break;
            case 1063:
            case 1087:
            case 1150:
            case 1153:
            case 1168:
            case 1171:
            case 1180:
            case 1183:
            case 1186:
            case 1189:
            case 1192:
            case 1195:
            case 1198:
            case 1201:
            case 1240:
            case 1243:
            case 1246:
            case 1273:
            case 1276:
                background.setAttribute("style", "background-image: url(./Background/rain.jpg); background-size: cover;");
                currentWeatherImage.src = "./Icons/rainy.png";
                break;
            case 1066:
            case 1069:
            case 1073:
            case 1114:
            case 1117:
            case 1204:
            case 1207:
            case 1210:
            case 1213:
            case 1216:
            case 1219:
            case 1222:
            case 1225:
            case 1237:
            case 1249:
            case 1252:
            case 1255:
            case 1258:
            case 1261:
            case 1264:
            case 1279:
            case 1282:
                background.setAttribute("style", "background-image: url(./Background/snow.jpg); background-size: cover;");
                currentWeatherImage.src = "./Icons/snowy.png";
        }
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

        todayForecast(weatherData.forecast.forecastday[0]);
        tomorrowForecast(weatherData.forecast.forecastday[1]);
        afterTmrwForecast(weatherData.forecast.forecastday[2]);


    } catch {
        alert("Whoops, something went wrong");
    }

}

export { getWeatherData }
