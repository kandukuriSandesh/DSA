//Stack is custom data structures which is a sequencial collection of elements that follows the principle of Last In First out (LIFO)

class Stack{
    constructor(...props){
        this.items=[...props]
    }
    
    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return `Stack is empty`
        }
        return this.items.pop()
    }

    isEmpty(){
        this.items.length === 0
    }

    print(){
        console.log(this.items)
    }



}

const stackEntries = new Stack(1,2,7)

//use cases 
// Browser history tracking 
// Undo operations hen typing 
//Call Stack in JS runtime

