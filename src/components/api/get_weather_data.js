import apiKey from './api_key';
import weatherFactory from '../logic/weather_app';
import uiFactory from '../dom/main.dom';

const getWeatherFactory = () => {
  const handleData = (data) => {
    const ui = uiFactory();
    const weatherData = weatherFactory(data);
    ui.updateLocation(weatherData.location);
    ui.changeImage(weatherData.theme);
    ui.updateDateTime(weatherData.date);
    ui.updateIcon(weatherData.weatherIcon);
    ui.updateTemp(weatherData.temp);
    ui.updateDescription(weatherData.description);
    ui.updateHumidity(weatherData.humidity);
    ui.updateMax(weatherData.temp_max);
    ui.updateMin(weatherData.temp_min);
    ui.updateSunrise(weatherData.sunrise);
    ui.updateSunset(weatherData.sunset);
    ui.updateVisibility(weatherData.visibility);
    ui.updatePressure(weatherData.pressure);
    ui.updateWind(weatherData.windInfo);
  };

  const handleError = (err) => {
    const error = document.querySelector('.des');
    error.innerHTML = err;
  };

  const getData = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}&units=metric`, {
      mode: 'cors',
    })
      .then(res => res.json())
      .then(data => handleData(data))
      .catch(err => handleError(err));
  };

  return { getData };
};

export default getWeatherFactory;
