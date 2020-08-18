describe('Binary Search Tree:', function () {
    
    it('test Node', function () {
        var first = new BstNode("Test")
        first.right = new BstNode("success")
        expect(first.right.val).toEqual("success");
    });

    it('Initialization', function () {
        const bst = new BinarySearchTree(new BstNode(50));
        expect(bst.root.val).toBe(50);
        expect(bst.root.right).toBe(null);
        expect(bst.root.left).toBe(null);
    });

    it('Insert L', function () {
        const bst = new BinarySearchTree(new BstNode(50));
        bst.insert(25);
        expect(bst.root.right).toBe(null);
        expect(bst.root.left.val).toBe(25);
    });

    it('Insert L R', function () {
        const bst = new BinarySearchTree(new BstNode(50));
        bst.insert(25);
        bst.insert(72);
        expect(bst.root.right.val).toBe(72);
        expect(bst.root.left.val).toBe(25);
        expect(bst.root.left.left).toBe(null);
        expect(bst.root.left.right).toBe(null);
    });
    
    it('Insert tree', function () {
        const bst = new BinarySearchTree(new BstNode(50));
        bst.insert(25);
        bst.insert(72);
        bst.insert(18);
        bst.insert(20);
        bst.insert(91);
        bst.insert(80);
        expect(bst.root.left.val).toBe(25);
        expect(bst.root.left.left.val).toBe(18);
        expect(bst.root.left.left.right.val).toBe(20);
        expect(bst.root.left.left.left).toBe(null);
        expect(bst.root.right.val).toBe(72);
        expect(bst.root.right.left).toBe(null);
        expect(bst.root.right.right.val).toBe(91);
        expect(bst.root.right.right.left.val).toBe(80);
        expect(bst.root.right.right.right).toBe(null);
    });

});