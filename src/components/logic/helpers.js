const getMonth = (date) => {
	return date.toLocaleString('default', {
		month: 'long'
	});
} 

export const convertDateTime = (dateInUTC, timezone) => {
	const jsTimeStamp = dateInUTC * 1000;
	const date = new Date(jsTimeStamp);
	const osOffset = date.getTimezoneOffset();
	const cityTimeStamp = jsTimeStamp - ((timezone - osOffset / 60)*60 * 60 * 1000);
	return new Date(cityTimeStamp);;
}

const dayOfWeek = (date) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	return days[date.getDay()];
}

export const getTimeString = (date) => {
	const hour = date.getHours();
	if (hour === 0) {
		return `12:${date.getMinutes()}AM`;
	}
	else if (hour < 12) {
		return `${hour}:${date.getMinutes()}AM`;
	} else {
		return `${hour - 12 }:${date.getMinutes()}PM`;
	}
}

export const dateTimeString = (date) => {
	return `${dayOfWeek(date)}, ${getMonth(date)} ${date.getDate()} ${getTimeString(date)}`;
}