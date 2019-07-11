function getMin() {
	let minNumber = [];
	let i = 0;
	minNumber = arguments[0];
	do{
		minNumber = arguments[i];
		i++;
	} while (arguments[i] < arguments.length)	
	return minNumber;
}
getMin(1, 2, 3, -5, -100);