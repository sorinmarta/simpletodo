class App{
    constructor(){
        this.initialLayout()
        this.addTodoBtn();
    }

    initialLayout(){
        // The main app selector
        this.appContainer = document.querySelector('#app');

        // The container div
        this.containerDiv = new Component('div','containerDiv','container',this.appContainer);

        // The Add new button
        this.todoBtn = new Button('button','new-todo','add-new-todo-btn', this.containerDiv,{
            type: 'text',
            text: 'Add new Todo'
        })

        // Wraper div for todos
        this.todosWrapper = new Component('div','todo-wrap','todo-wrap', this.containerDiv)
    }

    addTodoBtn(){
        // Event listener for Add new button
        this.todoBtn.addEventListener('click', () => {
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

            const addNewFormSubmit = document.querySelector('#todo-submit')
            addNewFormSubmit.addEventListener('click', function (e) {
                e.preventDefault();
                new todoFormSubmission(this.todosWrapper)
                addNewPopup.close()
            })
        });
    }
}

new App()