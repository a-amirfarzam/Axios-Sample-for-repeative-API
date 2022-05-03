// window.setInterval(function () {
//   console.log(new Date().toLocaleString());
//   document.getElementById("res").innerHTML = new Date().toLocaleString();
// }, 5000);
let counter = 0;
window.setInterval(() => {
  axios
    .get("http://worldtimeapi.org/api/timezone/Europe/Istanbul")
    .then((res) => {
      document.getElementById("onlineTime").innerHTML =
        "API time: " + res.data.datetime;
    });
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=urmia&appid=e67d44d1c4ad579c8efddc5fcf5cb571"
    )
    .then((res) => {
      // console.log(res.data.main["temp"]);
      document.getElementById("time").innerHTML =
        "local time: " + Date().toLocaleString();

      document.getElementById("name").innerHTML = res.data.name;
      document.getElementById("wind").innerHTML = res.data.wind["speed"];
      document.getElementById("temp").innerHTML = res.data.main["temp"];
    });
  counter++;
  document.getElementById("counter").innerHTML = "counter: " + counter;
  if (counter > 15) {
    counter = 0;
    location.reload();
  }
}, 1000);
