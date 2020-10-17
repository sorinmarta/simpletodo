class Component {
    constructor(element, id = null, className = null, appendTo = null){
        // Construct the element
    }

    createElement(element){
        this.element = document.createElement(element)
    }

    addClass(className){
        this.element.classList.add(className);
    }

    addID(id){
        this.element.setAttribute('id',id)
    }

    appendTo(appendTo){
        this.element
    }

}