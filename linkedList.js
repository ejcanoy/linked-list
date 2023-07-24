import { LinkedListNode } from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const curNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = curNode;
        } else {
            let ptr = this.head;
            while (ptr.next !== null) {
                ptr = ptr.next;
            }
            ptr.next = curNode;
        }
    }

    prepend(value) {
        const temp = this.head;
        this.head = new LinkedListNode(value);
        this.head.next = temp;
    }

    size() {
        let ptr = this.head;
        let size = 0;
        while (ptr !== null) {
            size++;
            ptr = ptr.next;
        }
        return size;
    }

    head() {
        return this.head;
    }

    tail() {
        let ptr = this.head;
        while (ptr !== null && ptr.next !== null) {
            ptr = ptr.next;
        }

        return ptr;
    }

    at(index) {
        if (this.size() - 1 < index) return null;
        let ptr = this.head;
        while (index > 0) {
            ptr = ptr.next;
            index--;
        }
        return ptr
    }

    pop() {
        let ptr = this.head;
        while (ptr !== null && ptr.next !== null && ptr.next.next !== null) {
            ptr = ptr.next;
        }
        ptr.next = ptr.next.next;
    }

    contains(value) {
        let ptr = this.head;
        while (ptr !== null) {
            if (ptr.data === value) return true;
            ptr = ptr.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let ptr = this.head;
        while (ptr !== null) {
            if (ptr.data === value) return index;
            index++;
            ptr = ptr.next;
        }
        return null;
    }

    toString() {
        let ptr = this.head;
        let result = "";
        while (ptr !== null) {
            result += `${ptr.data} -> `;
            ptr = ptr.next;
        }
        result += 'null';
        return result;
    }
}
