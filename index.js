let api_key = 'at_baufPaDiDCELtm7xL1PSucMWS46Ob';

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
    ipDisplay.innerHTML = data;
    if (valid) {
        ipDisplay.innerHTML = data.ip;
        ispDisplay.innerHTML = data.isp;
        locationDisplay.innerHTML = `${data.location.city} - ${data.location.region} - ${data.location.country}`;
        timezoneDisplay.innerHTML = data.location.timezone;
    }
}