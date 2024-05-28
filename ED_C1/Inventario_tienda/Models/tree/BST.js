import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            if (this.#root != null) return true;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.name < node.value.name) {
            if (node.left == null) {
                node.left = new Node(value);
                if (node.left != null) return true;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
                if (node.right != null) return true;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(predicate, node = this.#root) {
        if (node === null) {
            return null;
        }

        if (predicate(node.value)) {
            return node.value;
        }

        let result = this.search(predicate, node.left);
        if (result !== null) {
            return result;
        }

        return this.search(predicate, node.right);
    }

    findMin(node = this.#root) {
        if (node == null) {
            return null;
        }

        if (node.left == null) {
            return node.value;
        }

        return this.findMin(node.left);
    }

    findMax(node = this.#root) {
        if (node == null) {
            return null;
        }

        if (node.right == null) {
            return node.value;
        }

        return this.findMax(node.right);
    }

    inOrder(callback, node = this.#root) {
        if (node !== null) {
            this.inOrder(callback, node.left);
            callback(node.value);
            this.inOrder(callback, node.right);
        }
    }
}

export default BST;
