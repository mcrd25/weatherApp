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

const formattedMinute = (minutes) => {
	return minutes < 10 ? `0${minutes}` : minutes;
}

export const getTimeString = (date) => {
	const hour = date.getHours();
	if (hour === 0) {
		return `12:${formattedMinute(date.getMinutes())}AM`;
	}
	else if (hour < 12) {
		return `${hour}:${formattedMinute(date.getMinutes())}AM`;
	} else {
		return `${(hour - 12) === 0 ? 12 : hour - 12 }:${formattedMinute(date.getMinutes())}PM`;
	}
}

export const dateTimeString = (date) => {
	return `${dayOfWeek(date)}, ${getMonth(date)} ${date.getDate()} ${getTimeString(date)}`;
}