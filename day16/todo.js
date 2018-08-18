var addTask = document.getElementsByName('addtask')[0]; //Input Field
var addBtn = document.getElementsByTagName('button')[0]; //Add Button
var incompleteTaskHolder = document.getElementById('incompleteTask');
var completeTaskHolder = document.getElementById('completeTask');

var createTaskElement = function(taskInput){
    
}

addBtn.onclick = function() {
    
   var task = createTaskElement(addTask.value); 
    console.log(task);
}