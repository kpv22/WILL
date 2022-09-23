/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let nString = num.toString();
  let reverse = nString.split("").reverse().join("");
  let intNUM = parseInt(reverse);
  return num === intNUM;

  // let numero = num.toString();
  // let reverse = numero.split("").reverse().join("");
  // parseInt(reverse);
  // return numero === reverse;
  // numeroSimetrico(4224);
  // No modifiques nada debajo de esta linea //

  // parseInt(String(num).split("").reverse().join("")) === num;
}
module.exports = numeroSimetrico;
