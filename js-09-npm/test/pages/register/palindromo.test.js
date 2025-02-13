import { palindromo } from "../../../src/pages/register/palindromo.js"

test("Verificar que la palabra ingresada sea un palíndromo", ()=>{
   expect( palindromo("oso") ).toBeTruthy();
   expect( palindromo("reconocer") ).toBeTruthy();
   expect( palindromo("Anita lava la tina") ).toBeTruthy();   
});

test("Verificar que la palabra ingresada No se un palíndromo", ()=>{
    expect( palindromo("Aguacate") ).toBeFalsy();
    expect( palindromo("ay mi cabeza") ).toBeFalsy();
    expect( palindromo("") ).toBeFalsy();
    expect( palindromo(" ") ).toBeFalsy();
 
 });