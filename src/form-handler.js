import { getWeatherData } from './weather-data';

function formHandler () {

    event.preventDefault();
    
    let locationField = document.querySelector("#location");

    if (locationField.value.length === 0) {
        locationField.setCustomValidity("Insert a valid location");
        locationField.reportValidity();
    } else {
        locationField.setCustomValidity("");
        locationField.reportValidity();
        getWeatherData(locationField.value)
    }
};

export { formHandler }