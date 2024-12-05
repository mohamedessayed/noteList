var notesList = [];
var selectedNote = -1;

var titleInput = document.getElementById('exampleInputTitle');
var contentInput = document.getElementById('exampleFormControlTextareaConetnt');
var tableView = document.getElementById('tableView');
var mainBtnApp = document.getElementById('mainBtnApp');

if (localStorage.getItem('listOfNotes')) {
    notesList = JSON.parse(localStorage.getItem('listOfNotes'));
    readNotesList();
}

function btnApp() {
    if (mainBtnApp.innerText === 'save') {
        createNewNote();
    }else{
        updateNoteInList();
    }
}

function createNewNote(){
    // var titleValue = titleInput.value;
    // var contentValue = contentInput.value;
    //generate object
    var noteObject = {
        title:titleInput.value,
        note:contentInput.value,
    }
    //push object into array
    notesList.push(noteObject);
    
    localStorage.setItem('listOfNotes', JSON.stringify(notesList));
    //invoke read function
    readNotesList();

    //clear form
    clearForm();
}

function readNotesList(){
    var htmlCollection =``;
    var index = 0;
    for (var note of notesList) {
        htmlCollection += `<tr>
            <th scope="row">${index}</th>
            <td>${note.title}</td>
            <td>
                <button onclick="deleteNoteFromList(${index})" class="btn btn-danger" type="button">Delete</button>
                <button onclick="editNoteFromList(${index})" class="btn btn-warning" type="button">Edit</button>
            </td>
          </tr>`;
          index++;
    }
    tableView.innerHTML = htmlCollection;
}

function deleteNoteFromList(index){
    notesList.splice(index,1);

    localStorage.setItem('listOfNotes', JSON.stringify(notesList));

    readNotesList();
}

function clearForm() {
    
    titleInput.value = '';
    contentInput.value = '';
}

function editNoteFromList(index){
    var selectedNoteObject = notesList[index];
    
    titleInput.value = selectedNoteObject.title;
    contentInput.value = selectedNoteObject.note;
    
    //change form button text to 'update'

    mainBtnApp.innerText = 'update';

    //detection for which index will be update by assign the selected index to global variable

    selectedNote = index;
}

function updateNoteInList() {
    var noteObject = {
        title:titleInput.value,
        note:contentInput.value,
    }

    // notesList[selectedNote] = noteObject;

    notesList.splice(selectedNote,1,noteObject);
    localStorage.setItem('listOfNotes', JSON.stringify(notesList));

    readNotesList();

    clearForm();

    //change form button text to 'save'

    mainBtnApp.innerText = 'save';
    
}