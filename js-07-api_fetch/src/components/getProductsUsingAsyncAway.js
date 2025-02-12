

async function nameFunction() {
  await fetch(url);
}

const getProductsUsingAsyncAway = async (url) => {

  //try {
    //await es análogo a .then
    console.log("Estoy iniciando en la función con Asyn y Away")
    const resolve = await fetch(url);
    const products = await resolve.json();
    console.log(products);
    console.log("Finalizando la petición con Asyn y Await")
  //} catch (error) {

  //}

};

const realizaSecuenciaPrincipal = () => {

  try {
    console.log("Antes de la llamada de la función");
    getProductsUsingAsyncAway("https://fakestoreapi/products");
    console.log("Después de la llamada de la función");

  } catch (error) {
    console.warn("No corro, no grito, no empujo");
    console.error("¿Qué pasó?", error);
  }

}
getProductsUsingAsyncAway();
realizaSecuenciaPrincipal();
