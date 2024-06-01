let SearchBtn = document.querySelector("#button");
let Searchbox = document.querySelector("#text")

let Apikey = "d8d7118a88b96061fb015979569a224f";


let units = "metric";

let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?"

let icons = document.querySelector(".weather-icon");

async function Method (City) {

    try {

        let response = await fetch(`${ApiUrl}&q=${City}&appid=${Apikey}&units=${units}`);
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        console.log(data);

        if(data.weather.main == "Clouds") {
            weatherIcon.style.img.src = "clouds.png";
        }
        else if (data.weather.main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather.main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather.main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather.main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather.main == "Snow") {
            weatherIcon.src = "snow.png";
        }
    }

    catch {

        document.querySelector(".city").innerHTML = "SOMETHING WENT WRONG";
        document.querySelector(".temp").innerHTML = "SOMETHING WENT WRONG";
        document.querySelector(".humidity").innerHTML = "SOMETHING WENT WRONG";
        document.querySelector(".wind").innerHTML = "SOMETHING WENT WRONG";
    }
}

SearchBtn.addEventListener("click", ()=> {
    Method(Searchbox.value);
});