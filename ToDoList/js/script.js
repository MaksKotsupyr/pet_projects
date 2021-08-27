let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');
let todoList =[];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages()
}

addButton.addEventListener('click', () => {
    if(!addMessage.value) return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
})

function displayMessages() {
    let displayMessage = '';
    if(todoList.length === 0) todo.innerHTML = '';
    todoList.forEach((item, index) => {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
            <label for='item_${index}' class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    })
}

todo.addEventListener('change', (event) => {
    let idInput = event.target.getAttribute('id');
    let valueLabel = todo.querySelector('[for='+ idInput +']').innerHTML;
    todoList.forEach((item) => {
        if(item.todo === valueLabel){
            item.checked = !item.checked
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})

todo.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    todoList.forEach((item, index) => {
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey || event.metaKey){
               todoList.splice(index, 1);
            }else{
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});