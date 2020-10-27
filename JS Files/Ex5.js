//Exercise 5 - For
/* Part a:
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
bucle for de JavaScript para mostrar una alerta utilizando cada una de las 
palabras.*/
var myArray = [
    'banana', 'manzana', 'naranja', 'frutillas', 'pera'
];
console.log(myArray);
for (var i=0; i < myArray.length; i++) {
    alert(myArray[i]);
}
/* Part b:
Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.*/
for (var i=0; i < myArray.length; i++) {
    var a = myArray[i].substring(0,1).toUpperCase();
    var b = myArray[i].substring(1,myArray[i].length);
    myArray[i] = a + b;
}
console.log(myArray);
/* Part c:
Crear una variable llamada “sentence” que tenga un string vacío, luego al array 
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro 
de la variable sentence. Al final mostrar una única alerta con la cadena 
completa.*/
var sentence = '';
for (var i=0; i < myArray.length; i++) {
    sentence += myArray[i];    
}
alert(sentence);
/* Part d:
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con 
el número de la repetición, es decir que al final de la ejecución del bucle for 
deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 
9. Mostrar por la consola del navegador el al array final (utilizar console.log)
.*/
var myArray2 = [];
for (var i=0; i < 10; i++) {
    myArray2[i] = i    
}
console.log(myArray2);