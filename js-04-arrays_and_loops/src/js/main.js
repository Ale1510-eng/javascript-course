
//Este objeto es mutable se declara con cost para proteger el objeto y evitar que cambie de tipo de dato durante la ejecución
const postres = [];

//Agregar un postre al final del arreglo

postres.push('Pastel de Guayaba');
postres.push('Flan', 'Gelatina');

console.log(postres);

// Eliminar un postre del final del arreglo.
console.log(`Elemento eliminado con pop(): ${postres.pop()}`); //Gelatina
console.log(postres); //['Pastel de Guayaba', Flan]

//Agregar un postre al inicio del arreglo.
postres.unshift('Tiramisú');
console.log(postres); // ['Tiramisú', 'Pastel de Guayaba', 'Flan' ]

//Eliminar un postre al inicio del arreglo
console.log(`Elemento eliminado con shift(): ${postres.shift()}`);

//Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // 1

// Buscar el postre 'Flan'
// Si existe mostrar 'El flan existe'
// Si no existe mostrar 'El flan no existe'
// Para evaluar usar el operador ternario 
// evaluación ? valor si verdadero : valor si falso
console.log(postres);
postres.pop();
postres.indexOf('Flan') != -1 ? console.log('El flan existe') : console.log('El flan no existe');

console.log(postres.indexOf('Flan') != -1 ? 'El flan existe' : 'El flan no existe');

// =================================================
// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.

const pasteles = ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"];
const eliminarPastel = (array, indice) => {
    const copyArray = array.slice();
    const pastelEliminado = copyArray.splice(indice, 1);
    console.log(copyArray); // ["Pastel de Chocolate", "Pastel de Limón"]
    return pastelEliminado;
}
eliminarPastel(pasteles, 1);
console.log(pasteles); // ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"]
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []
const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const myArray5 = [5, 6]; // [5,6]
const myArray6 = new Array(5, 6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
*/
// ============ Iterar un  arreglo y mostrar los elementos como una lista ============

const gelatinas = ["Fresa", "Limon", "Naranja", "Uva"];
const gelatinasLista = [];
for (let index = 0; index < gelatinas.length; index++) {
    gelatinasLista.push(`<li> ${gelatinas[index]} </li>`);
}
console.log(gelatinasLista);
/* 
  [
   "<li> Fresa </li>", 
   "<li> Limon </li>", 
   "<li> Naranja </li>", 
   "<li> Uva </li>"
   ]
*/
const refGelatinasLista = document.getElementById("gelatina-lista");
console.log(refGelatinasLista);
refGelatinasLista.innerHTML = gelatinasLista.join("");

// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);
}

for (const color of colores) {
    console.log(color);
}

/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */

/* const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];

const listaCantantes = document.getElementById("cantantes-lista");

const generarListaCantantes = (cantantes, listaCantantes) => {
    for (const cantante of cantantes) {
        listaCantantes.innerHTML += `<li>${cantante}</li>`;
    }
}

generarListaCantantes(cantantes, listaCantantes); */

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");
const generarListaCantantes = (cantantesArray) => {
    const cantantesLista = [];
    for (const cantante of cantantesArray) {
        cantantesLista.push(`<li>${cantante}</li>`);
    }
    return cantantesLista.join("");
}
const insertarListaDeCantantesAlDOM = (lista, refDom)=> refDom.innerHTML = lista;
const listItemsOfCantantes = generarListaCantantes(cantantes);
insertarListaDeCantantesAlDOM( listItemsOfCantantes, refListaCantantes);

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
let iteracion = 0;
for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }
}

 // ============ Ejercicio mental =============================
let myIteration;
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5
}
console.log("Final", myIteration); // 6

// ================ Function Scope ====================
/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
*/
function functionScope(){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;
    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
    
}
functionScope();
// console.log(myVar); //error: myvar is not defined
// console.log(myLet); //error: mylet is not defined
// console.log(myConst); //error: myConst is not defined

// ================ Reassigment and Redeclaration========
/*
 Declarar una variable significa que se reserva el nombre 
 en memoria en el scope actual. 
 
 Inicializar una variable es establecer el valor de la variable
*/
// Pueden ser reasignadas y redeclaradas dentro del 
// mismo contexto de función.
var userName = 10;
userName = 20; // Reasignación válida
var userName = 30; // Redeclaración válida en el mismo contexto de función
// Pueden ser reasignadas dentro del mismo bloque y no pueden 
// ser redeclaradas en el mismo ámbito.
let age = 10;
age = 20; // Reasignación válida
// let age = 30; // Error: No se puede redeclarar en el mismo ámbito
// No pueden ser reasignadas después de su inicialización y tampoco 
// pueden ser redeclaradas en el mismo ámbito.
const address = 10;
// address = 20; // Error: No se puede reasignar
// const address = 30; // Error: No se puede redeclarar

// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
    var a = "a";
    let b = "b";
    const c = "c"; 
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //
// console.log(b); //b is not defined
// console.log(c); //c is not defined

// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante 
  la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución
*/

/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/
console.log(phone); // undefined
var phone = "55-65-123-123";
console.log(phone); // 55-65-123-123

/*
  Las variables declaradas con let y const también se elevan al 
  inicio de su contexto, pero a diferencia de var, no se inicializan 
  automáticamente con undefined. La fase de inicialización de estas 
  variables no ocurre hasta llegar a la línea de código donde se declaran.
*/

for (let i; i <= 5; i++){
    console.log("Estoy dentro del ciclo for");
    console.log("valor de i ", i);
}

// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.
 Sintaxis:
    while( condición) sentencia;
    while ( condición ){
        sentencias;
    }
*/

// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.
 Sintaxis:
    while( condición) sentencia;
    while ( condición ){
        sentencias;
    }
*/
while(  confirm("¿Quieres que te genere tu número de la suerte ")  ){
    // ramdom devuelve un número aleatorio entre 0(incluido) y 1(excluido)
    console.log(`Tu número de la suerte es ${ Math.random() } `); 
    // Número aleatorio del 0 al 10(excluido)
    console.log(`Tu número de la suerte es ${ Math.random() * 10 } `); 
    // Número aleatorio del 1 al 11(excluido)           1 - 10.999999
    console.log(`Tu número de la suerte es ${ (Math.random() * 10) + 1 } `); 
    // Número aleatorio entero del 1 al 10(incluido)         
    alert(`Tu número de la suerte es ${ Math.floor ((Math.random() * 10) + 1) } `); 
}

//Generar 100 números aleatorios en el rango del 1 al 50(incluyendo).
// Ordenar e imprimir de forma descendente
let contador = 0;
while (contador <= 100){
    console.log(Math.floor(Math.random()*51));
    contador ++;
}




