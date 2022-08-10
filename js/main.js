let precioTotal = 0;

// productos
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// calcular precio
function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio
}

// calcular stock + precio
function calculoStock(cantidad, producto) {
    if (producto.stock >= cantidad) {
        calculoPrecio(cantidad, producto.precio)
        console.log(producto.nombre + " $" + cantidad * producto.precio)
    }
    else {
        console.log("No hay suficiente stock. Disponemos de: " + producto.stock + " unidades")
    }
}

const productoA = new Producto("productoA", 10, 10)
const productoB = new Producto("productoB", 20, 5)
const productoC = new Producto("productoC", 40, 10)
const productoD = new Producto("productoD", 50, 5)

// let listaProductos = [productoA, productoB, productoC, productoD]

// let nombresProductos = listaProductos.map((producto) => producto.nombre)

// func. comprar productos

let boton1 = document.getElementById("producto-1")
let boton2 = document.getElementById("producto-2")
let boton3 = document.getElementById("producto-3")
let boton4 = document.getElementById("producto-4")

let cantidadProductoA = 0;
let cantidadProductoB = 0;
let cantidadProductoC = 0;
let cantidadProductoD = 0;

boton1.addEventListener("click", compraItemA)
boton2.addEventListener("click", compraItemB)
boton3.addEventListener("click", compraItemC)
boton4.addEventListener("click", compraItemD)

// compra item 1
function compraItemA() {
    cantidadProductoA = cantidadProductoA + 1
    calculoStock(cantidadProductoA, productoA)
}

// compra item 2
function compraItemB() {
    cantidadProductoB = cantidadProductoB + 1
    calculoStock(cantidadProductoB, productoB)
}

// compra item 3
function compraItemC() {
    cantidadProductoC = cantidadProductoC + 1
    calculoStock(cantidadProductoC, productoC)
}

// compra item 4
function compraItemD() {
    cantidadProductoD = cantidadProductoD + 1
    calculoStock(cantidadProductoD, productoD)
}


// simulador eliminar categoria
let productoEliminado = document.getElementById("categoriaDelete");
productoEliminado.addEventListener("click", eliminado)

function eliminado() {
    let productoEliminado = document.getElementById("borrarProductoA"); ("borrarProductoA");
    productoEliminado.remove();
}


// if (productoElegido.toLowerCase() == productoA.nombre.toLowerCase()) {
//     calculoStock(cantidadProducto, productoA)

//     let productoEliminado = document.getElementById("borrarProductoA");
//     //Elminando el propio elemento
//     productoEliminado.remove();
// }

// if (productoElegido.toLowerCase() == productoB.nombre.toLowerCase()) {
//     calculoStock(cantidadProducto, productoB)
// }

// if (productoElegido.toLowerCase() == productoC.nombre.toLowerCase()) {
//     calculoStock(cantidadProducto, productoC)
// }

// if (productoElegido.toLowerCase() == productoD.nombre.toLowerCase()) {
//     calculoStock(cantidadProducto, productoD)
// }

// func.elegir categorias de productos

// let alimentos = ["secos", "humedos", "medicados"]
// let categoria = prompt("Ingrese categoria:")

// if (categoria == 'secos') {
//     alimentos.splice(1, 2)
// }

// if (categoria == 'humedos') {
//     alimentos.splice(2, 1)
//     alimentos.splice(0, 1)
// }

// if (categoria == 'medicados') {
//     alimentos.splice(0, 2)
// }

// alert(alimentos)
