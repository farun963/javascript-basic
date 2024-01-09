function mostrarTruthyFalsy() {
    // Valores truthy
    console.log('Valores truthy:');
    console.log(Boolean(true)); // true
    console.log(Boolean('Hola')); // Cualquier string no vacío se considera truthy
    console.log(Boolean(42)); // Cualquier número distinto de 0 se considera truthy
    console.log(Boolean({})); // Objetos se consideran truthy
    console.log(Boolean([])); // Arrays se consideran truthy
    console.log(Boolean(function(){})); // Funciones se consideran truthy
  
    console.log('----------------------');
  
    // Valores falsy
    console.log('Valores falsy:');
    console.log(Boolean(false)); // false
    console.log(Boolean('')); // String vacío se considera falsy
    console.log(Boolean(0)); // 0 se considera falsy
    console.log(Boolean(null)); // null se considera falsy
    console.log(Boolean(undefined)); // undefined se considera falsy
    console.log(Boolean(NaN)); // NaN se considera falsy
  }
  
  // Llamar a la función para mostrar los valores truthy y falsy
  mostrarTruthyFalsy();
  