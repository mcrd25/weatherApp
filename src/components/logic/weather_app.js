import {
  convertDateTime
} from "./helpers";
const weatherFactory = ({ cod, dt, weather, name, sys, main, wind, visibility}) => {
  if (cod === 200) {
    const { currentTemp, pressure, humidity, min_temp, max_temp } = main;
    const location = `${name}, ${sys.country}`;
    const sunriseTime = convertDateTime(sys.sunrise);
    const sunsetTime = convertDateTime(sys.sunset);
    const date = convertDateTime(dt);
    const theme = weather.main;
    const description = weather.description;
    const weatherIcon = weather.icon;
    const windInfo = `speed: ${wind.speed} m/s  direction: ${wind.deg}`;
    
  }
  return {
    location,
    currentTemp,
    pressure,
    humidity,
    max_temp,
    min_temp,
    visibility,
    date,
    windInfo,
    theme,
    description,
    weatherIcon,
    windInfo
  };
};

export default weatherFactory;
