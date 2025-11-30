let map
let marker
const goButton = document.getElementById("goButton")
const apiKey = "at_uMgpINFNZQ0o6RfuFsKWyfxr6D5ra"

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6875d1010bc8c5041e443859",
    center: { lat: 33.7620, lng: -84.4172 },
    zoom: 12
  });
  marker = new google.maps.Marker ({
    position: { lat: 33.7620, lng: -84.4172 },
    map: map
})
}
window.initMap = initMap;

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then (data => {
        document.getElementById("show").textContent = `Current Device IP Address: ${data.ip}`
    })
    .catch (error => {
        console.error("Error Fetching IP", error)
        document.getElementById("show").textContent = "Unable to retrieve IP address."
    })

})


document.getElementById("searchForm").addEventListener ("submit", function (e){
e.preventDefault()
const search = document.getElementById("searchBox").value.trim()
if(search) {
    mapIp (search)
}
})


async function mapIp (ipOrDomain) {
try {
    const response = await fetch (
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipOrDomain}&domain=${ipOrDomain}`
    )
    const data = await response.json ()
    const {ip, isp, location } = data
    const {city, region, country, timezone, lat, lng} = location

    document.getElementById("address").textContent = `IP Address: ${ip} `
    document.getElementById("location").textContent = `Location: ${city}, ${region}, ${country} `
    document.getElementById("timezone").textContent =  `Timezone: ${timezone} `
    // document.getElementById("utc").textContent = `UTC: ${getUTCOffset(timezone)}`
    document.getElementById("isp").textContent = `ISP: ${isp}`


    map.setCenter({ lat, lng });
    map.setZoom(12);
    marker.setPosition({ lat, lng });
  } catch (error) {
    console.error("Error fetching IP info:", error);
    alert("Could not find that IP address or domain.");
}
}