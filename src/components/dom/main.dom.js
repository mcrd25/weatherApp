const uiFactory = () => {
  const updateLocation = (locationText) => {
    const location = document.querySelector('.loc-info');
    location.innerHTML = ` ${locationText}`;
  };

  const changeImage = (theme) => {
    const image = document.querySelector('.card-img');
    image.src = `https://source.unsplash.com/1600x900/?${theme.split(' ').join('+')}`;
  };

  const updateDateTime = (date) => {
    const dateTime = document.querySelector('.date');
    dateTime.innerHTML = date;
  };

  const updateIcon = (iconId) => {
    const icon = document.querySelector('.wicon');
    icon.src = `http://openweathermap.org/img/w/${iconId}.png`;
  };

  const updateTemp = (value) => {
    const temp = document.querySelector('.value');
    temp.innerHTML = value;
  };

  const activeTempToggle = (first, second) => {
    second.classList.remove('active');
    first.classList.add('active');
  };

  const updateDescription = (description) => {
    const des = document.querySelector('.des');
    des.innerHTML = description;
  };

  const updateHumidity = (humidity) => {
    const hum = document.querySelector('.hum');
    hum.innerHTML = `Humidity: ${humidity}%`;
  };

  const updateMax = (temp) => {
    const max = document.querySelector('.max');
    max.innerHTML = `Max Temperature: ${temp} &#8451;`;
  };

  const updateMin = (temp) => {
    const min = document.querySelector('.min');
    min.innerHTML = `Min Temperature: ${temp} &#8451;`;
  };

  const updateSunrise = (time) => {
    const sunrise = document.querySelector('.sunrise');
    sunrise.innerHTML = `Sunsrise: ${time}`;
  };

  const updateSunset = (time) => {
    const sunset = document.querySelector('.sunset');
    sunset.innerHTML = `Sunset: ${time}`;
  };

  const updateVisibility = (value) => {
    const vis = document.querySelector('.vis');
    vis.innerHTML = `Visibility: ${value} m`;
  };

  const updatePressure = (value) => {
    const pressure = document.querySelector('.pressure');
    pressure.innerHTML = `Pressure: ${value} hPa`;
  };

  const updateWind = (string) => {
    const wind = document.querySelector('.wind');
    wind.innerHTML = `Wind: ${string}`;
  };

  return {
    updateLocation,
    changeImage,
    updateDateTime,
    updateIcon,
    updateTemp,
    activeTempToggle,
    updateDescription,
    updateHumidity,
    updateMax,
    updateMin,
    updateSunrise,
    updateSunset,
    updateVisibility,
    updatePressure,
    updateWind,
  };
};

export default uiFactory;
