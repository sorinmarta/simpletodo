class Todo {
    constructor(wrap, heading, description) {
        this.wrap = wrap
        this.mainDiv()

        heading(heading)
        description(description)
    }

    mainDiv() {
        const mainDiv = new Component('div', null, 'todo', this.wrap)

        this.div = mainDiv
    }

    heading(heading) {
        const todoHeading = new Component('h2',null, 'todo-heading', this.div,{
            type: 'text',
            text: heading
        })
    }

    description(description){
        const todoDescription = new Component('p',null,'todo-description',this.div,{
            type: 'text',
            text: description
        })
    }
}