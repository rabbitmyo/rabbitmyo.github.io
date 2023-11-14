const API_KEY = "1281abcd37abe3a9eaaa7c0030b17ebe";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");
        console.log(data.name);
        city.innerText = data.name;
        weather.innerText =  data.weather[0].main;
    });//js가 자동으로 url 요청, 검사의 network탭에서 확인 가능
}
function onGeoError (){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);//브라우저에서 현재위치를 보냄