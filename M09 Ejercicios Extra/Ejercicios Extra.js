/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   arrayPadre = Object.entries(objeto);   //Ejemplo de la profe
   //el metodo entries transforma el objeto en una matriz (array de arrays). Cada elemento del array es un array con
   //la Key y el value (y pasa los valores a string)
   return arrayPadre;

}
   // for (var key in objeto) {
   //    if (objeto.hasOwnProperty(key)) {
   //       arrayPadre.push([key, objeto[key]]);
   //    }
   // }  return arrayPadre;
// } Este ejemplo hice con las busuqedas en google, pero es mas vueltero.
   
   //usamos objeto[key] para acceder al valor correspondiente a esa clave en el objeto.
   // En JavaScript, los objetos son colecciones de pares clave-valor, y 
   // para acceder a los valores, necesitas saber la clave asociada. 
   // Utilizamos la notación de corchetes (objeto[key]) para acceder al valor 
   // correspondiente a una clave específica (key) en un objeto.




function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   //Osea, agrego valor 1 si aparece x primera vez, o sumo ++ si ya aparecio. Estas son las opciones que
   // tengo para formar mi codigo
   // Tu código:

//La opcion que muestra la profesora

var obj = {};

for (var i = 0 ; i <string.length ; i ++) {
   if(!obj[string[i]]){ // Si no existe en el objeti (!obj) la letra donde esta i ([string[i]]) 
   obj[string[i]]=0
} 
obj[string[i]]++;
}
var ordenarClaves = Object.keys(obj).sort();
var objOrdenado = {}

for (var i = 0 ; i< ordenarClaves.length ; i++){
   objOrdenado[ordenarClaves[i]] =obj[ordenarClaves[i]] //aca establezo la key, y luego el valor de la key
   //objeto lo saco de ir itinerando uno x uno el arreglo ordenado, y el value de la key
   //lo consigo de buscar esa posicion en el obj original y sacar ese valor.
}


return obj;



//    La opcion que investigue en google.

// var nuevoObjeto = {}

// var letrasOrdenadas = string.split('').sort(); // separo el string en array, y reordeno alfabeticamente con sort.

// for (var i = 0 ; i <letrasOrdenadas.length ; i++){

// var letra = letrasOrdenadas[i];

// if (nuevoObjeto[letra]) { // si letra es true, es porque ya existe.
//    nuevoObjeto[letra]++; //Entonces si ya existe le sumo 1
// } else {
//    nuevoObjeto[letra] = 1; // Pero si no existe, la creo con valor en 1
// } // la logica aca seria comenzar por sumar valor si existe, si no crearla.
// }
// return nuevoObjeto;
}




function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:



   var mayuscula = ''; //para usar +=, deberia tener las variables dentro del bucle for 
   //es lo que creo ahora ja.
   var minuscula  = '';

   for (var i = 0; i < string.length; i++) {  

       if (string[i] === string[i].toUpperCase()) { //chequeo si la letra en i es igual a su version en mayuscula.
           mayuscula = mayuscula+ string[i];// agrega el caractera mayuscula
           
       } else {
           minuscula = minuscula +string[i];//aca agrega las minusculas
           
       }
   }
   return mayuscula + minuscula ;// primero retorno las mayusuclas y luego las minusculas
}




function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   nuevoString = ''

   fraseDos = frase.split(' ') // con espacio para dividir en palabras

   for (var i = 0 ; i < fraseDos.length ; i++) {

      nuevoString += fraseDos[i].split('').reverse().join('') + ' '; //asi divido la palabra en caracteres individuales, 
      //invierte el orden de los caracteres y luego los une nuevamente en una palabra invertida.
      //aca en cambio no pongo espacio entre las comillas del split para dividir por caracteres, y no palabras.

      //uso += para conectar las nuevas palabras en nuevoString. La concatenamos con ese simbolo.
   }

   return nuevoString.trim(); //para eliminar cualquier espacio en blanco adicional al final de nuevoString // 
   //elimina todos los espacios de un cadena de texto, dejando solo un espacio entre cada palabra.

}
//ahi tmb podria haber hecho un for que vaya hacia atras en cada elemento, interesante.

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

numero = numero.toString();
if (numero === numero.split('').reverse().join(''))

{ return "Es capicua";
} else {
   return "No es capicua";
}
}
// La opcion de la profe:

// var num = num.toString()
// var numInvertido = '';

// for (var i = num.length - 1 ; i >= 0; i--) //arranco de atras para adelante seria
// numInvertido += num[i] // Lo voy concatenando 

// numInvertido= parseInt(numInvertido) // Lo transformo a numero nuevamente

// if (num == numInvertido) { return " Es capicua"

// } else return
// {"No es capicua"
// }

// Note: parseFloat runs in the end (even though it is on the first line of the function) 
//on the reversed number and removes any leading zeroes.
//Esto si tengo q reversar un numero pero sacarle los ceros extras q puedan tener al principio.

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

  //opcion googleando  return string.replace(/[abc]/g, ''); 

  var nuevoString = '';
  for (var i = 0; i < string.length; i++) {
    if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){ // si posiciion de i NO ES igual a la letra
       nuevoString += string[i]  //+= significa que lo voy concatenando
    }
 
 } return nuevoString;
 
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
var nuevoArray = arrayOfStrings.sort(function(a,b){ // metodo sort.
   return a.length - b.length; // si es mayor, igual o menos para saber si intercambia lugares o no
})
return nuevoArray;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   

var nuevoArray = [];

for ( var i = 0 ; i <array1.length ; i ++){
 for (var j = 0 ; j <array2.length ; j ++){
if (array1[i] === array2[j]){
   nuevoArray.push(array1[i])};
}
 } return nuevoArray;
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
