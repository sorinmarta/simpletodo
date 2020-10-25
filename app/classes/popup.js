class Popup{
    constructor(contentDiv) {
        const returnable = this.wrapperDiv()
        this.insideContainer()
        this.contents(contentDiv)

        return returnable
    }

    wrapperDiv(){
        const mainContainer = document.querySelector('#containerDiv')
        const wrapper = new Component('div','popup','popup',mainContainer);
        this.mainWrapper = wrapper
    }

    insideContainer(){
        const popup = document.querySelector('#popup')
        const insideCont = new Component('div','popup-inside','popup-inside', popup)
    }

    contents(contentDiv){
        const insideContainer = document.querySelector('#popup-inside')
        const addContent = insideContainer.append(contentDiv)
    }

    close(){
        this.mainWrapper.parentNode.removeChild(this.mainWrapper)
    }
}

/**
 * TODO:
 * 
 * Add closing button
 * Add the functionality of closing the popup when clicking outside of it
 */