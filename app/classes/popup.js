class Popup{
    constructor(contentDiv) {
        const returnable = this.wrapperDiv()
        this.insideContainer()
        this.closingElement()
        this.outsideClose()
        this.contents(contentDiv)

        return returnable
    }

    wrapperDiv(){
        const mainContainer = document.querySelector('#containerDiv')
        this.wrapper = new Component('div','popup','popup',mainContainer);
    }

    insideContainer(){
        this.insideCont = new Component('div','popup-inside','popup-inside', this.wrapper)
    }

    contents(contentDiv){
        const addContent = this.insideCont.append(contentDiv)
    }

    close(){
        this.wrapper.parentNode.removeChild(this.wrapper)
    }
    selfClose(){
        const mainPopup = document.querySelector('.popup')
        mainPopup.parentNode.removeChild(mainPopup)
    }

    closingElement(){
        this.closingBtn = new Component('a','popup-close',null,this.insideCont,{
            type: 'text',
            text: 'X'
        })
        this.closingBtn.addEventListener('click', () => {
            this.selfClose()
        })
    }

    outsideClose(){
        const mainPopup = document.querySelector('.popup')
        window.onclick = (event) => {
            if (event.target == mainPopup) {
                this.selfClose()
            }
        }
    }
}