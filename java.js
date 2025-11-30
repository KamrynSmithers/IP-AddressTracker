

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6875d1010bc8c5041e443859",
    center: { lat: 33.7620, lng: -84.4172 },
    zoom: 12
  });
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