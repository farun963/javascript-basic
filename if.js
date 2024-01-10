// Categoría del producto
let categoria = "Electrónicos";
let precio;

// Utilizando if-else
if (categoria === "Alimentos") {
    precio = 10;
} else if (categoria === "Ropa") {
    precio = 30;
} else if (categoria === "Electrónicos") {
    precio = 100;
} else {
    precio = 50;
}
console.log(`El precio del producto de categoría ${categoria} es: $${precio}`);

// Utilizando switch
switch (categoria) {
    case "Alimentos":
        precio = 10;
        break;
    case "Ropa":
        precio = 30;
        break;
    case "Electrónicos":
        precio = 100;
        break;
    default:
        precio = 50;
}
console.log(`El precio del producto de categoría ${categoria} es: $${precio}`);
