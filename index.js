let ipInput = null;
let valid = true;

const obtainInput = () => {
    if (valid) {
        getData();
    } else {
        console.log('Please enter a valid input');
    }
};

/* grabs input info */

const ipDisplay = document.getElementById('ipInfo');
const locationDisplay = document.getElementById('locationInfo');
const timezoneDisplay = document.getElementById('timezoneInfo');
const ispDisplay = document.getElementById('ispInfo');

let input = document.querySelector('input');
input.addEventListener('input', function() {
    ipInput = input.value
});

let button = document.querySelector('button');
button.addEventListener('click', function() {
    setTimeout(() => {
        obtainInput();
    }, /* simulates an actual delay in the call */ Math.floor(Math.random() * 3000))
});

async function getData () {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_baufPaDiDCELtm7xL1PSucMWS46Ob&ipAddress=${ipInput}`);
        if (response.ok) {
            const data = await response.json();
            updatesPage(data);
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
};

const updatesPage = data => {
    if (valid) {
        ipDisplay.innerHTML = data.ip;
        ispDisplay.innerHTML = data.isp;
        locationDisplay.innerHTML = `${data.location.city} - ${data.location.region} - ${data.location.country}`;
        timezoneDisplay.innerHTML = data.location.timezone;
    }
}
////////////////////

let accessToken = 'pk.eyJ1Ijoibm9ydmFsYnYiLCJhIjoiY2t4YWgyZmZqM3k1bjJ0bGE3MjBwNDJmdSJ9.cQKSwVGB_GOYfGdgk-xJKw';

let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm9ydmFsYnYiLCJhIjoiY2t4YWgyZmZqM3k1bjJ0bGE3MjBwNDJmdSJ9.cQKSwVGB_GOYfGdgk-xJKw'
}).addTo(map);