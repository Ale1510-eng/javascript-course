
/**
 * Obtener el nombre de la página
 * @param {string} filePath 
 * @returns el nombre de la página html
 */
const getHtmlPageName = ( filePath ) => {
    return filePath.split("/").pop();
}

export { getHtmlPageName };