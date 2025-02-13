
/**
 * Validar si el nombre ingresado es válido
 * @param {string} name
 * @return {boolean} valor true indica que el nombre es valido 
 */


const checkNameInput = nombre =>{
    if (nombre.includes("  ")){
        return false;
    } else if(/\d/.test(nombre) ){
        return false;
    } else if (nombre.length <= 1) {
        return false;
    }else if (nombre == null){
        return "Nombre null"
    } else if (String(nombre) == "NaN" ){
        return false;
    }

}

export {checkNameInput}