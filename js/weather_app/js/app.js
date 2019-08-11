// API url

/* 
  url: https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22&units=metric
*/

// weather data
class Weather {
  // consttuctor

  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.appID = "c3a03425f93e515a55b1b4929de39025"; // dynamic data
  }

  // method
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.appID}&units=metric`
    );

    const responseData = await response.json();

    return {
      name: responseData.name,
      main: responseData.main,
      feel: responseData.weather[0]
    };
  }

  // setLocation
  setLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

const weather = new Weather("London", "UK");

document.addEventListener('DOMContentLoaded', currentWeatherOutput); // ready to dom

// data to ui
class Ui {
  // constructor
  constructor() {
    this.cityName = document.getElementById("w-city");
    this.icon = document.getElementById("w-icon");
    this.feels = document.getElementById("w-feels");
    this.temp = document.getElementById("w-temp");
    this.pressure = document.getElementById("w-pressure");
    this.humidity = document.getElementById("w-humidity");
  }

  // data_stor to UI
  paint({
    name,
    feel: {
      main,
      icon
    },
    main: {
      temp,
      pressure,
      humidity
    }
  }) {

    const iconUrl = Ui.generateIcon(icon);
    this.icon.setAttribute('src', iconUrl);

    this.cityName.textContent = `${name}`;
    this.feels.textContent = `${main}`;
    this.temp.textContent = `Temperature(Cel): ${temp}`;
    this.pressure.textContent = `Pressure(hpa): ${pressure}`;
    this.humidity.textContent = `Humidity(%): ${humidity}`;
  }

  static generateIcon(icon) {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  }

  clearFeild() {
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
  }

  setMessage(msg) {
    const para = document.querySelector('.jumbotron p.para');

    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.id = 'msg'
    div.textContent = msg;

    Ui.hideMsg();
    para.insertAdjacentElement('afterend', div);

  }

  static hideMsg() {
    setTimeout(() => {
      document.getElementById('msg').remove();
    }, 2000);
  }

}

const ui = new Ui();

// form event
const form = document.getElementById('w-form')

form.addEventListener('submit', formHandler);

function formHandler(e) {
  e.preventDefault();
  let city = document.getElementById('city').value;
  let country = document.getElementById('country').value;

  if (city === '' || country === '') {
    ui.setMessage('Please provide necessary informatin...')
  } else {
    weather.setLocation(city, country);
    ui.clearFeild();
    currentWeatherOutput()
  }
}

function currentWeatherOutput() {
  weather
    .getWeather()
    .then(data => {
      console.log(data); // data ready
      ui.paint(data); // data_store convert to ui
    })
    .catch(e => ui.setMessage('Your City is not found'));
}