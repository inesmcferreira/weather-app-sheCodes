let apiKey = "121052a00f6df00e4ae65743dbad7c03";

function displayForecast(){
  let forecastElement = document.querySelector("#forecast");
  
  let forecastHTML = `<div class="row dias">`;
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE"];
  days.forEach(function(day){
  forecastHTML = 
  forecastHTML + `
        <div class="col-2">
          <span class="semana">${day}</span>
          <p>
            14/03
            <br />
            <i class="fas fa-sun grid-temp"></i>
            <br />
            <span class ="temp-maxima">17º | </span>
            <span class="temp-minima">7º</span>
          </p>
          </div>
      `;
      });
  
forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function showGraus(response){
  console.log(response.data);
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
}

let data = new Date();
console.log(data.getDate())

let h2 = document.querySelector("h2")

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[data.getDay()];
      let date = data.getDate();
      let month = data.getMonth();
      let hours = data.getHours();
      let minutes = data.getMinutes();


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
 

/*
function celsiu(event){
  let farhneit =document.querySelector ("#graus");
  farhneit.innerHTML = "32ºF";
}

let celsiustof =document.querySelector ("#graus")
celsiustof.addEventListener("click", celsiu)
*/



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

displayForecast();

function showCurrent(){
 navigator.geolocation.getCurrentPosition(current); 

}
let button= document.querySelector("#tempocurrente");
button.addEventListener ("click", showCurrent);

/*
 let horasSol = response.data.sys.sunrise;
 let data = new Date(horasSol*1000);
  let date = data.getDate();
      let month = data.getMonth();
      let hours = data.getHours();
      let minutes = data.getMinutes();
 sunrise.innerHTML = `${day} <br/> ${date}/${month} <br/>${hours}:${minutes}`;
 */

/*
TPC SEMANA 3



function celsiusToF(event){
  let temp = document.querySelector("#graus");
  let cel = temp.innerHTML
  let isCel = cel[cel.length-1]

  if(isCel==="C"){
    let far = cel[0] * 9/5 + 32;
    temp.innerHTML = `${Math.round(far)}ºF`;
  }else{
    let far = cel[0] / 9/5 - 32;
    temp.innerHTML = `${Math.round(far)}ºC`;
  }
  console.log("Cheguei aqui!")
  /*
  let far = temp * 9/5 + 32;
  console.log(far)
  temp.innerHTML = `${far}`;
  


let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};


function celsiustof (temperature){
   let temperatura = temperature *9 /5
  return temperatura
}

let city = prompt("Enter a city");
if (weather[city] !== undefined) {
    let ctof = celsiustof(weather[city].temp)
    ctof = Math.round(ctof);
    alert("The temperature in " + city + " is " + weather[city].temp + "ºC (" +ctof +"ºF), with an humidity of " + weather[city].humidity + "%. ⛅️")
}
else{
    alert ("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" + city)
    
}
*/
/*
let city = prompt("Enter a city");
if (weather[city] !== undefined) {
    let ctof = weather[city].temp *9 /5;
    ctof = Math.round(ctof);
    alert("The temperature in " + city + " is " + weather[city].temp + "ºC (" +ctof +"ºF), with an humidity of " + weather[city].humidity + "%. ⛅️")
}
else{
    alert ("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" + city)
    
}
*/




// write your code here
/*
let ursa ={
    name: "inês",
    "age": 28
}
console.log (ursa);
console.log (ursa.name);
console.log (ursa.age);
console.log (ursa.pelo)
*/
