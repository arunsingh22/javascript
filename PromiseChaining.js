

function getWeatherAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve("sunny"))
    }, 1000)
}

function getWeatherIcon(weather) {
    return new Promise((resolve, reject) => {
        switch (weather) {
            case "sunny":
                resolve("🌞")
            case "rainy":
                resolve("🌧")
            default:
                reject("No icon found")
        }
    })
}

function onSuccess(data) {
    console.log("🍟")
}
function onFailure(data) {
    console.log("🤢")
}

getWeatherAPI()
    .then(getWeatherIcon)
    .then(onSuccess, onFailure)