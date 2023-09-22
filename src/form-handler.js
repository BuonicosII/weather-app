import { getWeatherData } from './weather-data';
import { startLoading, stopLoading } from './loading-animation';

async function formHandler () {

    event.preventDefault();
    
    let locationField = document.querySelector("#location");

    if (locationField.value.length === 0) {
        locationField.setCustomValidity("Insert a valid location");
        locationField.reportValidity();
    } else {
        locationField.setCustomValidity("");
        locationField.reportValidity();
        startLoading();
        await getWeatherData(locationField.value);
        stopLoading();
    }
};

export { formHandler }