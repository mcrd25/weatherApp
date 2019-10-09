import apiKey from './api_key';

const weatherFactory = (city) => {
  const getData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}&units=imperial`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => alert(err));
  };

  return { getData };
};

export default weatherFactory;
