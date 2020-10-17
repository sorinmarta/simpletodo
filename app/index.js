// The main app selector
const appContainer = document.querySelector('#app');

// The container div
const containerDiv = document.createElement('div')
containerDiv.classList.add('container')
appContainer.append(containerDiv);

// New button
const addTodoButton = document.createElement('button');
addTodoButton.classList.add('add-new-todo-btn');
addTodoButton.innerHTML = 'New todo';
containerDiv.append(addTodoButton);