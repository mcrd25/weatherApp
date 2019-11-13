const getMonth = date => date.toLocaleString('default', {
  month: 'long',
});

export const convertDateTime = (dateInUTC, timezone) => {
  const jsTimeStamp = dateInUTC * 1000;
  const date = new Date(jsTimeStamp);
  const osOffset = date.getTimezoneOffset();
  const cityTimeStamp = jsTimeStamp - ((timezone - (osOffset * 60)) * 1000);
  return new Date(cityTimeStamp);
};

const dayOfWeek = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

const formattedMinute = minutes => (minutes < 10 ? `0${minutes}` : minutes);

export const getTimeString = (date) => {
  const hour = date.getHours();
  if (hour === 0) {
    return `12:${formattedMinute(date.getMinutes())}AM`;
  }
  if (hour < 12) {
    return `${hour}:${formattedMinute(date.getMinutes())}AM`;
  }
  return `${(hour - 12) === 0 ? 12 : hour - 12}:${formattedMinute(date.getMinutes())}PM`;
};

export const dateTimeString = date => `${dayOfWeek(date)}, ${getMonth(date)} ${date.getDate()} ${getTimeString(date)}`;

export const convertCelToFar = temp => ((temp * (9 / 5)) + 32).toFixed(2);

export const convertFarToCel = temp => ((temp - 32) * (5 / 9)).toFixed(2);
