import Products from "../Models/Products.js";
import { bst } from "../scripts/dependencies.js";

class ProductController {
    static addProduct(name, price) {
        let product = new Products(name, price);
        bst.add(product);
    }

    static searchProductByName(name, callback) {
        bst.find((product) => product.name === name, callback);
    }

    static getMinPriceProduct(callback) {
        bst.findMin(callback);
    }

    static getMaxPriceProduct(callback) {
        bst.findMax(callback);
    }

    static printAllProducts(callback) {
        bst.inOrder(callback);
    }
}

export default ProductController;
