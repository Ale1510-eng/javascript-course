/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () => {
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-operadores");
    console.log(descripcionOperadores);
    //descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    descripcionOperadores.innerHTML = '<span class="text-warning">document</span>: representa cualquier página web carga en el navegador.';

}
changeElementById();

/**
* Modificar elementos por su tag(etiqueta HTML)
*/
const changeElementsByTagName = () => {
    const listItems = document.getElementsByTagName("li");
    console.log(listItems);

    for (item of listItems){
        item.innerText = "Mi nuevo li"; 
    }

}
// changeElementsByTagName();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
    // document.getElementById("descripcion-operadores");
const element = document.querySelector("#descripcion-operadores");
console.log(element);

const elementParagraph = document.querySelector("p"); //seleccionar el primer paragraph que se encuentre
console.log(elementParagraph);

const classTextCenter = document.querySelector(".text-center");
console.log(classTextCenter);

const anchorAndTextWarning = document.querySelector("a.text-warning"); //primer anchor que tenga la clase text-warning
console.log(anchorAndTextWarning);

}
getElementsByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 */
const getListItems = () =>{
    /* const listItems = document.querySelectorAll("main li");
    console.log(listItems); */
    const imageItem = document.querySelector("img");
    console.log(imageItem);
    return imageItem;
}

getListItems();

// Cambiar la imagen de dinosaurio a la de web-developer
const changeImage = () =>{
    const refImage = getListItems();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Imagen ninja";
}

//changeImage();

const imagenPrincipal = getListItems();
imagenPrincipal.style.cursor = "pointer";

//imagenPrincipal.addEventListener (EventCounts, callback);
imagenPrincipal.addEventListener("click", () => {changeImage();});

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", () => {
    refBtnPrimary.style.display = "none";
});

// Aplicar visibility = "hidden" para el btn-secondary
refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

// Reestableccer la visualización de los botones primary y secondary
// Usando el evento mouseover: Se activa cuando el puntrero del ratín pasa sobre el botón
// display: block   visibility: "visible"
refBtnSuccess.addEventListener("mouseover", () => {
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible";
});




