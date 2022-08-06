class StackNode {
    data;
    next = null

    constructor(data) {
        this.data = data;
    }
}


class Stack {
    firstNode = null;


    push(data) {
        if (this.firstNode == null) {
            this.firstNode = new StackNode(data);
            return;
        }
        let newNode = new StackNode(data);
        newNode.next = this.firstNode;
        this.firstNode = newNode;
    }


    pop(){
        if(this.firstNode==null) {
            return;
        }
        this.firstNode = this.firstNode.next;
    }


    peek(){
        if(this.firstNode==null) {
            return;
        }
        return this.firstNode.data;
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

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(2);
stack.push(3);
stack.push(9);
stack.pop();
stack.traverse();