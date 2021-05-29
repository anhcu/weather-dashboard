const inputTxt = document.querySelector('#inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');
const history = document.getElementById('history');

//API Key OpenWeather.org
const BaseURL = "http://api.openweathermap.org/data/2.5/";
const API_Key = "d0521b9849b489989b94ed5dc75d1ee0";

button.addEventListener('click', fiveDay)
console.log(button)

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


    // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=current&appid=${API_Key}`)
    
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const section = document.createElement('div')
        section.classList.add('todayForcast')

        const temp = document.createElement('div')
        temp.innerText = "Temp: " + data.main.temp + "℉"
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
    
// grabbing 5-Day 
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

                    const icon = document.createElement('div')
                    icon.innerText = "" + item.weather[0].icon
                    icon.classList.add('section')
                    section.appendChild(icon)
    
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
            addToList("historyList", cityInput) 

        });
     
};
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