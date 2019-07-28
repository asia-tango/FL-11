let leftBorderColor = ['#54adf7', '#312647', 'orange', '#f06291', '#4bdbba'];

let counter = 0;

function todo() {
    let liID;
    let val = document.getElementById('addMore').value;

    function clear() {
        document.getElementById('addMore').value = '';
    }

    window.location.hash = '';
    if (window.location.hash === '') {
        
        if (val !== '' && val !== null && val.trim() !== '') {

            let li = document.createElement('li');
            let del = document.createElement('span');
            let edit = document.createElement('span');
            let update = document.createElement('span');

            li.id = 'li' + counter;
            del.id = 'del' + counter;
            edit.id = 'edit' + counter;
            update.id = 'update' + counter;

            del.style.float = 'right';
            update.style.float = 'right';
            edit.style.float = 'right';
            counter++;

            if (counter > 0) {
                document.getElementById('content').style.display = 'block';
            }

            edit.innerHTML = `<i class='fa fa-edit' id=${edit.id}></i>`;
            del.innerHTML = `<i class='fa fa-close' id=${del.id}></i>`;
            edit.style.color = '#4bdbba';
            del.style.color = '#4bdbba';
            edit.style.marginRight = '10px';
            del.style.marginRight = '0px';
            li.style.borderLeft = `3px solid ${leftBorderColor[Math.floor(leftBorderColor.length * Math.random())]}`;
            li.style.marginTop = '10px';
            li.innerHTML = val;
            window.location.hash = '/add';
            //add
            if (window.location.hash === '#/add') {
                document.getElementById('content').appendChild(li);
                li.appendChild(del);
                li.appendChild(edit);
                
                clear();
            }
            //delete,edit,update
            document.addEventListener('click', function (e) {
                //delete
                if (e.target.id === del.id) {

                    liID = document.getElementById(li.id);
                    liID.parentElement.removeChild(liID); // delete task

                    if (document.getElementById('addBtn').disabled === true) {
                        document.getElementById('addBtn').disabled = false;
                        document.getElementById('addBtn').style.background = '#4bdbba';
                    }
                    if (counter > 0) {
                        counter = counter - 1;
                    }
                } else if (e.target.id === edit.id) {
                    window.location.hash = '/edit';
                    if(e.target.id === edit.id && window.location.hash === '#/edit') {
                        let editId = li.id;
                        update.innerHTML = `<i class='fa fa-save' id=${update.id}></i>`;
                        update.style.color = '#4bdbba';
                        update.style.marginRight = '10px';
                        li.appendChild(update);
                        document.getElementById('addBtn').disabled = true;
                        document.getElementById('addBtn').style.background = '#efefef';
                        document.getElementById('addBtn').style.color = '#ccc';
                    
                        document.getElementById('addMore').value = document.getElementById(editId).innerText;
                    }
                } else if (e.target.id === update.id) {

                    let updateId = li.id;
                    let updatedValue = document.getElementById('addMore').value;
                    if (updatedValue === document.getElementById(updateId).innerText
                        || updatedValue !== document.getElementById(updateId).innerText) {
                        if (updatedValue !== '') {
                            document.getElementById(updateId).innerText = updatedValue;
                            window.location.hash = '';
                            clear();
                        } else {

                            return;
                        }

                        li.appendChild(del);
                        li.appendChild(edit);
                        if (document.getElementById('addBtn').disabled === true) {
                            document.getElementById('addBtn').disabled = false;
                            document.getElementById('addBtn').style.background = '#4bdbba';
                            document.getElementById('addBtn').style.color = '#fff';
                        }
                    }
                }
            })
        } else {
            return;
        }
    }
}