const two = 2;

let a1 = prompt('Enter the coordinate point a1', ''); 
let a2 = prompt('Enter the coordinate point a2', '');  
let b1 = prompt('Enter the coordinate point b1', '');  
let b2 = prompt('Enter the coordinate point b2', '');  
let c1 = prompt('Enter the coordinate point c1', '');  
let c2 = prompt('Enter the coordinate point c2', ''); 

a1 = parseFloat(a1);
a2 = parseFloat(a2);
b1 = parseFloat(b1);
b2 = parseFloat(b2);
c1 = parseFloat(c1);
c2 = parseFloat(c2);

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
	console.log('Error! Please enter correct coordinates.');
} else { 
	let cx = (a1 + b1) / two;
	let cy = (a2 + b2) / two;

	if (cx===c1 && cy===c2) { 
		console.log('true');
	} else { 
		console.log('false');
	}
}