import { generateUsersCards } from "../modules/cards/generateUsersCards.js";


/**
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */
const getUsersUsingAsyncAway = async (url) =>{

    const createCards = ( usersArray ) =>{
        document.getElementById( "cards" ).innerHTML = generateUsersCards(usersArray);
    }

    const resolve = await fetch ( url );
    const usuarios = await resolve.json();
      createCards(usuarios.data);
      //.then( (usuarios) => console.log(usuarios.data/* [0].email */) )
    /* .catch( (error) => console.log(error)) 
    .finally( () => console.log("He terminado")); */
}
//delay=5& retardo de 5 segundos para pagina 2, solo para API fetch
//getUsersUsingAsyncAway("https://reqres.in/api/users?delay=5&page=2");
getUsersUsingAsyncAway("https://reqres.in/api/users?page=1");