let newTask = document.getElementById("tasks");
let input = document.getElementById("taskInput");
const addBtn = document.querySelector("#push")
let out1 = document.getElementById('output1');

let deleteItem = document.getElementById('delete');

console.log(input.value);

//add new task
function output() {
    document.querySelector('#tasks').innerHTML += 
    `<div id="tasks"> 
        <div id = "imgs-container">
            <img id="square" src="/images/square.png">
            <img id="tick" src="/images/right.png">
            ${input.value}
            </p>
            <img id="deleteItem" src="/images/cancel.png">
        </div>
        </div>
        `;
 }

 //delete task
deleteItem.addEventListener("click", function deleteTask() {
    console.log("hello there delete task")
} )




addBtn.addEventListener("click", output);
//
