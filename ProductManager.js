class Products {
    constructor() {
        this.products = [];
        this.path = "C:\Users\USUARIO\OneDrive\Escritorio\Primer entrega. Diaz";
    }

    addProduct(id, title, price, thumbnail, code, stock) {
        let product = {
            id: id,
            title: title,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.products.push(product);
        console.log(`Producto agregado: ${title} - Precio: ${price}`);
    }

    getProducts() {
        console.log("Lista de productos:");
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.title} - Precio: ${product.price} - Stock: ${product.stock}`);
        });
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            console.log(`Producto encontrado: ${product.title} - Precio: ${product.price} - Stock: ${product.stock}`);
        } else {
            console.log("Producto no encontrado");
        }
    }

    updateProduct(id, newTitle, newPrice, newThumbnail, newCode, newStock) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index].title = newTitle;
            this.products[index].price = newPrice;
            this.products[index].thumbnail = newThumbnail;
            this.products[index].code = newCode;
            this.products[index].stock = newStock;
            console.log(`Producto actualizado: ${newTitle} - Nuevo precio: ${newPrice} - Nuevo stock: ${newStock}`);
        } else {
            console.log("Producto no encontrado");
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            let productDelete = this.productos.splice(index, 1);
            console.log(`Producto eliminado: ${productDelete[0].title}`);
        } else {
            console.log("Producto no encontrado");
        }
    }
}


const manejador = new Products();
manejador.addProduct(1, "Product 1", 20, "thumbnail1.jpg", "ABC123", 50);
manejador.addProduct(2, "Product 2", 30, "thumbnail2.jpg", "DEF456", 30);
manejador.getProducts();
manejador.getProductById(1);
manejador.updateProduct(1, "Nuevo Product 1", 25, "thumbnail1_modificado.jpg", "ABC123_modificado", 40);
manejador.deleteProduct(2);
manejador.getProducts();
