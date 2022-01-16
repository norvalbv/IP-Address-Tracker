const errorDisplay = document.getElementById("errorDisplay");
const ipDisplay = document.getElementById("ipInfo");
const locationDisplay = document.getElementById("locationInfo");
const timezoneDisplay = document.getElementById("timezoneInfo");
const ispDisplay = document.getElementById("ispInfo");

// Gets input

let ipInput = "";

let input = document.querySelector("input");
input.addEventListener("input", function () {
  ipInput = input.value;
});

// checks if input is valid

export const checkValid = () => {
  if (ipInput.length > 6 && ipInput.length < 100) {
    errorDisplay.innerHTML = null;
    getData(ipInput);
  } else {
    console.log("Please enter a valid input");
    errorDisplay.innerHTML = "Please enter a valid input";
  }
};

// Grabs submit button

let button = document.querySelector("button");
button.addEventListener("click", checkValid);

// inserts map

let map = L.map("map").setView([0, 0], 15);

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoibm9ydmFsYnYiLCJhIjoiY2t4YWgyZmZqM3k1bjJ0bGE3MjBwNDJmdSJ9.cQKSwVGB_GOYfGdgk-xJKw",
  }
).addTo(map);

// GET USER IP

(async () => {
  let userIP;
    try {
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    userIP = data;
    getData(userIP.ipAddress);
  } catch (err) {
    console.error(err);
  }
})();

// gets data and pans to location from typed in IP

async function getData(params) {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_baufPaDiDCELtm7xL1PSucMWS46Ob&ipAddress=${params}`);
    if (response.ok) {
      const data = await response.json();
      map.panTo(new L.LatLng(data.location.lat, data.location.lng), 15);
      updatesPage(data);
    }
  } catch (err) {
    console.log(err);
  }
};

// Updates homepage info

const updatesPage = data => {
  if (data) {
    ipDisplay.innerHTML = data.ip;
    ispDisplay.innerHTML = data.isp;
    locationDisplay.innerHTML = `${data.location.city} - ${data.location.region} - ${data.location.country}`;
    timezoneDisplay.innerHTML = data.location.timezone;
  }
};