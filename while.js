var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

funcion saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}