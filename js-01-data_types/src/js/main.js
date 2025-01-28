console.log('Sesión JS-01 ')

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos
- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/
// ================= Datos primitivos ==================
/* 
    String: Tipo de dato que representa una secuencia de caracteres. Puede incluir textos, número, esoacio, símbolos. Seimpre se define con comillas.
*/

console.log("Kati sería unas pantunflas"); //Se puede usar comillas dobles
console.log('Alberti sería unas botas'); //Se puede usar comillas dobles
console.log(`Verónica sería unos mocasines`) // usando backticks (apóstrofe grave) para Template Literals

/* 
    - String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.    
*/
// Mostrar en consola "El resultado de 3 * 4 = 12 pesos"
let valor1 = 3;
let valor2 = 4;

console.log('El resultado de ' + valor1 + ' * ' + valor2 + ' = ' + valor1*valor2 + ' pesos');

console.log(`El resultado de ${valor1} * ${valor2} es = ${valor1*valor2} pesos`);

/*
 Tipos de datos number.
 - números positivos: 100, 1, 0.258
 - números negativos: -1 , .50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string' empty string
console.log( typeof " " ); // 'string'
console.log( 3*"pitufo trabajador" ); // NaN
console.log( typeof ( 3 * "pitufo trabajador") ); // 'number'
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3Viernes temático" ) ); // 'string'
console.log( 4 /0 ); // +Infinity

/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/
console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`); // 0.30000000000000004

console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991 rango máximo para hacer operaciones

console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993 
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995 
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
 un bigint solo puede hacer operaciones con otro bigint
 van acompañados de una letra n al final
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint

console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }  `);
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 2n }  `);
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 3n }  `);
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 4n }  `);
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 5n }  `);
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 6n }  `);

/* shift + alt + abajo o arriba */
/* Para mover tecla alt + abajo o arriba */
let myName;

console.log(typeof(myName)); // 'Undefined'

/* 
    Tipo de dato null
    - Una variable que intencionalmente se boora del tipo de dato
*/

let myAge;
console.log(`tipo de dato en myAge ${typeof myAge}`); //undefined
myAge = 20;
console.log(`tipo de dato en myAge ${typeof myAge}`); //number
myAge = null; //Intencionalmente se borra el tipo de dato
// No es correcto usar typeof con un dato null
console.log(`tipo de dato en myAge ${typeof myAge}`); // object

//Forma correcta de verificar si es null
console.log(`myAge es null?  ${ myAge === null } `);// true

/*
    Tipo de dato boolean
    Tiene dos estados : true y false
*/

const isActive = true;

console.log(typeof isActive ); // boolean

/* 
    Conversion de datos (type casting)

    El type casting es el acto de convertir variables de un tipo de datos a otro. esto puede ser implicito (automático) o explicito (forzado por el desarrollador).
*/

//Conversión implicita
const resultado = '5' + 2; //52 Número convertido a string
const multiplicacion = '5' * 3; // 15 String convertido a número
const division = 'two' * 6; //NaN


// Conversión explicita

const edadMascota = 10;
// conversión explicita a string =====================================
const edadMascotaString = String(edadMascota);
console.log(`Mi mascota tiene ${edadMascotaString} años`);
console.log(`Mi mascota tiene ${edadMascota} años`);

console.log( String(true) ); // 'true' 
console.log( String(null) ); // 'null'
console.log( String(undefined) ); // 'undefined'
console.log( String([]) ); // 'empity Array->'
console.log( String([1,2,3,4,5, null,3]) ); // '1,2,3,4,5,3'  No se muestra el null
console.log( String({name:'Ale', active:true}) ); // [object, Object] No importa que contenga elementos, no se pueden recuperar los elementos
// Para los objetos se recomienda no usar String(), usar JSON.stringyfy(object)
// convierte un objeto en formato JSON. Formato intermediario entre dos lenguajes distintos (JS y Java)
console.log( JSON.stringify( {name:"Ale", active:true} )); //{name:'Ale', active:true}

// conversión implicita a number =====================================
const costo = "100";
const costoConIVA = costo *1.16 ; //116.00 conversión implicita de string a number

// conversión explicita a number =====================================
const precioCroquetas = "2000";
const precioJabon = "300.50";
const precioVitaminas = "600.30";
const costoTotal = Number(precioCroquetas) + parseFloat(precioJabon) + parseFloat(precioVitaminas); //2000300.50600.30
console.log(costoTotal);

/* 
    Number() vs parseInt()
    -Number convierte a enteros y decimales
    -Number devuelve NaN si la cadena contien algún caracter no númerico
    -Con parseInt y parseFloar, si la entrada comienza con un valor no númerico devuelve NaN
    -parseInt convierte solo la parte entera
    -parseInt y parseFloat realiza la conversión hasta encontrar un cácter no númerico
*/

console.log( Number("68.58") ); //68.58
console.log( parseInt("68.58") ); //68
console.log( parseFloat("68.58") ); // 68.58

console.log( Number("68.58 dolares") ); //NaN
console.log( parseInt("68.58 dolares") ); //68
console.log( parseFloat("68.58 dolares") ); // 68.58

console.log( Number("$68.58 dolares") ); //NaN
console.log( parseInt("$68.58 dolares") ); //NaN
console.log( parseFloat("$68.58 dolares") ); // NaN

console.log( Number("68-58") ); //NaN
console.log( parseInt("68-58") ); //68
console.log( parseFloat("68-58") ); // 68

console.log(Number(true)); // equivale a 1
console.log(Number(false)); // equivale a 0

console.log(Number([])); //equivale a 0
console.log(Number([30])); //equivale a 30
console.log(Number([30, 40])); //NaN

//conversión a boolean
// En la conversión a boolean los siguientes valores son false
// ""(empity string) +, 0, null, undefined
console.log(Boolean(1)); //True
console.log(Boolean(10000)); //True
console.log(Boolean(-1000)); //True
console.log(Boolean(0)); // False

console.log(Boolean("")); //False
console.log(Boolean(" ")); //True
console.log(Boolean("1")); // true
console.log(Boolean("0")); //True

// Resumen:
// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1
// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"
// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );