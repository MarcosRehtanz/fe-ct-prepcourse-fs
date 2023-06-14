/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   for (var clave in objeto){
      arreglo.push([clave, objeto[clave]]);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var letra = '';
   for (var i = 0; i < string.length; i++){
      letra = string[i];
      if(letra in objeto){
         objeto[letra]++;
      }else{
         objeto[letra] = 1;
      }
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   string.split('');
   var aUpper = [];
   var aShort = [];
   for (var i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         aUpper.push(string[i]);
      }else{
         aShort.push(string[i]);
      }
   }

   return aUpper.join('') + aShort.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var init = 0;
   var word = '';
   var mirrorFrase = '';
   for (var i = 0; i < frase.length; i++){
      if(frase[i] === ' '){
         word = frase.slice(init, i);
         mirrorFrase += word.split('').reverse().join('') + ' ';
         init = i+1;
      } else if (i == frase.length-1){
         word = frase.slice(init, i+1);
         mirrorFrase += word.split('').reverse().join('');
         init = i+1;
      }
   }
   return mirrorFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var strNum = numero.toString();
   var strNumInverse = strNum.split('').reverse().join('');
   if (strNum == strNumInverse){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   //var str = '';
   
   //for(var i = 0; i < string.length; i++){
   //   var letra = string.charAt(i);
   //   if (letra !== 'a' && letra !== 'b' && letra !== 'c'){
   //      str += letra;
   //   }
   //}

   //var str2 = string.split('').map((letra) =>{
   //   if(letra !== 'a' && letra !== 'b' && letra !== 'c'){
   //      return letra;
   //   }
   //})
   //return str2.join('');

   return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
   });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];
   for(var i = 0; i < array1.length; i++) {
      if(array2.includes(array1[i])){
         interseccion.push(array1[i]);
      }
   }
   return interseccion;
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
