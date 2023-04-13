const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const cityInput = document.getElementById('city-input');
const button = document.getElementById('btn');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('press');
const wind_speed = document.getElementById('wind');
const temperature = document.getElementById('temp');
const city = document.getElementById('city');
const firstDay = document.getElementById('1day');
const secondDay = document.getElementById('2day');
const thirdDay = document.getElementById('3day');
const fourthDay = document.getElementById('4day');
const fithDay = document.getElementById('5day')
const firstTemp = document.getElementById('temp1')
const secondTemp= document.getElementById('temp2');
const thirdTemp = document.getElementById('temp3');
const fourthTemp = document.getElementById('temp4');
const fithTemp = document.getElementById('temp5');
const API_KEY = "11ebb5ec912c5bd56d0ffadc98219065"
// const days = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// const months = ['Jan', 'Febuary', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

button.addEventListener('click', function (event) {
    event.preventDefault()
    if (cityInput.value !== "") {
        getOneDayForecast(cityInput.value);
        console.log("test")
    }
})
// setInterval(() =>{
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
//     const minutes = time.getMinutes();
//     const ampm = hour >= 12 ? 'PM' : 'AM';

//     timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ `<span id="am-pm">${ampm}</span>`

//     dateEl.innerHTML = days[day] + ',' +date+ ' ' + months[month]
// }, 1000);


function getWeatherData() {
    console.log("Getting weather data")
    navigator.geolocation.getCurrentPosition((success) => {
       console.log("Success below")
        console.log(success);
        console.log(success.coords.latitude)

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${success.coords.latitude}&lon=${success.coords.longitude}&exclude=hourly,minutely,daily&units=imperial&appid=${API_KEY}`)
            .then(res => res.json()).then(data => {
                console.log(data)
                showWeatherData(data.current);
            })
    })
}

function showWeatherData(info) {
    console.log("Shiwing weather in the whoWeatherData function")
    console.log(info)
    let { humidity, pressure, sunrise, sunset, wind_speed } = info;
    
    
    console.log(currentWeatherItemEl)
    currentWeatherItemEl.innerHTML =
        `<div>Humidity</div>
    <div>${humidity}</div>
    <div>
    <div>Pressure</div>
    <div>${pressure}</div>
    </div>
    <div>
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
    </div>
    <div>
    <div>Sunrise</div>
    <div>${sunrise}</div>
    </div>
    <div>
    <div>Sunset</div>
    <div>${sunset}</div>
    </div>`;
}

// getWeatherData();


// Make a request to the OpenWeatherMap API
function getOneDayForecast(city) {
    console.log("Getting one day forecast")
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=11ebb5ec912c5bd56d0ffadc98219065')
        .then(response => response.json())
        .then(data => {
            console.log(data.name)
            humidity.innerHTML = data.main.humidity;
            pressure.innerHTML = data.main.pressure;
            wind.innerHTML = data.wind.speed;
            temp.innerHTML = data.main.temp;
            city.innerHTML = data.name;
            //   // Parse the weather data and format as needed
            //     const temperature = data.main.temp;
            //     const description = data.weather[0].description;

            //   // Update the HTML to display the weather information
            //     const temperatureElement = document.getElementById('temperature');
            //     const descriptionElement = document.getElementById('description');
            //     temperatureElement.innerHTML = `${temperature} K`;
            //     descriptionElement.innerHTML = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);

        });
}






function getInfo() {
    // const newName= document.getElementById("cityInput");
    // const cityName= document.getElementById("cityName");
    // cityName.innerHTML= "--"+newName.value+"--"

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=dallas&units=imperial&appid=11ebb5ec912c5bd56d0ffadc98219065")
        .then(response => response.json())
        .then(data => {
            console.log("just go tmy info")
            console.log(data.list)
            // what is the target element ?? where do I want the content to go?
            
            //what elements do I make
            //what element innerHTML will I give to each element I make?
            //how do I append my elements together?
            
            //append them to the target element

            //get target element before the forloop
            for (let i = 0; i < data.list.length; i+=8) {
                console.log(data.list[i]) 
                firstDay.innerHTML = dayjs(data.list[0].dt_txt).format("ddd");
                secondDay.innerHTML = dayjs(data.list[8].dt_txt).format("ddd");
                thirdDay.innerHTML = dayjs(data.list[16].dt_txt).format("ddd");
                fourthDay.innerHTML= dayjs(data.list[24].dt_txt).format("ddd");
                fithDay.innerHTML = dayjs(data.list[32].dt_txt).format("ddd");

                firstTemp.innerHTML= data.list[0].main.temp;
                secondTemp.innerHTML= data.list[8].main.temp;
                thirdTemp.innerHTML= data.list[16].main.temp;
                fourthTemp.innerHTML = data.list[24].main.temp;
                fithTemp.innerHTML = data.list [32].main.temp;





                // make a card
                //make list items
                //populate the list
            }
        })

        .catch(err => alert("Ooops Algo paso!"))
}

getInfo()
const d = new Date();
const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function CheckDay(day) {
    if (day + d.getDate() > 6) {
        return day + d.getDate() - 7;
    }
    else {
        return day + d.getDate();
    }
}






    // // Parse the weather data and format as needed
    // const temperature = data.main.temp;
    // const description = data.weather[0].description;

    // // Update the HTML to display the weather information
    // const temperatureElement = document.getElementById('temperature');
    // const descriptionElement = document.getElementById('description');
    // temperatureElement.innerHTML = `${temperature} K`;
    // descriptionElement.innerHTML = description;
//   })
    // .catch(error => {
    // console.error('Error fetching weather data:', error);
    // });
