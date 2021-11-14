var hamburger = document.getElementById('hamburger')
var mobileMenu = document.getElementById("mobile");

hamburger.addEventListener("click",
  function() {
    mobileMenu.classList.toggle("show");
  }, false
);

// map
function initMap() {
  const myLatLng = { lat: 41.815, lng: -87.643 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}