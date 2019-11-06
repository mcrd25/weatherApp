import {
  convertDateTime, dateTimeString, getTimeString
} from "./helpers";
const weatherFactory = ({ cod, dt, weather, name, sys, main, wind, visibility, timezone}) => {
  if (cod === 200) {
    const { temp, pressure, humidity, temp_min, temp_max } = main;
    // const temp = main.
    const location = `${name}, ${sys.country}`;
    const sunriseTimeJS = convertDateTime(sys.sunrise);
    const sunsetTimeJS = convertDateTime(sys.sunset);
    const sunrise = getTimeString(sunriseTimeJS);
    const sunset = getTimeString(sunsetTimeJS);
    const jsDate = convertDateTime(dt);
    const date = dateTimeString(jsDate);
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
      jsDate,
      sunrise,
      sunset,
      windInfo,
      theme,
      description,
      weatherIcon,
      windInfo
    };
  }
  
};

export default weatherFactory;
