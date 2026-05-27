const apiKey = "11b6cb945ffbbb15753332ad763a7890";

async function getWeather(){

    const city =
    document.getElementById("city").value;

    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const apiURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response =
        await fetch(apiURL);

        if(!response.ok){
            alert("City not found");
            return;
        }

        const data =
        await response.json();

        document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("description").innerHTML =
        data.weather[0].main;

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        const icon =
        data.weather[0].icon;

        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }

    catch(error){
        alert("Something went wrong");
    }

}