import './style.css';
import { getWeatherData } from './weather-data';
import { formHandler } from './form-handler';
import { autocomplete } from './autocomplete';
import { toggleMetricImperial } from './toggleMetricImperial';

let searchButton = document.querySelector("form button");
let locationField = document.querySelector("#location");
//let toggle = document.querySelector("#measureSystem");


locationField.addEventListener("input", autocomplete);
searchButton.addEventListener("click", formHandler);
//toggle.addEventListener("click", toggleMetricImperial);

getWeatherData("Udine");
