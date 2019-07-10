let minNumber = [];
let i = 0;
function getMin() {
	minNumber = arguments[0];
	do{
		minNumber = arguments[i];
		i++;
	} while (arguments[i]<arguments.length)	

	return minNumber;
}
console.log(getMin(1, 2, 3, -5, -100));