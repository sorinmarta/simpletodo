class Component {
    constructor(element, id = null, className = null, appendTo = null, content = null) {
        this.createElement(element)

        if (id != null){
            this.addID(id)
        }

        if (className != null){
            this.addClass(className)
        }

        if (content != null){
            this.addContent(content)
        }

        if (appendTo != null){
            this.appendToElement(appendTo)
        }

        return this.element
    }

    createElement(element){
        this.element = document.createElement(element)
    }

    addID(id){
        this.element.setAttribute('id',id)
    }

    addClass(className){
        this.element.classList.add(className);
    }

    appendToElement(appendTo){
        appendTo.append(this.element)
    }

    addContent(content){
        if (typeof content != 'object'){
            console.error('The Component content must be an object')
        }

        if (content.type === 'html'){
            this.element.innerHTML = content.html
        } else if (content.type == 'text'){
            this.element.innerText = content.text
        }else{
            console.error('Content type must be either HTML or text')
        }
    }
}