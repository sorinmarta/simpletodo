class todoFormSubmission{
    constructor(container){
        this.assignGlobals(container)
        this.createNewTodo()
    }

    assignGlobals(container){
        this.container = container
        this.heading = document.querySelector('#todo-title').value
        this.description = document.querySelector('#todo-description').value
    }

    createNewTodo(){
        new Todo(this.container, this.heading, this.description);
    }
}