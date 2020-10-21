class Popup{
    constructor(contentDiv) {
        this.wrapperDiv()
        this.insideContainer()
        this.contents(contentDiv)

        return this.wrapperDiv()
    }

    wrapperDiv(){
        const mainContainer = document.querySelector('#containerDiv')
        const wrapper = new Component('div','popup','popup',mainContainer);
    }

    insideContainer(){
        const popup = document.querySelector('#popup')
        const insideCont = new Component('div','popup-inside','popup-inside', popup)
    }

    contents(contentDiv){
        const insideContainer = document.querySelector('#popup-inside')
        const addContent = insideContainer.append(contentDiv)
    }
}