async function autocomplete () {
    let locationField = document.querySelector("#location");
    try {
        let locationsList = await fetch(`https://api.weatherapi.com/v1/search.json?key=4626ed69a3ed4fd284a194520230509&q=${locationField.value}`);
        let locationsListArray = await locationsList.json();
        for (const location of locationsListArray) {
            console.log(location.name, location.country);
        }
    } catch {
        console.log("Server is taking its time")
    }
}

export {autocomplete}