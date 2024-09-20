// src/index.ts     

import * as readline from 'readline-sync';

function main(){
    console.log('=== Gestor de alumnos ===');

    // Mostrar menú de opciones
    const options = ['Crear un Alumno', 'Asignar materia', 'Listar materias del Alumno', 'Crear una materia', 'Listar materias', 'Asignar nota', 'Listar nota y alumno'];
    const index = readline.keyInSelect(options, 'Seleccione una opcion: ');

    if(index === -1){
        console.log('Opción cancelada.');
        return;
    }
    
    // Realizar la operación seleccionada
  let resultado: number;
  switch (index) {
    case 0: 
      break;
    default:
      console.log('Opcion no válida.');
      return;
  }

  console.log(`o`); //corregir

  // Preguntar si desea realizar otra operación
  const keepgoing = readline.keyInYN('¿Desea consultar algo más? ');
  if (keepgoing) {
    main(); // Llamada recursiva para reiniciar el proceso
  } else {
    console.log('Gracias por hacer uso de la gestora.');
  }
}

// Ejecutar la función principal
main();
