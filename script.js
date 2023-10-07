// apı ın url ı key ıcınde degıskende saklanır
const url = "https://api.openweathermap.org/data/2.5/";
const key = "7994916e07a2aaf37f9f5fa8d5cc0570";

// !html den gelenler
const box = document.querySelector(".weather-box");
const searchBar = document.getElementById("searchBar");

// klavye ıle olay ızleyıcısı
searchBar.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.key === "Enter") {
    getResult(searchBar.value);
  }
}
// kullanıcı sehır ısmı gırdıgınde apı a ıstek atar
function getResult(cityName) {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}

// sehrin sonucunu ogrenme ve ekrana basma
const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;

  const image = document.createElement("img");
  console.dir(result);
  // switch case ile hava durumuna göre resim ekledim
  switch (result.weather[0].description) {
    case "açık":
      image.src = "günes.png";
      break;
    case "parçalı bulutlu":
      image.src = "kapali.png";
      break;
    case "az bulutlu":
      image.src = "kapalii.png";
      break;
    case "parçalı az bulutlu":
      image.src = "kapalii.png";
      break;

    case "kapalı":
      image.src = "kapalii.png";
      break;
    case "kar yağışlı":
      image.src = "karli.png";
      break;
    case "hafif yağmur":
      image.src = "yagmur.png";
      break;
    case "yagmurlu":
      image.src = "yagmur.png";
      break;
    // Diğer hava durumları için eklemeler yapabilirsiniz
    default:
      image.src = ""; // Varsayılan durumda resmi kaldırabilirsiniz
      break;
  }
  box.innerHTML = "";
  box.appendChild(image);
};
