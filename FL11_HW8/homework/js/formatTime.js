function formatTime (number) {
	let d = parseInt(number/1440);
	let h = parseInt((number - (d * 1440)) / 60);
	let m = number - (d * 1440) - (h * 60);
	return ( d + ' day(s)' + ' ' + h + ' hour(s)' + ' ' + m + ' minute(s)' );
}
formatTime(121);