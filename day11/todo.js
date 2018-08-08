var addBtn = document.getElementsByTagName('button')[0];
var incompleteTask = document.getElementById('incompleteTask');
var addTaskInputField = document.getElementsByName('addtask')[0];
function addTask(){
	// create li , input checkbox ,input text , label ,edit button and delete button
	var taskItem = document.createElement('li');
	var checkBox = document.createElement('input');
	var inputTextEl = document.createElement('input');
	var showTaskEl = document.createElement('label');
	var editBtn = document.createElement('button');
	var deleteBtn = document.createElement('button');
	var arr = [checkBox,inputTextEl,showTaskEl,editBtn, deleteBtn]
	
	checkBox.setAttribute('type','checkbox');
	inputTextEl.setAttribute('type','text');
	showTaskEl.innerText = addTaskInputField.value;
	editBtn.innerText = 'Edit';
    editBtn.setAttribute('class','edit');
	deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class','delete');

    
	arr.map(function(element){
		taskItem.appendChild(element);	
	})
	incompleteTask.appendChild(taskItem);
}
addBtn.onclick = addTask;

    
    
var edBtn  = document.getE 