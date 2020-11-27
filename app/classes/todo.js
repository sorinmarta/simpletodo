class Todo {
    constructor(wrap, heading, description) {
        this.wrap = wrap
        // this.mainDiv()
        this.div = new Component('div', null, 'todo', this.wrap)

        this.utilisBtns()
        this.heading(heading)
        this.description(description)
    }

    mainDiv() {
        this.div = new Component('div', null, 'todo', this.wrap)
    }

    utilisBtns(){
        const utilisContainer = new Component('div', null , 'utilis-container', this.div)


        const deleteBtn = new Component('p',null,'delete-btn',utilisContainer,{
            type: 'text',
            text: 'delete'
        })

        const editBtn = new Component('p',null,'edit-btn',utilisContainer,{
            type: 'text',
            text: 'edit'
        })

        deleteBtn.addEventListener('click', () => {
            this.delete()
        })
    }

    heading(heading) {
        const todoHeading = new Component('h2', null, 'todo-heading', this.div, {
            type: 'text',
            text: heading
        })

        return todoHeading
    }

    description(description) {
        const todoDescription = new Component('p', null, 'todo-description', this.div, {
            type: 'text',
            text: description
        })

        return todoDescription
    }

    delete(){
        this.div.remove()
    }
}