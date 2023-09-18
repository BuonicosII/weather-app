import { forecastWeatherIcon } from "./forecast-update";

//tomorrow forecast 
function tomorrowForecast (tomorrowForecast) {

    //night forecast
    let tomorrowNightImg = document.querySelector("#tomorrowNight img");
    tomorrowNightImg.src =  forecastWeatherIcon(tomorrowForecast.hour[3]);

    let tomorrowNightTempImperial = document.querySelector("#tomorrowNight .imperial");
    tomorrowNightTempImperial.textContent = tomorrowForecast.hour[3].temp_f + " °F"; 

    let tomorrowNightTempMetric = document.querySelector("#tomorrowNight .metric");
    tomorrowNightTempMetric.textContent = tomorrowForecast.hour[3].temp_c + " °C"; 

    //morning forecast
    let tomorrowMorningImg = document.querySelector("#tomorrowMorning img");
    tomorrowMorningImg.src = forecastWeatherIcon(tomorrowForecast.hour[9]);

    let tomorrowMorningTempImperial = document.querySelector("#tomorrowMorning .imperial");
    tomorrowMorningTempImperial.textContent = tomorrowForecast.hour[9].temp_f + " °F";  

    let tomorrowMorningTempMetric = document.querySelector("#tomorrowMorning .metric");
    tomorrowMorningTempMetric.textContent = tomorrowForecast.hour[9].temp_c + " °C";  

    //afternoon forecast
    let tomorrowAfternoonImg = document.querySelector("#tomorrowAfternoon img");
    tomorrowAfternoonImg.src = forecastWeatherIcon(tomorrowForecast.hour[15]);

    let tomorrowAfternoonTempImperial = document.querySelector("#tomorrowAfternoon .imperial");
    tomorrowAfternoonTempImperial.textContent = tomorrowForecast.hour[15].temp_f + " °F";  

    let tomorrowAfternoonTempMetric = document.querySelector("#tomorrowAfternoon .metric");
    tomorrowAfternoonTempMetric.textContent = tomorrowForecast.hour[15].temp_c + " °C";  

    //evening forecast
    let tomorrowEveningImg = document.querySelector("#tomorrowEvening img");
    tomorrowEveningImg.src = forecastWeatherIcon(tomorrowForecast.hour[21]);

    let tomorrowEveningTempImperial = document.querySelector("#tomorrowEvening .imperial");
    tomorrowEveningTempImperial.textContent = tomorrowForecast.hour[21].temp_f + " °F";  

    let tomorrowEveningTempMetric = document.querySelector("#tomorrowEvening .metric");
    tomorrowEveningTempMetric.textContent = tomorrowForecast.hour[21].temp_c + " °C";  
}

export { tomorrowForecast }