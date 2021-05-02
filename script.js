let apiKey = "121052a00f6df00e4ae65743dbad7c03";

function formatDay(timestamp){
  let date = new Date(timestamp*1000)
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return days[day];


}



function displayForecast(response){
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  
  let forecastHTML = `<div class="row dias">`;
  forecast.forEach(function(forecastDay,index){
    if (index < 6){
  forecastHTML = 
  forecastHTML + `
        <div class="col-2">
          <span class="semana">${formatDay(forecastDay.dt)}</span>
            <br />
           
            <img src = "http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" width="40"></img>
            <br />
            <span class ="temp-maxima">${Math.round(forecastDay.temp.max)}º | </span>
            <span class="temp-minima">${Math.round(forecastDay.temp.min)}º</span>
          </p>
          </div>
      `;
    }
      });
forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}





function getForecast (coordinates){
  console.log(coordinates);
  let apiKey = "121052a00f6df00e4ae65743dbad7c03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function showGraus(response){
  
  let grausElement = document.querySelector("#nove");
  grausElement.innerHTML = `${Math.round(response.data.main.temp)}ºC`;
  let tempo = document.querySelector("#tempo");
  tempo.innerHTML = `${Math.round(response.data.main.feels_like)}º`
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
 let vento = document.querySelector("#vento");
 vento.innerHTML= `${Math.round(response.data.wind.speed)} Km/H`;
 let precipitation = document.querySelector("#precipitation");
 if (response.data.rain != undefined){
 precipitation.innerHTML =`${response.data.rain["1h"]}%`;}
 else{
   precipitation.innerHTML = "0%"
 }

 /*
 let sunrise = document.querySelector("#sunrise");
 sunrise.innerHTML = response.data.sys.sunrise;
let sunset = document.querySelector("#sunset");
 sunset.innerHTML = response.data.sys.sunset; 
 */
 let icon  = document.querySelector ("#icon")
 icon.setAttribute("src" , `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

 getForecast(response.data.coord)
}

let data = new Date();
console.log(data.getDate())

let h2 = document.querySelector("h2")

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[data.getDay()];
      let date = data.getDate();
      if (date<10){
        date="0"+date
      }
      let month = data.getMonth() +1;
       if (month<10){
        month="0"+ month
      }
      let hours = data.getHours();
      if (hours<10){
        hours="0"+hours
      }
      let minutes = data.getMinutes();
      if (minutes<10){
        minutes="0"+minutes
      }


h2.innerHTML = `${day} <br/> ${date}/${month} <br/>${hours}:${minutes}`;

         

function city(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#exampleInputPassword1").value;

  let h1_cidade = document.querySelector("#cidade");
  h1_cidade.innerHTML = `${citySearch}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`
axios.get(`${apiUrl}&appid=${apiKey}`).then(showGraus);

}

let form = document.querySelector("#formulario");
form.addEventListener("submit", city);
 

 function cityFromName(citySearch){
   console.log(citySearch.data.name)
  let h1_cidade = document.querySelector("#cidade");
  h1_cidade.innerHTML = `${citySearch.data.name}`;

 }

function current (position){
let lat =position.coords.latitude;
let lon =position.coords.longitude;
console.log(lat);
console.log(lon);
let apiCity = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
axios.get(`${apiCity}&appid=${apiKey}`).then(showGraus);
axios.get(`${apiCity}&appid=${apiKey}`).then(cityFromName);

}


function showCurrent(){
 navigator.geolocation.getCurrentPosition(current); 

}
let button= document.querySelector("#tempocurrente");
button.addEventListener ("click", showCurrent);

showCurrent();
