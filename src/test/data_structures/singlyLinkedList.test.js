describe('Singly Linked List:', function () {
    
    it('test Node', function () {
        var first = new SingleListNode("Test")
        first.next = new SingleListNode("success")
        expect(first.next.val).toEqual("success");
    });

    it('Initialization - values start at null', function () {
        const list = new SinglyLinkedList;
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    });

    it('Push one element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        expect(list.head.val).toBe(3);
        expect(list.tail.val).toBe(3);
        expect(list.length).toBe(1);
    });

    it('Push three element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.head.val).toBe(3);
        expect(list.tail.val).toBe(9);
        expect(list.length).toBe(3);
    });

    it('Pop empty list', function () {
        const list = new SinglyLinkedList;
        list.pop();
        expect(list.pop()).toBe(undefined);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    });

    it('Pop the only element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        expect(list.pop().val).toBe(3);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    });

    it('Pop one element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.pop().val).toBe(9);
        expect(list.head.val).toBe(3);
        expect(list.tail.val).toBe(6);
        expect(list.length).toBe(2);
    });

    it('Pop two element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.pop().val).toBe(9);
        expect(list.pop().val).toBe(6);
        expect(list.head.val).toBe(3);
        expect(list.tail.val).toBe(3);
        expect(list.length).toBe(1);
    });

    it('Shift the only element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        expect(list.shift().val).toBe(3);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    });

    it('Shift one element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.shift().val).toBe(3);
        expect(list.head.val).toBe(6);
        expect(list.tail.val).toBe(9);
        expect(list.length).toBe(2);
    });

    it('Shift two element', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.shift().val).toBe(3);
        expect(list.shift().val).toBe(6);
        expect(list.head.val).toBe(9);
        expect(list.tail.val).toBe(9);
        expect(list.length).toBe(1);
    });

    it('Unshift from null', function () {
        const list = new SinglyLinkedList;
        list.unshift(3);
        expect(list.head.val).toBe(3);
        expect(list.tail.val).toBe(3);
        expect(list.length).toBe(1);
    });

    
    it('Unshift three element', function () {
        const list = new SinglyLinkedList;
        list.unshift(3);
        list.unshift(6);
        list.unshift(9);
        expect(list.head.val).toBe(9);
        expect(list.tail.val).toBe(3);
        expect(list.length).toBe(3);
    });

    it('get unexistent positive index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.get(3)).toBe(null);
    });

    it('get unexistent negative index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.get("dasd")).toBe(null);
    });

    it('get index 0', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.get(0).val).toBe(3);
    });

    it('get index 1', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.get(1).val).toBe(6);
    });

    it('get last index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.get(2).val).toBe(9);
    });

    it('set unexistent positive index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.set(3)).toBe(false);
    });

    it('set unexistent string index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.set("dasd")).toBe(false);
    });

    it('set second item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.set(1,12)).toBe(true);
        expect(list.head.next.val).toBe(12);
    });

    it('set third item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        list.push(10);
        expect(list.set(2,12)).toBe(true);
        expect(list.get(1).next.val).toBe(12);
        expect(list.length).toBe(4);
    });

    it('insert unexistent negative index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.set("dasd")).toBe(false);
        expect(list.length).toBe(3);
    });

    it('insert unexistent string index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.set("dasd")).toBe(false);
        expect(list.length).toBe(3);
    });

    it('insert first item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.insert(0,12)).toBe(true);
        expect(list.head.val).toBe(12);
        expect(list.length).toBe(4);
    });
    it('insert second item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.insert(1,12)).toBe(true);
        expect(list.head.next.val).toBe(12);
        expect(list.length).toBe(4);
    });

    it('insert third item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        list.push(10);
        expect(list.insert(2,12)).toBe(true);
        expect(list.get(1).next.val).toBe(12);
        expect(list.length).toBe(5);
    });

    it('insert last item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.insert(3,12)).toBe(true);
        expect(list.tail.val).toBe(12);
        expect(list.tail.next).toBe(null);
        expect(list.length).toBe(4);
    });

    it('remove unexistent string index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove("dasd")).toBe(null);
        expect(list.length).toBe(3);
    });

    it('remove unexistent negative index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove("dasd")).toBe(null);
        expect(list.length).toBe(3);
    });

    it('remove unexistent positive index', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove(3)).toBe(null);
        expect(list.length).toBe(3);
    });

    it('remove the only one item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        expect(list.remove(0).val).toBe(3);
        expect(list.head).toBe(null);
        expect(list.length).toBe(0);
    });

    it('remove first item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove(0).val).toBe(3);
        expect(list.head.val).toBe(6);
        expect(list.length).toBe(2);
    });

    it('remove second item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove(1).val).toBe(6);
        expect(list.head.next.val).toBe(9);
        expect(list.length).toBe(2);
    });

    it('remove third item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        list.push(10);
        expect(list.remove(2).val).toBe(9);
        expect(list.get(1).next.val).toBe(10);
        expect(list.length).toBe(3);
    });

    it('remove last item', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        expect(list.remove(2).val).toBe(9);
        expect(list.tail.val).toBe(6);
        expect(list.length).toBe(2);
    });

    it('reverse right', function () {
        const list = new SinglyLinkedList;
        list.push(3);
        list.push(6);
        list.push(9);
        list.push(12);
        list.push(15);
        list.reverse();
        expect(list.head.val).toBe(15);
        expect(list.head.next.val).toBe(12);
        expect(list.head.next.next.val).toBe(9);
        expect(list.head.next.next.next.val).toBe(6);
        expect(list.head.next.next.next.next.val).toBe(3);
        expect(list.tail.val).toBe(3);
        expect(list.tail.next).toBe(null);
        expect(list.length).toBe(5);
    });

    it('reverse one item', function () {
        const list = new SinglyLinkedList;
        list.push(6);
        list.reverse();
        expect(list.head.val).toBe(6);
        expect(list.head.next).toBe(null);
        expect(list.tail.val).toBe(6);
        expect(list.tail.next).toBe(null);
        expect(list.length).toBe(1);
    });

    it('Reverse nothing', function () {
        const list = new SinglyLinkedList;
        list.reverse()
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
        expect(list.length).toBe(0);
    });

});