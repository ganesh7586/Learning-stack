
//const apiKey="e4769cb3a773b724d5030d539e162356";
//const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const search=document.getElementById("in");
const serch=document.getElementById("but");
const wedicon=document.getElementById("icon");
async function checkWeather(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4769cb3a773b724d5030d539e162356&units=metric`);
    var data = await response.json();
    console.log(data);
    document.getElementById("rep").textContent=data.weather[0].main;
    document.getElementById("city").textContent=data.name;
    document.getElementById("temp").textContent=data.main.temp + "°C";
    document.getElementById("hum").textContent=data.main.humidity + "%";
    document.getElementById("wsp").textContent=Math.floor(data.wind.speed) + "Km";
    
   if(data.weather[0].main=="Clouds"){
      wedicon.src="pics/drizzle.png";
   }
    else if(data.weather[0].main=="Clear"){
      wedicon.src="pics/clouds.png";
   }
   else if(data.weather[0].main=="Drizzle"){
      wedicon.src="pics/humidity.png";
   }
   else if(data.weather[0].main=="Rain"){
      wedicon.src="pics/search.png";
   }
   else if(data.weather[0].main=="Mist"){
      wedicon.src="pics/rain.png";
   }
   else {
    wedicon.src="pics/humidity.png";
   }
    
}
serch.addEventListener("click" , ()=>{
    const city=search.value ;
    checkWeather(city);
});
 
