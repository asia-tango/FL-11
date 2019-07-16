//----------------------------- Task 0
function getNumbers(string) {
	let a = string.split('');
	let b = [];
	for (let i = 0; i < a.length; i++) {
		let k = Number(a[i]);
		
		if (Number.isInteger(k)) {
			b.push(k);
		} 
	} 
	return b;
}
//getNumbers('1a2s3d');

//----------------------------- Task 1
function findTypes() {
	let objectOutput = {};
	let arg = [...arguments];
	for (let i = 0; i < arg.length; i++) {
		if (typeof arg[i] in objectOutput) {
			objectOutput[typeof arg[i]]++;
		} else {
			objectOutput[typeof arg[i]] = 1;
		}
	}
	return objectOutput;
}
//findTypes(100, true, 'str', false, null);

//----------------------------- Task 2
function executeforEach(param1, param2) {
	for (let i = 0; i < param1.length; i++) {
		param2(param1[i]);
	}
}
//executeforEach([1, 2, 3], function(el) { console.log(el) });

//----------------------------- Task 3
function mapArray(param1, param2) {
	let outArray = [];
	executeforEach(param1, el => outArray.push(param2(el)));
	return outArray;
}
//mapArray([2, 5, 8], function(el) { return el + 3 });

//----------------------------- Task 4
function filterArray(param1, param2){
	let arrayOutput = [];
	let arrayFilter = [];
	executeforEach(param1, el => arrayOutput.push(param2(el)));
	for(let i = 0; i < arrayOutput.length; i++) {
		if (arrayOutput[i]) {
			arrayFilter.push(param1[i]);
		}
	}
	return arrayFilter;
}
//filterArray([2, 5, 8], function(el) { return el > 3 });

//----------------------------- Task 5
function showFormattedDate(date) {
	let options = { month: 'short', day: 'numeric' , year: 'numeric' };
	console.log('Date: ' + date.toLocaleDateString('en-US', options).replace(/,/, ''));
}
//showFormattedDate(new Date('2019-01-27T01:10:00')); 

//----------------------------- Task 6
function canConvertToDate(dateInput) {
	let date = Date.parse(dateInput);
	return !Number.isNaN(date);
}
//canConvertToDate('2016-03-18T00:00:00');

//----------------------------- Task 7
function daysBetween(dateStart, dateEnd) {
	const DAY_CONVERTER = 86400000;
	let days = Math.ceil(Math.abs(dateStart.getTime() - dateEnd.getTime()) / DAY_CONVERTER);
	return days;
}
//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))

//----------------------------- Task 8
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

function getAmountOfAdultPeople(data) {
	const ADULT_PEOPLE = 18;
	let adultPerson = [];
	const YEAR = 365;
	for (let i = 0; i < data.length; i++) {
		let agePerson = Math.floor(daysBetween(new Date(data[i].birthday), new Date()) / YEAR); 
		adultPerson.push(agePerson);
		}
	let filter = filterArray(adultPerson, function(el) { 
		return el >= ADULT_PEOPLE; 
	});
	return filter.length;
}
//getAmountOfAdultPeople(data); 

//----------------------------- Task 9
function keys(inputObject) {
	let keysArray = [];
	let i = 0;
	for (let name in inputObject) {
		if (inputObject.hasOwnProperty(name)) {
			keysArray[i] = name;
			i++;
		}
	}
	return keysArray;
}
//keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//----------------------------- Task 10
function values(inputObject) {
	let valuesArray = [];
	let i = 0;
	for (let name in inputObject) {
		if (inputObject.hasOwnProperty(name)) {
			valuesArray[i] = inputObject[name];
			i++;
		}
	}
	return valuesArray;
}
//values({keyOne: 1, keyTwo: 2, keyThree: 3});