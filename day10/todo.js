var addBtn = document.getElementsByTagName('button')[0];
var incompleteTask = document.getElementById('incompleteTask');
var completeTask = document.getElementById('completeTask');
function addTask(){
	// create li , input checkbox ,input text , label ,edit button and delete button
	var taskItem = document.createElement('li');
	var checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
	var inputTextEl = document.createElement('input');
    inputTextEl.setAttribute('type','text');
	var showTaskEl = document.createElement('label');
	var editBtn = document.createElement('button');
    editBtn.setAttribute('class','edit');
    editBtn.innerHTML = 'Edit';
	var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','delete');
    deleteBtn.innerHTML = 'Delete';
	var arr = [checkBox,inputTextEl,showTaskEl,editBtn, deleteBtn]
	checkBox.setAttribute('type','checkbox');
	arr.map(function(element){
		taskItem.appendChild(element);	
	})
	
    
    incompleteTask.appendChild(taskItem);
	

}
var del = document.getElementsByClassName('delete');
function delTask() {
    
    
    
}
addBtn.onclick = addTask;
