function updateInput (event) {
    let locationField = document.querySelector("#location");
    locationField.value = event.target.querySelector(".locationValue").textContent;

    let dropDownHolder = document.querySelector("#dropDownHolder");

    while (dropDownHolder.hasChildNodes()) {
        dropDownHolder.removeChild(dropDownHolder.firstChild)
    }
}

async function autocomplete () {
    try {
        //get the location data through API 
        let locationField = document.querySelector("#location");

        let locationsList = await fetch(`https://api.weatherapi.com/v1/search.json?key=4626ed69a3ed4fd284a194520230509&q=${locationField.value}`);
        let locationsListArray = await locationsList.json();
        
        //in case the suggestion drop-down is already populated remove it 
        let dropDownHolder = document.querySelector("#dropDownHolder");

        while (dropDownHolder.hasChildNodes()) {
            dropDownHolder.removeChild(dropDownHolder.firstChild)
        }

        if (locationsListArray.length > 0) {

        //create a new updated suggestion drop-down
        let dropDown = document.createElement("div");
        dropDown.setAttribute("id", "drop-down");
        dropDownHolder.appendChild(dropDown)

        //create a div for each possible location and append it to the suggestion dropdown
        for (const location of locationsListArray) {
            let suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");
            let text = document.createElement("div");
            text.setAttribute("class", "locationValue");
            text.textContent = location.name + ", " + location.country;
            suggestion.appendChild(text),
            suggestion.addEventListener("click", updateInput)
            dropDown.appendChild(suggestion);
        }

        dropDown.lastChild.classList.remove("suggestion");
        dropDown.lastChild.classList.add("lastSuggestion");

        }
    } catch {
        alert("Server is taking its time")
    }
}

export {autocomplete}