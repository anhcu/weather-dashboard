//Get All Values
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Get API Key By Login To OpenWeather.org
const API_Key = "d0521b9849b489989b94ed5dc75d1ee0";

//Now Add Event Listener
button.addEventListener('click', () => {

    //Get Input Value
    const cityInput = inputTxt.value;
    // console.log(cityInput);

    //Now Fetch Through Get API 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(fetch);

            //When Fill Input Field Then Clear Input Field
            inputTxt.value = " ";
            

            //Now Show All Data Value
            showData.innerHTML = `
                                <ul>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">Temp: ${data.main.temp}</li>
                                    <li class="wind">Wind: ${data.wind.speed}MPH</li>
                                    <li class="humidity">Humidity: ${data.main.humidity}%</li>   
                                </ul>
                                `; 

        });

});

// <li class="desc">${data.weather[0].description}</li>
// <li class="city">${data.name}</li>
// <li class="temp">${data.main.temp}°f</li>