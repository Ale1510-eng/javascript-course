import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";// ruta absoluta
import { amdRadeonRx, mouseGamePixart } from "../modules/class/amd-radeon-rx.js"; // ruta relativa
import { Product } from "../modules/class/Product.js";
import { Mouse } from "../modules/class/mouse.js";

/* 
Ruta relativa: 

Ruta absoluta:
*/

insertMainHeader();
insertMainFooter();

console.log( amdRadeonRx );
// Podemos acceder a los atributos usando el operador objeto.atributo (access and call), n.precedence: 17
// podemos acceder usando objeto[nombreAtributo]

// Accediendo al modelo
//console.log( amdRadeonRx.model );
// console.log( amdRadeonRx["model"] );
let attribute = "model"
//console.log( amdRadeonRx[attribute] );
attribute = "price";
//console.log(amdRadeonRx[attribute]);

//Acceder al atributo title e imprimir en consola
attribute = "title";
console.log(amdRadeonRx[attribute]);
console.log(amdRadeonRx["title"]);
console.log(amdRadeonRx.title);

// accediendo a atributos que no existen
/* console.log(amdRadeonRx.dato1);
console.log(mouseGamePixart.dato1);

console.log(mouseGamePixart.compatibilidad); */

//Obteniendo el numero de elementos 
//console.log(amdRadeonRx.compatibilidad.length);
//console.log(mouseGamePixart.compatibilidad.length);//Cannot read properties 

//Operador de encadenamiento opcional (?.)
console.log(mouseGamePixart.compatibilidad?.length);//Cannot read properties 

console.log(amdRadeonRx.imprimirPrecioMxN());
console.log(amdRadeonRx.imprimirPrecioDolares());

console.log(mouseGamePixart.imprimirPrecioMxN());
console.log(mouseGamePixart.imprimirPrecioDolares());

//=============== Usando la clase product ============

const mouseLogi = new Product("Mouse",400,"Logitech");
const tecladoGamer = new Product("Teclado");
const monitorHP = new Product("Monitor");
const bateria = new Product();

mouseLogi.price = 1;// al encapsular esto genera una nueva propiedad 
// unicamente para el objeto mouselogi, no para la clase product.
console.table(mouseLogi);

mouseLogi.productName = "ratoncito";

console.log(mouseLogi.productName);
console.log( mouseLogi.printData());

// ============== Usar la clase Mouse ==================

const mouseMac = new Mouse ("Mouse Mac", 1400, "Mac", 3000);

console.log(mouseMac.printData());

// Generando un array de Mice
const mice = [mouseLogi, mouseMac, new Mouse("m3",3,"N/A", 1000)];

for ( let mouse of mice){
    console.log( mouse.card() );
}
