import ProductController from "../controllers/ProductController.js";

document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.getElementById("add-btn");
    let searchBtn = document.getElementById("search-btn");
    let minPriceBtn = document.getElementById("min-price-btn");
    let maxPriceBtn = document.getElementById("max-price-btn");
    let printAllBtn = document.getElementById("print-all-btn");

    addBtn.addEventListener("click", () => {
        let name = document.getElementById("productName").value;
        let price = parseFloat(document.getElementById("productPrice").value);

        ProductController.addProduct(name, price);
        Swal.fire("Producto agregado!");
    });

    searchBtn.addEventListener("click", () => {
        let name = document.getElementById("searchQuery").value;
        ProductController.searchProductByName(name, (result) => {
            if (result) {
                Swal.fire(`Producto encontrado: ${result.name}, $${result.price}`);
            } else {
                Swal.fire("Producto no encontrado");
            }
        });
    });

    minPriceBtn.addEventListener("click", () => {
        ProductController.getMinPriceProduct((result) => {
            if (result) {
                Swal.fire(`Producto con menor precio: ${result.name}, $${result.price}`);
            } else {
                Swal.fire("El producto no se encuentra en el inventario");
            }
        });
    });

    maxPriceBtn.addEventListener("click", () => {
        ProductController.getMaxPriceProduct((result) => {
            if (result) {
                Swal.fire(`Producto con mayor precio: ${result.name}, $${result.price}`);
            } else {
                Swal.fire("No hay productos en el inventario");
            }
        });
    });

    printAllBtn.addEventListener("click", () => {
        let allProducts = [];
        ProductController.printAllProducts((product) => {
            allProducts.push(`${product.name}, $${product.price}`);
        });
        Swal.fire(`Todos los productos: ${allProducts.join(", ")}`);
    });
});
