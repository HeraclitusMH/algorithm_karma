class TreeNode {
    constructor(v){
        this.val = v;
        this.children = undefined;
    }
}

class Tree {
    constructor(node){
        this.root = node || null;
        this.children = new Array;
    }

    breadthFirstEnum = () => {
        if(!this.root) return false;
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while (queue.length){
            queue.forEach(element => {
                visited.push(queue.shift().val);
                if(element.children){
                    element.children.forEach(child => {
                        queue.push(child);
                    });
                 };
            });
        }
        return visited;
    }

    breadthFirstSearch = (v) => {
        if(!this.root) return false;
        let res = undefined;
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while (queue.length){
            queue.forEach(element => {
                visited.push(queue.shift());
                if(element.val === v) {
                    return res = element;
                };
                if(element.children){
                    element.children.forEach(child => {
                        queue.push(child);
                    });
                 };
            });
        }
        return res;
    }

    insert = (parentNode,v) => {
        let newNode = new TreeNode(v);
        if (!this.root) return this.root = newNode;
        let parent = this.breadthFirstSearch(parentNode);
        if(parent){
            if (parent.children){
                parent.children.push(newNode);
                return true;
            } else {
                parent.children = new Array;
                parent.children.push(newNode);
                return true;
            }
        }
        return false;
    }
}