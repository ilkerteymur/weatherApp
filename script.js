const url = 'https://api.openweathermap.org/data/2.5/';
const key = '7994916e07a2aaf37f9f5fa8d5cc0570';

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);

function setQuery(e) {
  if (e.key === 'Enter') {
    getResult(searchBar.value);
  }
}

function getResult(cityName) {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`   
  fetch(query)
  .then(weather => {
    return weather.json()

  })
  .then(displayResult)
}

const displayResult = (result) =>{
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
     

}

