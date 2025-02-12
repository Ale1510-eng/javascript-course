import { Product } from "./Product.js";

/**
 * Herencia: mecanismo que permite a un objeto basarse en otro 
 * objeto existente para heredar propiedades y métodos. 
 * Esto permite la reutilización de código y la creación 
 * de relaciones entre objetos, lo que facilita la 
 * organización y la estructura del código.
 * 
 * Para heredar en la declaración de la clase se usa la palabra extends
 */

class Mouse extends Product {
    // Dot Per Inches: velocidad de respuesta
    #dpi
    
    constructor (productName, price, brand, dpi){
        super (productName, price, brand) // inicialización de los atributos de la clase superior
        this.#dpi = dpi; //Inicialización de la clase Mouse
    }

    set (dpi){
        this.#dpi = dpi;
    }

    get () {
        return `${this.#dpi} dpis`;
    }

   /*  printData(){
        // aqui se accede al get de product Name no al atributo encapsulado por eso no se usa el #
        return `${this.productName}`
    } */
// Sobreescritura de métodos
        card (){
            return `
            <h2>${this.productName}</h2>
            <h3>${this.dpi}</h3>
            <p>Llévatelo por ${this.price}
            `   
        }
    }

export { Mouse };