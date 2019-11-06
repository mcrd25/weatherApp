export const getMonth = (date) => {
	return date.toLocaleString('default', {
		month: 'long'
	});
} 

export const convertDateTime = (dateInUTC) => {
	new Date(dateInUTC * 1000);
	return date;
}

export const dayOfWeek = (date) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	return days[date.getDay()];
}