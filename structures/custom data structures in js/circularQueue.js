class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.capacity === this.currentLength
    }

    print(){
        console.log(this.items)
    }

    enqueue(element){
        if(this.isFull()) {
            console.log("Circular Queue is Full")
            return  
        }
        this.rear = this.rear+1
        this.items[this.rear] = element 
        this.currentLength++
        if(this.front === -1){
            this.front = this.rear
        }
    }

    dequeue(){
        if(this.isEmpty()) {
            console.log( "Circular Queue is Empty")
            return
        }
        let item = this.items[this.front]
        delete this.items[this.front]
        this.currentLength--
        this.front++
        if(this.isEmpty()){
            this.currentLength=0
            this.front = -1
            this.rear = -1
        }
    }
}


const circularQueue = new CircularQueue(3)

circularQueue.enqueue("m")
circularQueue.dequeue()
circularQueue.enqueue("a")
circularQueue.dequeue()
circularQueue.enqueue("d")



circularQueue.print()