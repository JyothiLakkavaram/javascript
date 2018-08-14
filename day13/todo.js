var addBtn = document.getElementsByTagName('button')[0];
var incompleteTask = document.getElementById('incompleteTask');
var addTaskInputField = document.getElementsByName('addtask')[0];
var del = document.getElementsByClassName("delete");
var ED = document.getElementsByClassName("edit");
var checkB = document.getElementsByClassName("check");


var incompleteList;

function addTask() {
    // create li , input checkbox ,input text , label ,edit button and delete button
    var taskItem = document.createElement('li');
    var checkBox = document.createElement('input');
    var inputTextEl = document.createElement('input');
    var showTaskEl = document.createElement('label');
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');
    var arr = [checkBox, inputTextEl, showTaskEl, editBtn, deleteBtn];

    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'check');

    inputTextEl.setAttribute('type', 'text');
    showTaskEl.innerText = addTaskInputField.value;
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('class', 'edit');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class', 'delete');

    // inputTextEl.style('display', 'none');

    arr.map(function (element) {
        taskItem.appendChild(element);
    })
    
    incompleteTask.appendChild(taskItem);

    incompleteList = document.getElementById('incompleteTask').childElementCount;
    var i;
    for (i = 0; i < ED.length; i++) {
        ED[i].onclick = edBtn;
    }
    for (i = 0; i < del.length; i++) {
        del[i].onclick = delBtn;
    }
     for (i = 0; i < checkB.length; i++) {
        if(checkB[i].checked == true) {
        var div = this.parentElement;
        div.style.display= "none";
    
        }
    }

}

addBtn.onclick = addTask;

del[0].onclick = delBtn;
ED[0].onclick = edBtn;

function delBtn() {

    var div = this.parentElement;
    div.style.display = "none";

}
function edBtn() {
        var div = this.parentElement;
    div.style.display= "none";

}var checkD  = checkB[0];
if(checkD.change == true) {
        var div = this.parentElement;
        div.style.display= "none";
    
        }