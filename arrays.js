// Crear un array de frutas
let frutas = ['manzana', 'plátano', 'uva'];

// Mostrar el array inicial
console.log('Array inicial de frutas:', frutas);

// Agregar un elemento al final del array usando push
frutas.push('naranja');
console.log('Array después de agregar una fruta:', frutas);

// Eliminar el último elemento del array usando pop
let frutaEliminada = frutas.pop();
console.log('Fruta eliminada:', frutaEliminada);
console.log('Array después de eliminar una fruta con pop:', frutas);
// sdf
// Obtener la longitud del array usando length
console.log('Longitud del array de frutas:', frutas.length);

// Añadir un elemento al inicio del array usando unshift
frutas.unshift('sandía');
console.log('Array después de agregar una fruta al inicio con unshift:', frutas);

// Eliminar el primer elemento del array usando shift
let primeraFruta = frutas.shift();
console.log('Primera fruta eliminada:', primeraFruta);
console.log('Array después de eliminar la primera fruta con shift:', frutas);

// Encontrar el índice de un elemento usando indexOf
let indicePlatano = frutas.indexOf('plátano');
console.log('Índice del plátano en el array:', indicePlatano);

// Remover elementos usando splice (eliminar 'uva' del array)
let indiceUva = frutas.indexOf('uva');
if (indiceUva !== -1) {
  frutas.splice(indiceUva, 1);
}
console.log('Array después de eliminar la uva con splice:', frutas);
