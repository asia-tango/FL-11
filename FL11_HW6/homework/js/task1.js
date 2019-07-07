const two = 2;

let a1 = parseFloat( prompt( 'Enter the coordinate point a1', '' )); 
let a2 = parseFloat( prompt( 'Enter the coordinate point a2', '' ));  
let b1 = parseFloat( prompt( 'Enter the coordinate point b1', '' ));  
let b2 = parseFloat( prompt( 'Enter the coordinate point b2', '' ));  
let c1 = parseFloat(prompt( 'Enter the coordinate point c1', '' ));  
let c2 = parseFloat(prompt( 'Enter the coordinate point c2', '' )); 

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
	console.log( 'Error! Please enter correct coordinates.' );
} else if ( a1===b1 || a1===c1 || a2===b2 || a2===c2 ) {
	console.log( false );
} else { 
	let x = ( a1 + b1 ) / two;
	let y = ( a2 + b2 ) / two;
	console.log( x===c1 && y===c2 );
}