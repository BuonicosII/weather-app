async function autocomplete () {
    let locationField = document.querySelector("#location");
    let dropDownHolder = document.querySelector("#dropDownHolder");
    try {
        let locationsList = await fetch(`https://api.weatherapi.com/v1/search.json?key=4626ed69a3ed4fd284a194520230509&q=${locationField.value}`);
        let locationsListArray = await locationsList.json();
        let dropDown = document.createElement("div");
        dropDown.classList.add("drop-down");
        dropDownHolder.appendChild(dropDown)
        for (const location of locationsListArray) {
            let suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");
            let text = document.createElement("div");
            text.textContent = location.name + " , " + location.country;
            suggestion.appendChild(text)
            dropDown.appendChild(suggestion);
        }
    } catch {
        console.log("Server is taking its time")
    }
}

export {autocomplete}