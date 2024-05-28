import Product from "../Models/Products.js";
import { bst } from "../scripts/dependencies.js";

class ProductController {
    constructor() {
        this.bst = bst;
    }

    addProduct(name, price) {
        let product = new Product(name, price);
        this.bst.add(product);
    }

    searchProductByName(name, callback) {
        const result = this.bst.find((product) => product.name === name);
        callback(result);
    }

    getMinPriceProduct(callback) {
        const result = this.bst.findMin();
        callback(result);
    }

    getMaxPriceProduct(callback) {
        const result = this.bst.findMax();
        callback(result);
    }

    printAllProducts(callback) {
        this.bst.inOrder(callback);
    }
}

export default new ProductController();
