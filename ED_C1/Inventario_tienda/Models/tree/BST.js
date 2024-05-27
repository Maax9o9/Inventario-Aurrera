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
            return this._insertNode(this.root, value);
        }
    }

    _insertNode(node, value) {
        if (value.price < node.value.price) {
            if (node.left === null) {
                node.left = new Node(value);
                return true;
            } else {
                return this._insertNode(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value);
                return true;
            } else {
                return this._insertNode(node.right, value);
            }
        }
    }

    find(predicate, callback) {
        this._searchNode(this.root, predicate, callback);
    }

    _searchNode(node, predicate, callback) {
        if (node === null) {
            callback(null);
        } else if (predicate(node.value)) {
            callback(node.value);
        } else {
            this._searchNode(node.left, predicate, callback);
            this._searchNode(node.right, predicate, callback);
        }
    }

    findMin(callback) {
        this._findMinNode(this.root, callback);
    }

    _findMinNode(node, callback) {
        if (node.left === null) {
            callback(node.value);
        } else {
            this._findMinNode(node.left, callback);
        }
    }

    findMax(callback) {
        this._findMaxNode(this.root, callback);
    }

    _findMaxNode(node, callback) {
        if (node.right === null) {
            callback(node.value);
        } else {
            this._findMaxNode(node.right, callback);
        }
    }

    inOrder(callback) {
        this._inOrderTraverse(this.root, callback);
    }

    _inOrderTraverse(node, callback) {
        if (node !== null) {
            this._inOrderTraverse(node.left, callback);
            callback(node.value);
            this._inOrderTraverse(node.right, callback);
        }
    }
}

export default BST;
