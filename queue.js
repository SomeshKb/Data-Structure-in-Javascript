class QueueNode {
    data;
    next = null

    constructor(data) {
        this.data = data;
    }
}


class Queue {
    firstNode = null;
    lastNode = null;

    push(data) {
        let newNode = new QueueNode(data);

        if (this.lastNode != null) {
            this.lastNode.next = newNode;
        }

        this.lastNode = newNode;

        if (this.firstNode == null) {
            this.firstNode = this.lastNode;
        }
    }

    remove() {
        if(this.firstNode==null) {
            return;
        }

        let node = this.firstNode.data;

        this.firstNode = this.firstNode.next;

        if(this.firstNode.next==null){
            this.lastNode==null;
        }
        return node;
    }

    traverse() {
        if(this.firstNode==null) {
            return;
        }
        let current = this.firstNode;
        console.log(current.data)
        while (current.next){
            console.log(current.next.data)
            current = current.next;
        }
    }
}


var queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

queue.remove();

queue.traverse();

console.log(queue)