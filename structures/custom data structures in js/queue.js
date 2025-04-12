// Queue is sequencial collection of elements which follows the principle of first in first out
// FIFO first element inserted into que is the first element to be removed 
// A queue of the people is example, people enter queue at rear/tail and leave from front /head
// hence first who entered the queue from tail/rear is the first one to move out of the queue from head/front

class Queue{

    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()) return `Queue is empty`
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(this.isEmpty()) return `Queue is Empty`
        return this.items[0]
    }

    print(){
        console.log(this.items)
    }
    size(){
        return this.items.length
    }

}

// queue data structure optimised using object 

class queue{
    constructor(){
        this.items = {}
        this.front=0
        this.rear=0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return item
    }

    isEmpty(){
        if(this.front==this.rear) return true
        return false
    }

    peek(){
        if(this.isEmpty()) return `Queue is Empty`
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
    }

    size(){
        return this.rear
    }

}

const que = new queue()

que.enqueue(1)
console.log(1,que.size())

console.log(2,que.isEmpty())

console.log(3,que.peek())
que.print()

que.enqueue(2)

que.print()
console.log(5,que.dequeue())

console.log(7,que.dequeue())

console.log(8,que.isEmpty())


//Queue usecases

//Printers when multiple documents are printed
// CPU task scheduling 
//Callback queue in JS runtime
