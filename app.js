let newTask = document.getElementById("tasks");
let input = document.getElementById("taskInput");
const addBtn = document.querySelector("#push")
let out1 = document.getElementById('output1');

console.log(input.value);

function output() {
    out1.innerHTML += input.value;
    out1.innerHTML + newTask;
    console.log("button clicked");
}

addBtn.addEventListener("click", output);
