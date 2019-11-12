import apiKey from './api_key';
import weatherFactory from '../logic/weather_app';
import uiFactory from '../dom/main.dom';

const getWeatherFactory = () => {
  const handleData = (data) => {
    const ui = uiFactory();
    console.log(weatherFactory(data));
    const weatherData = weatherFactory(data);
    ui.updateLocation(weatherData.location);
    ui.changeImage(weatherData.theme);
    ui.updateDateTime(weatherData.date);
  };

  const handleError = (err) => {
    console.log(err);
  };

  const getData = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}&units=metric`, {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => handleData(data))
      .catch((err) => handleError(err));
  };

  return { getData };
};

export default getWeatherFactory;
