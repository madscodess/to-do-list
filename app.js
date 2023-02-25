let newTask = document.getElementById("tasks");
let input = document.getElementById("taskInput");
const addBtn = document.querySelector("#push")
let out1 = document.getElementById('output1');

console.log(input.value);

// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#taskInput input').value.length == 0){
//         alert("Please Enter a Task")
//     }

function output() {
    document.querySelector('#tasks').innerHTML += 
    `<div id="tasks"> 
        <div id = "imgs-container">
            <img id="square" src="/images/square.png">
            <img id="tick" src="/images/right.png">
            ${input.value}
            </p>
            <img id="delete" src="/images/cancel.png">
        </div>
        </div>
        `;
    
//     out1.append(
//         '<div><input type="text" name="text[]"/><a href="#" class="delete">delete</a></div>'); //adding new input field
//     console.log("button clicked");
 }

addBtn.addEventListener("click", output);
