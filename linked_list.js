class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at first node
    insertFirstNode(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    // print all Node
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Insert at last of list
    insertLastNode(data) {
        let node = new Node(data);
        let current = this.head;
        // Check is linked list is empty , add to first element
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;

        }
        this.size++;
    }


    // Insert at given Index
    insertAtIndex(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        // if Index is 0 insert at first node
        if (index == 0) {
            this.insertFirstNode(data);
            return;
        }

        const node = new Node(data);

        let current, previous;

        // Set current to first node
        current = this.head;

        let count = 0;
        // Loop through the link list untill you get desired index
        while (count < index) {
            previous = current;
            count++
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Print node at index
    getNodeAtIndex(index) {

        // Check if index is less than 0
        if (index < 0) {
            return -1;
        }

        if (index > 0 && index > this.size) {
            return -1;
        }

        let current = this.head;
        let count = 0;
        while (index > count) {
            current = current.next;
            count++;
        }

        console.log(current)
        return current;
    }


    // Remove node at given index
    removeAtIndex(index) {

        // Check if index is less than 0
        if (index < 0) {
            return -1;
        }
        // Check if index is more than size
        if (index > 0 && index > this.size) {
            return -1;
        }
        // If index is 0 return head
        if (index == 0) {
            this.head = this.head.next;
        }

        let current, previous;

        current = this.head;

        let count = 0;

        while (count < index) {
            previous = current;
            count++
            current = current.next;
        }

        previous.next = current.next;
        this.size--;
    }

    // Remove all element from Linked list
    removeAll() {
        this.head = null;
        this.size = 0;
    }
}




const ll = new LinkedList();

ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertFirstNode(400);

ll.printListData();


