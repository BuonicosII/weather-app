import './style.css';
import { getWeatherData } from './weather-data';
import { formHandler } from './form-handler';
import { autocomplete } from './autocomplete';

let searchButton = document.querySelector("form button");
let locationField = document.querySelector("#location");

locationField.addEventListener("input", autocomplete);
searchButton.addEventListener("click", formHandler);

getWeatherData("Udine");
