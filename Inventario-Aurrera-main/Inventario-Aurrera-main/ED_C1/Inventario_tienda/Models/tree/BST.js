import Node from "./Node.js";

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return true;
        } else {
            return this.insertNode(this.root, value);
        }
    }

    insertNode(node, value) {
        if (value.price < node.value.price) {
            if (node.left === null) {
                node.left = new Node(value);
                return true;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value);
                return true;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }


search(parameter) {
    const searchNode = (node) => {
        if (node === null) {
            return null;
        }
        if (parameter(node.value)) {
            return node.value;
        }
        let leftSearch = searchNode(node.left);
        if (leftSearch !== null) {
            return leftSearch;
        }
        return searchNode(node.right);
    };
    return searchNode(this.root);
}


    findMin(callback) {
        if (this.root === null) {
            callback(null);
            return;
        }

        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        callback(current.value);
    }

    findMax(callback) {
        if (this.root === null) {
            callback(null);
            return;
        }

        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        callback(current.value);
    }

    inOrder(callback) {
        const inOrderTraverse = (node) => {
            if (node !== null) {
                inOrderTraverse(node.left);
                callback(node.value);
                inOrderTraverse(node.right);
            }
        };
        inOrderTraverse(this.root);
    }
}

export default BST;
