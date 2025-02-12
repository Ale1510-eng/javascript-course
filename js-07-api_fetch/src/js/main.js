/*
  Programación síncrona.
 
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, puede bloquear el hilo
  de ejecución.
*/

/* const primerPaso = () => {
    console.log("01 - Inicio de mi programa");
  };
  const segundoPaso = () => {
    console.log("02 - Desarrollo de mi programa");
    for (let i = 0; i < 1_000_000_000.1; i++) {
      i * 2;
    }
  };
  const tercerPaso = () => {
    console.log("03 - Fin de mi programa");
  };
 */


/*
 Programación asíncrona.
 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones.
  setTimeout()
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador
   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );
*/

const saludo = (nombre) => console.log(`Hola ${nombre}, Se te antoja un elote?`);
const usoDeSetTimeOut = (nombrePersona, titulo) => {

    setTimeout(saludo, 5000, `${titulo}  ${nombrePersona}`);
};
console.log("01-Inicio de mi secuencia");
usoDeSetTimeOut("Patricio Estrella", "Dr. Profesor")
console.log("03-Fin de mi secuencia");

//setTimeout no tiene retorno

//setInterval tiene un retorno que puede usarse para detener la función 