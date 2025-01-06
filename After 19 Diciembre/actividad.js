/* 
Realizar una clase “ProductManager” que gestione un conjunto de productos.
Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

Cada producto que gestione debe contar con las propiedades:
    title (nombre del producto)
    description (descripción del producto)
    price (precio)
    thumbnail (ruta de imagen)
    code (código identificador)
    stock (número de piezas disponibles)

Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable
Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”
 */

class ProductManager {
    #products
    #id = 1
    constructor () {
        this.#products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
            //Obtener el producto por code (generar para esto un método aparte)
            //En caso que exista ese producto por código, es lanzar un error (pensar en promises)
            const product = {title, description, price, thumbnail, code, stock, id: this.#id}
            this.#products.push(product)
            this.#id += 1
    }

    getProducts = async () => {
        return new Promise((acc, rej) => {
            setTimeout(()=> {
                acc(this.#products)
            }, 2000)
        })
    }
}

const mainFunction = async () => {
    const productManager = new ProductManager()
    productManager.addProduct("remera Puma", "Una remera muy linda", 12000, "url/thumbnail", 1234, 10)
    const products = await productManager.getProducts()
    productManager.addProduct("remera Nike", "Una remera muy fea", 18000, "url/thumbnail/123", 1235, 15)
    console.log(products); 
}

mainFunction()