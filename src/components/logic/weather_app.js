import {
  convertDateTime
} from "./helpers";
const weatherFactory = ({ cod, dt, weather, name, sys, main, wind, visibility}) => {
  if (cod === 200) {
    const { temp, pressure, humidity, temp_min, temp_max } = main;
    // const temp = main.
    const location = `${name}, ${sys.country}`;
    const sunriseTime = convertDateTime(sys.sunrise);
    const sunsetTime = convertDateTime(sys.sunset);
    const date = convertDateTime(dt);
    const theme = weather[0].main;
    const description = weather[0].description;
    const weatherIcon = weather[0].icon;
    const windInfo = `speed: ${wind.speed} m/s  direction: ${wind.deg}`;
    
    return {
      location,
      temp,
      pressure,
      humidity,
      temp_max,
      temp_min,
      visibility,
      date,
      windInfo,
      theme,
      description,
      weatherIcon,
      windInfo
    };
  }
  
};

export default weatherFactory;
