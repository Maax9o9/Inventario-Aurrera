import ProductController from "../controllers/ProductController.js";

document.addEventListener("DOMContentLoaded", function() {
    let addBtn = document.getElementById("agenda-btn");
    let searchBtn = document.getElementById("search-btn");
    let printAllBtn = document.getElementById("printAll-btn");
    let minPriceBtn = document.getElementById("minPrice-btn");
    let maxPriceBtn = document.getElementById("maxPrice-btn");

    const productController = new ProductController();

    addBtn.addEventListener("click", () => {
        let name = document.getElementById("productName").value;
        let price = parseFloat(document.getElementById("productPrice").value);

        if (!name || isNaN(price)) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos vacíos',
                text: 'Por favor, complete tanto el nombre como el precio del producto.'
            });
            return;
        }

        productController.addProduct(name, price);
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: 'Producto agregado correctamente!'
        });
    });

    searchBtn.addEventListener("click", () => {
        let name = document.getElementById("searchQuery").value;
    
        if (!name) {
            Swal.fire({
                icon: 'warning',
                title: 'Campo vacío',
                text: 'Por favor, ingrese el nombre del producto a buscar.'
            });
            return;
        }
    
        productController.searchProductByName(name, (result) => {
            if (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto encontrado',
                    text: `Producto encontrado: ${result.name}, $${result.price}`
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Producto no encontrado',
                    text: 'Producto no encontrado'
                });
            }
        });
    });
    
    

    printAllBtn.addEventListener("click", () => {
        let productList = "";
        productController.printAllProducts((product) => {
            productList += `${product.name}, $${product.price}\n`;
        });
        Swal.fire({
            icon: 'info',
            title: 'Todos los Productos',
            text: productList === "" ? "No hay productos en el inventario." : productList
        });
    });

    minPriceBtn.addEventListener("click", () => {
        productController.getMinPriceProduct((result) => {
            if (result) {
                Swal.fire({
                    icon: 'info',
                    title: 'Producto con Precio Mínimo',
                    text: `Producto con precio mínimo: ${result.name}, $${result.price}`
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No hay productos',
                    text: 'No se encontraron productos en el inventario.'
                });
            }
        });
    });

    maxPriceBtn.addEventListener("click", () => {
        productController.getMaxPriceProduct((result) => {
            if (result) {
                Swal.fire({
                    icon: 'info',
                    title: 'Producto con Precio Máximo',
                    text: `Producto con precio máximo: ${result.name}, $${result.price}`
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No hay productos',
                    text: 'No se encontraron productos en el inventario.'
                });
            }
        });
    });
});
