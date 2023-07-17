const MY_KEY = 'f36bff0dc2f34613a43d891e93215681';
const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: '2bf2879ff46f72c4b7f535767c603321'
}

async function getIP() {
    const resOne = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${MY_KEY}`);
    const resultOne = await resOne.json();
    getInfo(resultOne.city);
}

getIP();

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter(e) {
    if(e.key === 'Enter') {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = 'Feels like:' + ' ' + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variations = document.querySelector('#variations');
    variations.innerHTML = 'Min:' + ' ' + `${Math.round(result.main.temp_min)}<span>°</span>` + ' ' + 
    'Max:' + ' ' + `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + ' ' + `${todayDate}` + ' ' + 
    `${month}` + ' ' + `${year}`;
}


gsap.from('#header', {
    opacity: 0,
    delay: 1,
    duration: 1
}) 

gsap.from('#where-when', {
    opacity: 0,
    delay: 1.5,
    duration: 3,
}) 

gsap.from('#now', {
    opacity: 0,
    delay: 2,
    duration: 4,
}) 
