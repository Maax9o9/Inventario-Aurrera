import productController from "../controllers/ProductController.js";

document.getElementById("add-btn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let price = parseFloat(document.getElementById("price").value);

    if (name && !isNaN(price)) {
        productController.addProduct(name, price);
        Swal.fire("Producto agregado con éxito");
    } else {
        Swal.fire("Por favor, ingrese un nombre y un precio válido");
    }
});

document.getElementById("search-btn").addEventListener("click", () => {
    let searchQuery = document.getElementById("searchQuery").value;
    productController.searchProductByName(searchQuery, (result) => {
        if (result) {
            Swal.fire(`Producto encontrado: ${result.name}, $${result.price}`);
        } else {
            Swal.fire("Producto no encontrado");
        }
    });
});

document.getElementById("min-btn").addEventListener("click", () => {
    productController.getMinPriceProduct((result) => {
        if (result) {
            Swal.fire(`Producto con menor precio: ${result.name}, $${result.price}`);
        } else {
            Swal.fire("No hay productos en el inventario");
        }
    });
});

document.getElementById("max-btn").addEventListener("click", () => {
    productController.getMaxPriceProduct((result) => {
        if (result) {
            Swal.fire(`Producto con mayor precio: ${result.name}, $${result.price}`);
        } else {
            Swal.fire("No hay productos en el inventario");
        }
    });
});

document.getElementById("print-btn").addEventListener("click", () => {
    let allProducts = [];
    productController.printAllProducts((result) => {
        allProducts.push(result);
    });
    if (allProducts.length > 0) {
        Swal.fire(`Todos los productos:\n${allProducts.map(p => `${p.name}, $${p.price}`).join("\n")}`);
    } else {
        Swal.fire("No hay productos en el inventario");
    }
});
