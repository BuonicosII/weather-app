import { forecastWeatherIcon } from "./forecast-update";

//today forecast 
function todayForecast (todayForecast) {

    //night forecast
    let todayNightImg = document.querySelector("#todayNight img");
    todayNightImg.src =  forecastWeatherIcon(todayForecast.hour[3]);

    let todayNightTempImperial = document.querySelector("#todayNight .imperial");
    todayNightTempImperial.textContent = todayForecast.hour[3].temp_f + " °F"; 

    let todayNightTempMetric = document.querySelector("#todayNight .metric");
    todayNightTempMetric.textContent = todayForecast.hour[3].temp_c + " °C"; 

    //morning forecast
    let todayMorningImg = document.querySelector("#todayMorning img");
    todayMorningImg.src = forecastWeatherIcon(todayForecast.hour[9]);

    let todayMorningTempImperial = document.querySelector("#todayMorning .imperial");
    todayMorningTempImperial.textContent = todayForecast.hour[9].temp_f + " °F";  

    let todayMorningTempMetric = document.querySelector("#todayMorning .metric");
    todayMorningTempMetric.textContent = todayForecast.hour[9].temp_c + " °C";  

    //afternoon forecast
    let todayAfternoonImg = document.querySelector("#todayAfternoon img");
    todayAfternoonImg.src = forecastWeatherIcon(todayForecast.hour[15]);

    let todayAfternoonTempImperial = document.querySelector("#todayAfternoon .imperial");
    todayAfternoonTempImperial.textContent = todayForecast.hour[15].temp_f + " °F";  

    let todayAfternoonTempMetric = document.querySelector("#todayAfternoon .metric");
    todayAfternoonTempMetric.textContent = todayForecast.hour[15].temp_c + " °C";  

    //evening forecast
    let todayEveningImg = document.querySelector("#todayEvening img");
    todayEveningImg.src = forecastWeatherIcon(todayForecast.hour[21]);

    let todayEveningTempImperial = document.querySelector("#todayEvening .imperial");
    todayEveningTempImperial.textContent = todayForecast.hour[21].temp_f + " °F";  

    let todayEveningTempMetric = document.querySelector("#todayEvening .metric");
    todayEveningTempMetric.textContent = todayForecast.hour[21].temp_c + " °C";  
}

export { todayForecast }