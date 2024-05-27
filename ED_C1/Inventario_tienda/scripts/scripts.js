import ProductController from "../controllers/ProductController.js";

document.getElementById("add-btn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let price = parseFloat(document.getElementById("price").value);

    ProductController.addProduct(name, price);
    Swal.fire({
        title: 'Producto agregado',
        text: 'El producto ha sido agregado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

document.getElementById("search-btn").addEventListener("click", () => {
    let name = document.getElementById("searchQuery").value;

    ProductController.searchProductByName(name, (result) => {
        if (result) {
            Swal.fire({
                title: 'Producto encontrado',
                text: `Producto: ${result.name}, Precio: $${result.price}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Producto no encontrado',
                text: 'No se encontró el producto en el inventario',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});

document.getElementById("min-btn").addEventListener("click", () => {
    ProductController.getMinPriceProduct((result) => {
        if (result) {
            Swal.fire({
                title: 'Producto con menor precio',
                text: `Producto: ${result.name}, Precio: $${result.price}`,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'No hay productos',
                text: 'No hay productos en el inventario',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    });
});

document.getElementById("max-btn").addEventListener("click", () => {
    ProductController.getMaxPriceProduct((result) => {
        if (result) {
            Swal.fire({
                title: 'Producto con mayor precio',
                text: `Producto: ${result.name}, Precio: $${result.price}`,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'No hay productos',
                text: 'No hay productos en el inventario',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    });
});

document.getElementById("print-btn").addEventListener("click", () => {
    let productsList = [];
    ProductController.printAllProducts((product) => {
        productsList.push(`${product.name}, $${product.price}`);
    });
    Swal.fire({
        title: 'Todos los productos',
        html: productsList.join('<br>'),
        icon: 'info',
        confirmButtonText: 'OK'
    });
});
