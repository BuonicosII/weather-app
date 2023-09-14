import './style.css';
import { getWeatherData } from './weather-data';
import { formHandler } from './form-handler';


let searchButton = document.querySelector("form button");

searchButton.addEventListener("click", formHandler);

getWeatherData("Udine");