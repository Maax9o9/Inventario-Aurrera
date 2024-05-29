import BST from "../models/tree/BST.js";
import Product from "../models/Products.js";

class ProductController {
    constructor() {
        this.bst = new BST();
    }

    addProduct(name, price) {
        let product = new Product(name, price);
        this.bst.add(product);
    }

    searchProductByName(name, callback) {
        const result = this.bst.search((product) => product.name === name);
        callback(result);
    }
    
    

    getMinPriceProduct(callback) {
        this.bst.findMin((result) => {
            if (result) {
                callback(result);
            } else {
                callback(null);
            }
        });
    }

    getMaxPriceProduct(callback) {
        this.bst.findMax((result) => {
            if (result) {
                callback(result);
            } else {
                callback(null);
            }
        });
    }

    printAllProducts(callback) {
        this.bst.inOrder(callback);
    }
}

export default ProductController;
