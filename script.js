const inputTxt = document.querySelector('#inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');
const history = document.getElementById('history');

//API Key OpenWeather.org
const BaseURL = "http://api.openweathermap.org/data/2.5/";
const API_Key = "d0521b9849b489989b94ed5dc75d1ee0";

button.addEventListener('click', fiveDay)

//Now Add Event Listener
//change into a function 
function fiveDay(){

    //Get Input Value
 var cityInput = inputTxt.value;
    // cityInput = "Atlanta"

    const todayFC = document.getElementById('todayFC');

    todayFC.innerText = cityInput + ' (' + getDateFormat(new Date()) + ')'

    const parentDiv = document.getElementById('showData')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const section = document.createElement('div')
        section.classList.add('forcastInfo')

        const temp = document.createElement('div')
        temp.innerText = "Temp: " + data.main.temp
        temp.classList.add('section')
        section.appendChild(temp)

        const wind = document.createElement('div')
        wind.innerText = "Wind: " + data.wind.speed
        wind.classList.add('section')
        section.appendChild(wind)

        const humidity = document.createElement('div')
        humidity.innerText = "Humidity: " + data.main.humidity
        humidity.classList.add('section')
        section.appendChild(humidity)
        todayFC.appendChild(section)       
    });

    fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityInput}&units=imperial&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            var currentDate = null;

            data.list.forEach(item => {
                var loopDate = getDateFormat(new Date(item.dt_txt));
                if(currentDate != loopDate){
                    const section = document.createElement('div')
                    section.classList.add('forcastInfo')
    
                    const date = document.createElement('div')
                    date.innerText = getDateFormat(new Date(item.dt_txt))
                    date.classList.add('section')
                    section.appendChild(date)
    
                    const temp = document.createElement('div')
                    temp.innerText = "Temp: " + item.main.temp
                    temp.classList.add('section')
                    section.appendChild(temp)
    
                    const wind = document.createElement('div')
                    wind.innerText = "Wind: " + item.wind.speed
                    wind.classList.add('section')
                    section.appendChild(wind)
    
                    const humidity = document.createElement('div')
                    humidity.innerText = "Humidity: " + item.main.humidity
                    humidity.classList.add('section')
                    section.appendChild(humidity)
                    parentDiv.appendChild(section)

                    currentDate = loopDate;
                }

            });
            // const childDiv = document.createElement('div')
            // childDiv.innerText = cityInput; 
            // history.appendChild(childDiv)  
            addToList("historyList", cityInput) 

            // function LoadFromLocalStorage(){
            //     tabs.forEach(tab => {
                    
            //     const section = document.createElement('div')
            //         var value = localStorage.getItem(tab.id) 
            //         if(value != null){
            //             textArea.innerText = value      
            //         }
            //         console.log('txtArea')
            //       })  
            // }
            


 
            //When Fill Input Field Then Clear Input Field
        
            //Now Show All Data Value
            // showData.innerHTML = `
            //     <ul>
            //         <li class="temp">Temp: ${data.list[3].main.temp}</li>
            //             <li class="wind">Wind: ${data.list[3].wind.speed}MPH<i class="fas fa-wind"></i></li>
            //             <li class="humidity">Humidity: ${data.list[3].main.humidity}%</li>   
            //         </ul>
            //     `; 

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
// function GrabWeather(theData){
//  var {theLat} = theData
//  var {theLon } = theData

//  fetch(`${BaseURl}/data/2.5/onecall?lat=${theLat}&lon=${theLon}&units=imperial&appid=${API_Key}`)
// .then (function (res) {
//     console.log(res.data)
// })
// }

//step 1: grab coordinates based on user input
// function grabCoordinates(){
//     const theSearch = inputTxt.value;
// //test this api route out 
//     var theUrl = `${BaseURl}/geo/1.0direct?q=${theSearch}$limit=3&appid=${API_Key}`
//     fetch (theUrl).then(function(){
//         console.log(res.json())
//         GrabWeather(data[0])
//     })
// }

// Step 3: Create a function that executes the following: Show the current weather card & query the 5 day forcast 
//with corresponding data recieved from the GrabWeather method (line 69) - city, data
// function executeMulti(city, data){

// }

// Step 6: setItem of choice in teh localStorage 
//var divMe = document.createElement('div')
//showData.append(divMe);

// var HistoryItem = localStorage.getItem('KeyName');
// diveMe.textContent = HistoryItem
// function sendToHistory(){
//     // function LoadFromLocalStorage(){
//     //     //     data.forEach(input =>{
//     //     //         const data = document.getElementById('inputText' + tab.id)
//     //     //         var value = localStorage.getItem(tab.id)
//     //     //         if(value != null){
//     //     //             data.innerHTML = value
// }

// Step 4: Create a method that renders a card (created in JS) with the content from the GrabWeather Api
// city, weather, timezone
// function theDisplay() {

// }

//creating elemetns in js example 
//creating a div

//added the fieDay method (from line 10 to the button)



//var divMe = document.createElement('div')
//showData.append(divMe);
//divMe.textContent = "Hello"

function addToList(listID, listValue) {
    var ul = document.getElementById(listID);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(listValue));
    ul.appendChild(li);
  }

  function getDateFormat(d) {
    var month = d.getMonth() + 1;
    return month +'-'+ d.getDate()+'-'+d.getFullYear()
  }