const minEmailLength = 6;
const minPassLength = 5;
const user = 'user@gmail.com';
const admin = 'admin@gmail.com';
let userEmail = prompt( 'Enter your email:', '' ); 

if ( userEmail === '' || userEmail === null ) {
	alert( 'Canceled.' );
} else if ( userEmail.length < minEmailLength ) {
	alert( 'I don\'t know any emails having name length less than 6 symbols.' );
} else if ( userEmail === user ) {
	let passUser = prompt( 'Enter your password:', '' ); 
	if (passUser === 'UserPass') {
		let changeUserPass = confirm( 'Do you want to change your password?' );
		if (changeUserPass) {
			let passUserOld = prompt( 'Enter your old password:', '' ); 
			if (passUserOld === passUser) {
				let passUserNew = prompt( 'Enter your new password:', '' );
				if (passUserNew.length < minPassLength) {
					alert( 'It\'s too short password. Sorry.' );
				} else {
					let passUserNewAgain = prompt( 'Enter your new password again:', '' );
					if (passUserNewAgain === passUserNew) {
						alert( 'You have successfully changed your password.' );
					} else {
						alert( 'You wrote the wrong password.' );
					}
				}
			} 
		} else {
			alert( 'You have failed the change.' );
		}
	} else if ( passUser === '' || passUser === null ) {
		alert( 'Canceled!' );
	} else {
		alert( 'Wrong password.' );
	}
} else if ( userEmail === admin ) {
	let passAdmin = prompt( 'Enter your password:', '' );
	if (passAdmin === 'AdminPass') {
		let changeAdminPass = confirm( 'Do you want to change your password?' );
		if (changeAdminPass) {
			let passAdminOld = prompt( 'Enter your old password:', '' ); 
			if (passAdminOld === passAdmin) {
				let passAdminNew = prompt( 'Enter your new password:', '' );
				if (passAdminNew.length < minPassLength) {
					alert( 'It\'s too short password. Sorry.' );
				} else {
					let passAdminNewAgain = prompt( 'Enter your new password again:', '' );
					if (passAdminNewAgain === passAdminNew) {
						alert( 'You have successfully changed your password.' );
					} else {
						alert( 'You wrote the wrong password.' );
					}
				}
			} 
		} else {
			alert( 'You have failed the change.' );
		}
	} else if ( passAdmin === '' || passAdmin === null ) {
		alert( 'Canceled!' );
	} else {
		alert( 'Wrong password.' );
	}
} else {
	alert( 'I don’t know you.' );
}