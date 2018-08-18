var inputTaskField = document.getElementById("tasklist"); //Add a new Task
var addBtn = document.getElementById("addbtn"); // addTask button
var incompleteTaskList = document.getElementById("incompleteTask"); //incompleteTask ul
var completeTaskList = document.getElementById("completeTask"); // completeTask ul

addBtn.addEventListener("click", addTaskItem); //Set the click handler to the addTask function.

//Adding a task
function addTaskItem() {
    // console.log("Entered");

    //creating Fields to add a Task
    let listItem = document.createElement("li");
    let checkboxField = document.createElement("input");
    let inputTextField = document.createElement("input");
    let labelField = document.createElement("label");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    // adding type attribute
    checkboxField.type = "checkbox";
    inputTextField.type = "text";

    //Text added in buttons
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    //setting attribute    
    checkboxField.setAttribute("class", "checkbox");
    inputTextField.setAttribute("class", "taskItem");
    editButton.setAttribute("class", "edit");
    deleteButton.setAttribute("class", "delete");


    //adding label field value
    labelField.innerText = inputTaskField.value;

    //appending listItem in incomplete list ul
    incompleteTaskList.appendChild(listItem);


    //Hiding input Text field 
    inputTextField.classList.add("nodisplay");

    // array of list of created Elements
    arr = [checkboxField, inputTextField, labelField, editButton, deleteButton];

    arr.map(function (element) {
        listItem.appendChild(element); //appending array elements to li using map function
    });

}


incompleteTaskList.addEventListener("click", working);

function working(e) {
    //console.log(e.target.nodeName);

    if (e.target.nodeName == "BUTTON") {
        //when edit button clicked
        if (e.target.classList.contains("edit")) {

            let labelField = e.target.previousSibling;
            let inputField = e.target.previousSibling.previousSibling;

            if (inputField.classList.contains("nodisplay")) {
                inputField.value = labelField.innerText;


            } else {

                labelField.innerText = inputField.value;
            }
            labelField.classList.toggle("nodisplay");
            inputField.classList.toggle("nodisplay");


        }
        //when delete Button clicked
        else if (e.target.classList.contains("delete")) {
            // console.log(e.target.parentNode);


            e.target.parentNode.classList.add("nodisplay");
        }
    } else if (e.target.nodeName == "INPUT")
        //checkbox field 
        if (e.target.classList.contains("checkbox")) {

            // console.log("checkbox")

            if (e.target.checked == true) {
                let completedTask = e.target.parentNode;

                completeTaskList.appendChild(completedTask);
                e.target.checked = false;
            }
        }

}

completeTaskList.addEventListener("click", recheck);

function recheck(e) {
    if (e.target.nodeName == "BUTTON") {
        //edit complete task
        if (e.target.classList.contains("edit")) {
            let labelElement = e.target.previousSibling;
            let inputElement = e.target.previousSibling.previousSibling;

            let containerClass = inputElement.classList.contains("nodisplay");

            if (containerClass) {
                inputElement.value = labelElement.innerText;
                labelElement.classList.add("nodisplay");
                inputElement.classList.remove("nodisplay");
            } else {
                labelElement.innerText = inputElement.value;
                labelElement.classList.remove("nodisplay");
                inputElement.classList.add("nodisplay");
            }


        } else {//delete Task
            e.target.parentElement.classList.add("nodisplay");
        }

    } else//checkbox
    if (e.target.nodeName == "INPUT") {

        if (e.target.classList.contains("checkbox")) {

            if (e.target.checked == true) {
                let incompletedTask = e.target.parentNode;

                incompleteTaskList.appendChild(incompletedTask);
                e.target.checked = false;
            }

        }

    }
}
