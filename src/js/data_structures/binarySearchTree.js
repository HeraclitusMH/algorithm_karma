class BstNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(node){
        this.root = node;
    }

    insert = (v) => {
        let newNode = new BstNode(v);
        let node = this.root;
        while(node != newNode){
            if (v > node.val){
                if(node.right){
                    node = node.right;
                } else {
                    node.right = newNode;
                    node = newNode;
                }
            } else{
                if(node.left){
                    node = node.left;
                } else {
                    node.left = newNode;
                    node = newNode;
                }
            }
        }
        return this;
    }
}