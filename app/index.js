// The main app selector
const appContainer = document.querySelector('#app');

// The container div
const containerDiv = new Component('div','containerDiv','container',appContainer);

// The Add new button
const todoBtn = new Button('button','new-todo','add-new-todo-btn', containerDiv,{
    type: 'text',
    text: 'Add new Todo'
})

// Wraper div for todos
const todosWrapper = new Component('div','todo-wrap','todo-wrap', containerDiv)

