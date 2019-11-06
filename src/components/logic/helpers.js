const getMonth = (date) => {
	return date.toLocaleString('default', {
		month: 'long'
	});
} 

const convertDateTime = (dateInUTC) => {
	new Date(dateInUTC * 1000);
	return date;
}