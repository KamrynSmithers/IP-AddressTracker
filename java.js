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


