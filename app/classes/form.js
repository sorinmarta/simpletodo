class Form{
    constructor(inputs, formID = null) {
        this.wrapperDiv()
        this.validateInputs(inputs)
        this.loopInputs(inputs)
        return this.wrapper
    }

    wrapperDiv() {
        this.wrapper = new Component('div',null,'form-wrap',)
    }

    formElement(formID = null) {
        this.form = new Component('form',formID,'form',this.wrapper)
    }

    validateInputs(inputs){
        if (typeof inputs != 'object'){
            console.error('Form inputs are supposed to be handled as objects');

            return false
        }
    }

    loopInputs(inputs){
        for (const input in inputs){
            let element = new Component(input.element,input.id,input.className, this.form)
            const attribute = element.setAttribute('type',element.type)
            const name = element.setAttribute('name', element.name)
        }
    }
}