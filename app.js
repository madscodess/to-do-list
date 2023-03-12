// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault(); //stops the default behaviour from browser on form submit 
    //Next we’re retrieving a reference to the input element by using the querySelector
    //We’re storing that element reference in input
    let input = document.querySelector('input'); 
    //we are then able to access the input value by using input.value
    if (input.value != '')
        addTodo(input.value);
//reset the input value to an empty string.
input.value = '';
}

function addTodo(todo) {
    //This is the list element which is containing the output which is done for every todo element
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    //The output consists of the todo text, a check button and a delete button.
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <!--- <button name="checkButton"> <i class="fa-regular fa-square"></i> --->
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
   //new li element is added as a child to the ul element, so that it becomes visible in the browser
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

//retrieve a reference to the parent node (list item), 
//so that we’re able to apply a text decoration style of line-through to this todo.
function checkTodo(e) {
  //  let button = e.target.parentNode;
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
        item.style.backgroundColor = '#FFFFFF';
        //button.style.backgroundColor = 'none';
        console.log("huheeib");
    }
    else {
        item.style.textDecoration = 'line-through';
        item.style.backgroundColor = '#C59595';
    }
        }

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}