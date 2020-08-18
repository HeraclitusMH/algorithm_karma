describe('Generic Tree:', function () {
    
    it('test Node', function () {
        var first = new TreeNode("Test")
        first.children = new Array;
        first.children.push(new TreeNode("success"));
        expect(first.children[0].val).toEqual("success");
    });

    it('Initialization', function () {
        const tree = new Tree(new TreeNode(50));
        expect(tree.root.val).toBe(50);
        expect(tree.root.children).toBe(undefined);
    });

    it('Insert a child', function () {
        const tree = new Tree(new TreeNode(50));
        tree.insert(50,5)
        expect(tree.root.val).toBe(50);
        expect(tree.root.children[0].val).toBe(5);
    });

    it('Insert more child', function () {
        const tree = new Tree(new TreeNode(50));
        tree.insert(50,5);
        tree.insert(50,7);
        tree.insert(7,9);
        tree.insert(9,17);
        tree.insert(9,20);

        expect(tree.root.val).toBe(50);
        expect(tree.root.children[0].val).toBe(5);
        expect(tree.root.children[1].val).toBe(7);
        expect(tree.root.children[1].children[0].val).toBe(9);
        expect(tree.root.children[1].children[0].children[0].val).toBe(17);
        expect(tree.root.children[1].children[0].children[1].val).toBe(20);

        expect(tree.root.children[1].children).toBeDefined();
        expect(tree.root.children[1].children[1]).toBe(undefined);
        expect(tree.root.children[1].children[0].children[1].children).toBe(undefined);
    });

    it('Breadth first search', function () {
        const tree = new Tree(new TreeNode(50));
        tree.insert(50,5);
        tree.insert(50,7);
        tree.insert(7,9);
        tree.insert(9,17);
        tree.insert(9,20);

        expect(tree.breadthFirstSearch(50).val).toBe(50);
        expect(tree.breadthFirstSearch(7).val).toBe(7);
        expect(tree.breadthFirstSearch(17).val).toBe(17);
        expect(tree.breadthFirstSearch(20).val).toBe(20);

        expect(tree.breadthFirstSearch(14)).toBe(undefined);
    });
    

    it('Breadth First Enum', function () {
        const tree = new Tree(new TreeNode(50));
        tree.insert(50,5);
        tree.insert(50,7);
        tree.insert(7,9);
        tree.insert(9,17);
        tree.insert(9,20);
        
        expect(tree.breadthFirstEnum()).toEqual([50,5,7,9,17,20]);
    });
});