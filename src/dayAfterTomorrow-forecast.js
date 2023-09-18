import { forecastWeatherIcon } from "./forecast-update";

//afterTmrw forecast 
function afterTmrwForecast (afterTmrwForecast) {

    //night forecast
    let afterTmrwNightImg = document.querySelector("#afterTmrwNight img");
    afterTmrwNightImg.src =  forecastWeatherIcon(afterTmrwForecast.hour[3]);

    let afterTmrwNightTempImperial = document.querySelector("#afterTmrwNight .imperial");
    afterTmrwNightTempImperial.textContent = afterTmrwForecast.hour[3].temp_f + " °F"; 

    let afterTmrwNightTempMetric = document.querySelector("#afterTmrwNight .metric");
    afterTmrwNightTempMetric.textContent = afterTmrwForecast.hour[3].temp_c + " °C"; 

    //morning forecast
    let afterTmrwMorningImg = document.querySelector("#afterTmrwMorning img");
    afterTmrwMorningImg.src = forecastWeatherIcon(afterTmrwForecast.hour[9]);

    let afterTmrwMorningTempImperial = document.querySelector("#afterTmrwMorning .imperial");
    afterTmrwMorningTempImperial.textContent = afterTmrwForecast.hour[9].temp_f + " °F";  

    let afterTmrwMorningTempMetric = document.querySelector("#afterTmrwMorning .metric");
    afterTmrwMorningTempMetric.textContent = afterTmrwForecast.hour[9].temp_c + " °C";  

    //afternoon forecast
    let afterTmrwAfternoonImg = document.querySelector("#afterTmrwAfternoon img");
    afterTmrwAfternoonImg.src = forecastWeatherIcon(afterTmrwForecast.hour[15]);

    let afterTmrwAfternoonTempImperial = document.querySelector("#afterTmrwAfternoon .imperial");
    afterTmrwAfternoonTempImperial.textContent = afterTmrwForecast.hour[15].temp_f + " °F";  

    let afterTmrwAfternoonTempMetric = document.querySelector("#afterTmrwAfternoon .metric");
    afterTmrwAfternoonTempMetric.textContent = afterTmrwForecast.hour[15].temp_c + " °C";  

    //evening forecast
    let afterTmrwEveningImg = document.querySelector("#afterTmrwEvening img");
    afterTmrwEveningImg.src = forecastWeatherIcon(afterTmrwForecast.hour[21]);

    let afterTmrwEveningTempImperial = document.querySelector("#afterTmrwEvening .imperial");
    afterTmrwEveningTempImperial.textContent = afterTmrwForecast.hour[21].temp_f + " °F";  

    let afterTmrwEveningTempMetric = document.querySelector("#afterTmrwEvening .metric");
    afterTmrwEveningTempMetric.textContent = afterTmrwForecast.hour[21].temp_c + " °C";  
}

export { afterTmrwForecast }