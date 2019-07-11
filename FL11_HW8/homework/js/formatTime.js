function formatTime (numberResult) {
	let d = parseInt(numberResult / 1440);
	let h = parseInt((numberResult - (d * 1440)) / 60);
	let m = numberResult - (d * 1440) - (h * 60);
	return ( d + ' day(s)' + ' ' + h + ' hour(s)' + ' ' + m + ' minute(s)' );
}
formatTime(121);