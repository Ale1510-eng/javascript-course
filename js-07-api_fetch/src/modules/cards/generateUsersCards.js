import userCard from "./userCard.js"; //importacion por default

/**
 * Crea un gri de tarjetas de usuarios
 * @param {object array} userArray Arreglo de usuarios 
 */
const generateUsersCards = ( userArray ) =>{
    //const cards = userArray.map( (elemento, index, array) =>  );
    const cards =userArray.map(( user ) => userCard( user ) );
    return cards.join("");
};

export { generateUsersCards };


/* [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
] */