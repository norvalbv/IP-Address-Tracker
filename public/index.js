require('dotenv').config();

console.log(process.env);

const errorDisplay = document.getElementById('errorDisplay');
let ipInput = '';
let valid = false;

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
    if (ipInput.length > 6 && ipInput.length < 100) {
        valid = true;
        errorDisplay.innerHTML = null;
        setTimeout(() => {
            getData();
        }, /* simulates an actual delay in the call */ Math.floor(Math.random() * 2500))
    } else {
        console.log('Please enter a valid input');
        errorDisplay.innerHTML = 'Please enter a valid input';
    }

});

let map = L.map('map').setView([0, 0], 15);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm9ydmFsYnYiLCJhIjoiY2t4YWgyZmZqM3k1bjJ0bGE3MjBwNDJmdSJ9.cQKSwVGB_GOYfGdgk-xJKw'
}).addTo(map);

async function getData () {
    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_baufPaDiDCELtm7xL1PSucMWS46Ob&ipAddress=${ipInput}`);
        if (response.ok) {
            const data = await response.json();
            map.panTo(new L.LatLng(data.location.lat, data.location.lng), 15);
            updatesPage(data);
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