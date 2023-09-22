let body = document.querySelector("body");

let loadingscreen = document.createElement("div");
loadingscreen.setAttribute("id", "loadingscreen");

let loaderHolder = document.createElement("div");

let loader = document.createElement("div");
loader.setAttribute("id", "loader");

loadingscreen.appendChild(loaderHolder);
loaderHolder.appendChild(loader);


function startLoading () {
    body.appendChild(loadingscreen);
}

function stopLoading () {
    body.removeChild(loadingscreen);
}

export { startLoading, stopLoading }