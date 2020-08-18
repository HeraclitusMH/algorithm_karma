class SingleListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length= 0;
    }

    push = (val) => {
        let n = new SingleListNode(val);
        if(!this.head){
            this.head = n;
            this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length ++;
        return this;
    }

    pop = () => {
        if(!this.head) return undefined;
        let lastNode = this.head;
        let currentNode = lastNode;
        while(currentNode.next){
            lastNode = currentNode;
            currentNode = currentNode.next;
        } 
        this.tail=lastNode;
        this.tail.next=null;
        this.length --;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    
    shift = () => {
        if(!this.head) return undefined;
        let n = this.head;
        this.head = n.next;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return n;
    }

    unshift = (val) => {
        let n = new SingleListNode(val);
        if(!this.head){
            this.head = n;
            this.tail = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        this.length++;
        return this;
    }

    get = (index) => {
        if (index >= this.length || index < 0 || isNaN(index)){
            return null;
        }
        let n = this.head;
        for(let i=0;i<index;i++){
            n = n.next;
        }
        return n;
    }

 /*
   Set: change the value of a node based on index
 */

    set = (index,val) => {
        let n = this.get(index);
        if (n) {
            n.val = val;
            return true;
        }
        return false;
    }

    insert = (index,val) => {
        if (index < 0 || index > this.length || isNaN(index)) return false;
        if (index === this.length) return !!this.push(val); 
        if (index === 0) return !!this.unshift(val);

        let n = new SingleListNode(val);
        let previous = this.get(index-1);
        n.next = previous.next;
        previous.next = n;
        this.length++;
        return true;
    }

    remove = (index) => {
        if (index < 0 || index >= this.length || isNaN(index)) return null;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        let previous = this.get(index-1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    reverse = () => {
        if(this.length === 0 || this.length === 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}