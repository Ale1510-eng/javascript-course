const primerPaso = () => {
    console.log("*********01 - Inicio de mi programa*********");
};

const segundoPaso = () => {
    //const myPromise = new Promise( (fncCallbackResolve, fnsCallbackReject) => {
    const myPromise = new Promise((fncCallbackResolve, fncCallbackReject) => {
        console.log();
        let i = 0
        for (; i <= 1_000_000_000; i++) {
            i * 2;
        }
        if (i >= 1_000_000_000){
            fncCallbackResolve( "*********02 - Fin de la promesa *********" );
        } else {
            fncCallbackReject( {
                error: 100,
                 description: "Problemas en el cálculo de iteración "} )
        }
        //fncCallbackResolve("*********02 - Desarrollo de mi programa*********");
        
    });


return myPromise;
};

const tercerPaso = () => {
    console.log("*********03 - Fin de mi programa*********");
};


primerPaso();
segundoPaso()
    .then((resolve) => console.log( resolve ))
    .catch( (error) => console.log(error) )
tercerPaso();