import './style.css';
import { getWeatherData } from './weather-data';


let searchButton = document.querySelector("form button");
let locationField = document.querySelector("#location");

searchButton.addEventListener("click", () => {
    event.preventDefault();
    
    getWeatherData(locationField.value)
})

