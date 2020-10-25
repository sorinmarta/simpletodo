class Form{
    constructor(inputs, formID = null, formSubmission){
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
    }

    validateInputs(inputs){
        if (typeof inputs != 'object'){
            console.error('Form inputs are supposed to be handled as objects');

            return false
        }
    }

    loopInputs(inputs){
        for (const input of inputs){
            if(input.label){
                let label = new Component('label', null, 'todo-label', this.form, {
                    type: 'text',
                    text: input.label
                })
                let forAttr = label.setAttribute('for', input.id)
            }

            let element = new Component(input.element,input.id,input.className, this.form)

            if(input.type){
                const attribute = element.setAttribute('type',input.type)
            }

            if(input.name){
                const name = element.setAttribute('name', input.name)
            }

            if(input.placeholder){
                const placeholder = element.setAttribute('placeholder', input.placeholder)
            }

            if(input.value){
                const value = element.setAttribute('value', input.value)
            }
        }
    }
}