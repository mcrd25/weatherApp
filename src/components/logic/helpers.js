export const getMonth = (date) => {
	return date.toLocaleString('default', {
		month: 'long'
	});
} 

export const convertDateTime = (dateInUTC) => {
	return new Date(dateInUTC * 1000);
}

export const dayOfWeek = (date) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	return days[date.getDay()];
}