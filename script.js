const inputTxt = document.querySelector('#inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//API Key OpenWeather.org
const BaseURL = "http://api.openweathermap.org/data/2.5/";
const API_Key = "d0521b9849b489989b94ed5dc75d1ee0";

//Now Add Event Listener
//change into a function 
function fiveDay(){

    //Get Input Value
 const cityInput = inputTxt.value;
    console.log(inputTxt.value);


    //Now Fetch Through Get API 
    // 5- day forecast
    //`http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&APPID=d0521b9849b489989b94ed5dc75d1ee0
    //http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=d0521b9849b489989b94ed5dc75d1ee0
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=imperal&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(fetch);
           console.log(data.list)
            //When Fill Input Field Then Clear Input Field
            inputTxt.value = " ";
        
            //Now Show All Data Value
            showData.innerHTML = `
                <ul>
                    <li class="city">${data.name}</li>
                    <li class="temp">Temp: ${data.list[3].main.temp}</li>
                        <li class="wind">Wind: ${data.list[3].wind.speed}MPH<i class="fas fa-wind"></i></li>
                        <li class="humidity">Humidity: ${data.list[3].main.humidity}%</li>   
                    </ul>
                `; 

                //setItem in localStorage
               // console.log(showData.innerHTML)
              //  localStorage.setItem(cityInput, showData.innerHTML)
              //  console.log(data)
        });
     
};




// function LoadFromLocalStorage(){
//     data.forEach(input =>{
//         const data = document.getElementById('inputText' + tab.id)
//         var value = localStorage.getItem(tab.id)
//         if(value != null){
//             data.innerHTML = value
//         }
//     })
// }

// one input area
// * search cities current weather - 5 day forcast - and save 
//data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//grabs 5 day forecast 
//grabs current weather 


// Step 2: Use the coordinates from the previous method to find the currentweather 
function GrabWeather(theData){
 var {theLat} = theData
 var {theLon } = theData

 fetch(`${BaseURl}/data/2.5/onecall?lat=${theLat}&lon=${theLon}&units=imperial&appid=${API_Key}`)
.then (function (res) {
    console.log(res.data)
})
}


//step 1: grab coordinates based on user input
function
pi route out 
    var theUrl = `${BaseURl}/geo/1.0direct?q=${theSearch}$limit=3&appid=${API_Key}`
    fetch (theUrl).then(function(){
        console.log(res.json())
        GrabWeather(data[0])
    })
}

// Step 3: Create a function that executes the following: Show the current weather card & query the 5 day forcast 
//with corresponding data recieved from the GrabWeather method (line 69) - city, data
function executeMulti(city, data){

}


// Step 6: setItem of choice in teh localStorage 
//var divMe = document.createElement('div')
//showData.append(divMe);

// var HistoryItem = localStorage.getItem('KeyName');
// diveMe.textContent = HistoryItem
function sendToHistory(){

}

// Step 4: Create a method that renders a card (created in JS) with the content from the GrabWeather Api
// city, weather, timezone
function theDisplay() {

}


//creating elemetns in js example 
//creating a div



//added the fieDay method (from line 10 to the button)
button.addEventListener('click', fiveDay)


//var divMe = document.createElement('div')
//showData.append(divMe);
//divMe.textContent = "Hello"