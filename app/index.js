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

// Initial todo
const firstTodo = new Todo(todosWrapper,'This is my first todo','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum lacinia enim sit amet gravida. Nam scelerisque nisl orci, dignissim maximus libero cursus dictum. Nam dapibus, purus ac aliquet accumsan, nunc ligula egestas lorem, eu imperdiet ex massa at elit. Aliquam malesuada ipsum in eros lacinia mattis. Morbi ullamcorper suscipit purus vitae congue. Duis in blandit quam. Nulla nec ligula nec dui malesuada imperdiet at et risus. Vestibulum consectetur, arcu quis consectetur efficitur, mauris odio ultricies justo, ornare ornare massa felis at quam. Sed lobortis est augue, quis posuere metus imperdiet a. Aliquam accumsan condimentum diam nec bibendum. Vestibulum rutrum eros vel mauris bibendum pellentesque. Integer vitae orci non dui dapibus imperdiet eget vitae elit. Morbi tincidunt rutrum metus sed accumsan. Proin dapibus sem eu dui fringilla mollis.')

// Event listener for Add new button
todoBtn.addEventListener('click', () => {
    const formInputs = [{
        element: 'input',
        type: 'text',
        name: 'title',
        id: 'todo-title',
        className: 'todo-input',
        label: 'Title',
        placeholder: 'Do this today'
    },{
        element: 'textarea',
        type: 'textarea',
        name: 'description',
        id: 'todo-description',
        className: 'todo-input',
        label: 'Description',
        placeholder: 'We got to do this today because we have to'
    },{
        element: 'input',
        type: 'submit',
        name: 'todo-submit',
        id: 'todo-submit',
        className: 'btn',
        value: 'Add New'
    }]

    const addNewForm = new Form(formInputs, 'add-todo-form')
    const addNewPopup = new Popup(addNewForm);
});

const addNewFormSubmit = document.querySelector('#todo-submit')
addNewFormSubmit.addEventListener('click', new todoFormSubmission)
/**
 * TODO:
 * 
 * Add the form handling class where it should add a new todo to the DOM
 */