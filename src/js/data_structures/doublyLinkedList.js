class DoubleListNode {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (v) => {
        let node = new DoubleListNode(v);
        if (!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++;
        return this;
    }

    pop = () => {
        if(!this.head) return undefined;
        let removed;
        if (this.length === 1){
            removed = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            removed = this.tail;
            this.tail = removed.prev;
            this.tail.next = null;
        }
        this.length --;
        return removed;
    }

    shift = () => {
        if (this.length === 0) return undefined
        let removed = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
        }
        this.length --;
        return removed;
    }

    unshift = (v) => {
        let node = new DoubleListNode(v);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length ++;
        return this;
    }

    get = (index) => {
        if (index >= this.length || index < 0 || isNaN(index)){
            return null;
        }
        let n;
        if (index <= this.length/2){
            n = this.head;
            for(let i=0;i<index;i++){
                n = n.next;
            }
        } else {
            n = this.tail;
            for(let i=this.length-1;i>index;i--){
                n = n.prev;
            }
        }
        return n;
    }

    set = (index,val) => {
        let n = this.get(index);
        if (n) {
            n.val = val;
            return true;
        }
        return false;
    }

    insert = (index,v) => {
        if (index < 0 || isNaN(index) || index > this.length) return false; 
        if (index === 0){return !!this.unshift(v);}
        if (index === this.length){return !!this.push(v);}
        let node = new DoubleListNode(v);
        let prevNode = this.get(index-1);
        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next.prev = node;
        prevNode.next = node;
        this.length++;
        return true;
    }

    remove = (index) => {
        if (index < 0 || isNaN(index) || index >= this.length) return null;
        if (index === 0){return this.shift();}
        if (index === this.length-1){return this.pop();}
        let removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        this.length--;
        return removed;
    }

}