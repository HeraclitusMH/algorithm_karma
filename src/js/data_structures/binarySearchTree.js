class BstNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(node){
        this.root = node || null;
    }

    insert = (v) => {
        let newNode = new BstNode(v);
        if(!this.root) return this.root = newNode;
        let node = this.root;
        while(true){
            if (v > node.val){
                if(node.right){
                    node = node.right;
                } else {
                    node.right = newNode;
                    return this;
                }
            } else{
                if(node.left){
                    node = node.left;
                } else {
                    node.left = newNode;
                    return this;
                }
            }
        }
    }
    
    find = (v) => {
        if(!this.root) return false;
        let node = this.root;
        while(node.val != v){
            if (v > node.val){
                if(node.right){
                    node = node.right;
                } else {
                    return false;
                }
            } else{
                if(node.left){
                    node = node.left;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}