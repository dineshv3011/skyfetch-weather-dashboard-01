const apiKey = "YOUR_API_KEY";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
.then(function(response) {

    const weatherData = response.data;

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    document.getElementById("city").textContent = cityName;
    document.getElementById("temperature").textContent = temperature + "°C";
    document.getElementById("description").textContent = description;
    document.getElementById("icon").src = 
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

})
.catch(function(error) {
    console.log("Error fetching weather data:", error);
    console.log("Part 1 API Integration Branch");
});