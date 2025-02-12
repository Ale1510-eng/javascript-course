
const array = [1,2,3,4,6,6, 1, 9, 8, 2, 7, 3, 6, 9, 8, 2, 1, 7, 3, 6, 9, 8, 1, 7, 3, 2, 9, 6, 1, 8, 7, 2, 3, 9, 6, 8, 7, 1, 2, 9, 3, 6, 8, 1, 7, 2, 9, 3, 6, 7, 1, 9, 8, 3, 2, 6, 7, 1, 9, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 6, 7, 9, 1, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 7, 9, 6, 1, 7, 9, 1, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 7, 9, 6, 1, 1,2,3,4,6,6, 1, 9, 8, 2, 7, 3, 6, 9, 8, 2, 1, 7, 3, 6, 9, 8, 1, 7, 3, 2, 9, 6, 1, 8, 7, 2, 3, 9, 6, 8, 7, 1, 2, 9, 3, 6, 8, 1, 7, 2, 9, 3, 6, 7, 1, 9, 8, 3, 2, 6, 7, 1, 9, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 6, 7, 9, 1, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 7, 9, 6, 1, 7, 9, 1, 8, 3, 2, 6, 7, 9, 1, 3, 8, 2, 7, 9, 6, 1 ];
const pinkyPromise = () => {
    const myPromise = new Promise ( ( resolve, reject ) => {
        // TODO evaluar el parámetro y determinar si se resuelve o rechaza
        if (array.includes(5)){
            resolve ( "El array incluye el número 5" );
        } else {
            reject ({
                error: 200,
                description: "El array no incluye el número 5"
            });
        }
    });

    return myPromise;
};

const secuenciaPrincipal = () => {

    console.log( "♣ Iniciando mi secuencia principal ♣" );
    // TODO hacer el manejo de la promesa pinkyPromise (miArgumento)
    pinkyPromise(array)
        .then( resolve => console.log(resolve))
        .catch(reject => console.log(reject));
    console.log( "♣ Terminando  mi secuencia principal ♣" );

};

secuenciaPrincipal();