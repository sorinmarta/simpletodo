class Form{
    constructor(inputs, formID = null){
        this.wrapperDiv()
        this.validateInputs(inputs)
        
        if (formID != null){
            this.formElement(formID)
        }else{
            this.formElement()
        }

        this.loopInputs(inputs)

        return this.wrapper
    }

    wrapperDiv() {
        this.wrapper = new Component('div',null,'form-wrap',)
    }

    formElement(formID = null) {
        this.form = new Component('form',formID,'form',this.wrapper)

        console.dir(this.form)
    }

    validateInputs(inputs){
        if (typeof inputs != 'object'){
            console.error('Form inputs are supposed to be handled as objects');

            return false
        }
    }

    loopInputs(inputs){
        for (const input of inputs){
            let element = new Component(input.element,input.id,input.className, this.form)
            const attribute = element.setAttribute('type',input.type)
            const name = element.setAttribute('name', input.name)
        }
    }
}

/**
 * TODO:
 * 
 * Add functionality for labels
 * Add functionality for placeholders
 * Add functionality for textareas
 */