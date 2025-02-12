console.log('JS-02-funciones')

/* 
  Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas.

  Recomendaciones para el uso de las funciones:

  -Nombre descriptivo: Debe inidcar claramente lo que hace.
    Se recomienda comenzar con un verbo.
  -Parámetros: Debe tener 0 o más parámetros, separador por coma.
  - Se recomienda no tener más de 3 parámetros
    dificulta la legibilidad y estructura del código
    Dificulta las pruebas unitarias
  -Seguir el principio SOLID, sobre el principio de responsabilidad única.
    (Single Responsability Principle).
    -Retorno: Debe retornar un valor, aunque sea undefined.
    - Evitar efectos secundarios: Una función no debe modificar variables externas
=====================================================================
     ----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
*/

console.log(saludar('Ale'));

function saludar(nombre){
    return `Hola ${nombre}, soy una función declarada`;
}

// Agregar el parámetro nombre y mostrar 'Hola nombre, soy una función declarada'  

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


//Realizar una funcion declarada que sume dos números, retorna el resultado de la suma

function sumar(numero1, numero2){
    return numero1 + numero2;
}
//Llamar a la función expresada antes de declararla es incorrecto
/* console.log(sumarDosNumeros(3,6)); */


// Función anónima: no tiene el nombre
const sumarDosNumeros = function (numero1,numero2){
    return numero1 + numero2;
};

console.log(sumarDosNumeros(3,6)); //9

let hora = 10;
let saludarDependiendoHora;

if (hora < 12){
    saludarDependiendoHora = function(){
        return 'Buenos  días';
    };
} else 
    saludarDependiendoHora = function(){
        return 'Buenas  tardes';
    };

console.log(saludarDependiendoHora());

//===================================================================

/* 
------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos ); 
*/
(function setUp( name ){
    console.log( `Hola ${name}, soy una función autoinvocada` );
})('Ale♥');

//==================================================================

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// realizar una función declarada que calcule el área de un rectángulo

/* function calcularAreaRectangulo(base,altura){
    return base * altura;
} */

/* const calcularAreaRectangulo = function (base,altura){
    return base * altura;
}; */

const calcularAreaRectangulo = (base, altura) => base * altura;

console.log(`El area del rectángulo es ${calcularAreaRectangulo(5,5)} cm2`);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/
const saludarPersona = (nombre) => `Hola ${nombre}, bienvenid@`;
const saludarPersonaConDefaultParameters = (nombre = 'Invitado') => `Hola ${nombre}, bienvenid@`;

console.log(saludarPersonaConDefaultParameters()); // Hola Invitado, bienvenid@
console.log(saludarPersonaConDefaultParameters('Ale ♥')); //Hpla Ale ♥, bienvenid@

console.log(saludarPersona()); // Hola undefined, bienvenid@
console.log(saludarPersona('Ale ♦')); // Hola Ale ♦, bienvenid@

//Realizar una función que tenga de parámetros el nombre y cohorte
// Los valores por default de los parámetros son nombre = participante y cohorte "cohorte de Generation"
//Retornar el mensaje ' Hola nombre, bienvenido a la cohorte de Generation' 
//Retornar el mensaje ' Hola Dae, bienvenido a la cohorte Ch50' 

const saludarParticipanteCohorte = (nombre = 'participante', cohorte = 'cohorte de Generation') => `Hola ${nombre}, bienvenid@ a la ${cohorte}`;

console.log(saludarParticipanteCohorte()); //Hola participante, bienvenid@ a la cohorte de Generation
console.log(saludarParticipanteCohorte('Ale', 'cohorte Ch50')); //Hola Ale, bienvenid@ a la cohorte Ch50

console.log(parseInt('Faba')); //NaN
console.log(parseInt('Faba', 10)); //NaN
//base hexadecimal (16 digitos): 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
//base octal (8 digitos): 0,1,2,3,4,5,6,7,8
//base binaria (2 digitos): 0, 1
console.log(parseInt('Faba', 16)); // 64186 valor decimal de la base hexadecimal

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Arrow function que reciba un parámetro y lo imprima en consola
 const imprimirMensajeConsola = mensaje => console.log(mensaje);
 
 /**
   Arrow function que reciba un parámetro y lo imprima con alert
  */
 const imprimirMensajeAlert = mensaje => alert(mensaje);

 const mensajeTitle = mensaje => document.getElementById('title').innerText = mensaje;

/**arrow function que recibe como parametros un mensaje y una opcion para imprimir el mensaje */
const seleccionarEImprimir = (mensaje = '¡Hola!', opcion = 'consola') => {
    if (opcion == 'consola'){
        imprimirMensajeConsola(mensaje);
    }
    else if (opcion == 'alert'){
        imprimirMensajeAlert(mensaje);
    } else if (opcion == 'titulo'){
        mensajeTitle(mensaje);
    }
};

seleccionarEImprimir('Hola ♥', 'titulo');

// usar función de callback del ejercicio anterior
const imprimirMensajeConCallback = (mensaje, callback) => callback ( mensaje );

imprimirMensajeConCallback('Hola Ale', imprimirMensajeConsola);
imprimirMensajeConCallback('Hola Ale', mensajeTitle);
//imprimirMensajeConCallback('Hola Ale', 589); //callback is not a Function


//Que retorna una función que no tiene retorno > Undefined
console.log(console.log('Hola Alejandra')); //Hola Alejandra y Undefined

//=====================================================================================
//-----------------------------Pase por valor y por referencia -----------------------------------
//Una función es un objeto al igual que un array 

let colorPintura = "rojo";
function cambiarColorPintura(color){
  console.log(`El color que llega a la función es ${color}`); // rojo
    color = "azul";
    console.log(`El color de la pintura que imprime la función es ${color}`); // azul
}
cambiarColorPintura(colorPintura);
console.log(`El color de la pintura final es ${colorPintura}`); // rojo

//============================ Pase por referencia =================
const colores = ["rojo", "azul", "verde"];
function cambiarColorArreglo(arreglo){
  console.log(`El arreglo que llega a la función es ${arreglo}`); // "rojo", "azul", "verde"
  arreglo[0] = "negro";
  console.log(`Se imprimen los colores en la función: ${arreglo}`); // "negro", "azul", "verde"
}
cambiarColorArreglo( colores );
console.log(`Los colores finales dentro del arreglo son: ${colores}`); // "negro", "azul", "verde"

// =============================== Método sort() =====================================
const series = ["Winnie", "Arnold", "avengers" ,"Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); // ['Arnold', 'Atreve', 'Digimon', 'Naruto', 'Winnie', 'avengers']
const numeros = [ 122, 2, 1, 55]; 
console.log( numeros.sort() ); // [1, 122, 2, 55]
const ordenarNumeros = ( numA, numB) => {
  if( numA < numB ){
     return -1; // numA va antes que numB
  } else if( numA > numB ) {
     return 1; // numA va después que numB
  } else { // Los números son iguales
    return 0
  }
}
console.log( ordenarNumeros( 3,6 ) ); // -1
console.log( ordenarNumeros( 6,3 ) ); // 1
console.log( ordenarNumeros( 3,3 ) ); // 0

const numbers = [  1,   10,   3,   100,   5];
console.log( numbers.sort( ordenarNumeros ) ); //  [1, 3, 5, 10, 100]
//  [1,10     3,100,5];
//  [1,3     10,100,5];
//  [1,3,10,100   ,5 ];
//  [1,3,10,5,   100 ];
//  ... después de repetir las iteraciones nuevamente
//  [1,3,5,10,,100 ];

const ordenarNumerosSimplificado = (numA,numB) => numA-numB;
const otrosNumeros = [  1,   10,   3,   100,   5];
console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]
//Ordenamiento de forma ascendente
const numerosDeLaSuerte = [  7,   21,   14,   28,   35];
console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) );

//Ordenar de forma descendente los siguientes números:
const numCh50 = [19, 15, 13, 18, 5];
console.log(numCh50.sort( ((a,b) => b-a) ));




