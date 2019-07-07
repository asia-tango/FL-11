const two = 2;

let a = parseFloat( prompt( 'Enter the coordinate point a:', '' ) ); 
let b = parseFloat( prompt( 'Enter the coordinate point b:', '' ) ); 
let c = parseFloat( prompt( 'Enter the coordinate point c:', '' ) );  

let x = a + b;
let y = a + c;
let z = b + c;

if ( isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0 || x<=c || y<=b || z<=a ) {
	console.log( 'Triangle doesn’t exist.' );
} else if ( a===b && b===c && a===c ) {
	console.log( 'Equivalent triangle.' );
} else if ( a===b || b===c || a===c ) {
	console.log( 'Isosceles triangle.' );
} else {
	console.log( 'Normal triangle.' );
}
