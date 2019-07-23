let rootNode = document.getElementById('root');
const TEN = 10;
let count = 0;

function newElement() {
	if (count < TEN) {
		let li = document.createElement('li');
		let inputValue = document.getElementById('toDoEl').value;
		if(inputValue === '' || inputValue === null) {
			alert('Enter your action!');
		} else {
			li.innerHTML = `
				<div class = 'flex-wrap'>
					<div class='action'>
						<input type='checkbox' id='check'>
						${inputValue}
						<i class='material-icons input-box edit-btn'>edit</i>
					</div>
					<i class='material-icons input-box remove-btn'>delete</i>
				</div>`;
			let ul = document.getElementById('list');
			ul.appendChild(li);
			document.getElementById('toDoEl').value = '';
		}
		events(li);
		count+=1;
	} else {
		let header = document.getElementById('main-header');
		header.innerHTML = `<h3>Maximum item per list are created</h3>`;
	}
}
	function events(li) {
		let removeButton = li.querySelector('.remove-btn');
		removeButton.addEventListener('click', deleteTask);
	}
	function deleteTask() {
		this.parentNode.remove();
		count-=1;
	}