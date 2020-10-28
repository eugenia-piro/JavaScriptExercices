//Exercise 5 - For
/* Part a:
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
bucle for de JavaScript para mostrar una alerta utilizando cada una de las 
palabras.*/
var fruits = [
    'banana', 'manzana', 'naranja', 'frutillas', 'pera'
];
console.log(fruits);
for (var i=0; i < fruits.length; i++) {
    alert(fruits[i]);
}
/* Part b:
Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.*/
for (var i=0; i < fruits.length; i++) {
    var a = fruits[i].substring(0,1).toUpperCase();
    var b = fruits[i].substring(1,fruits[i].length);
    fruits[i] = a + b;
}
console.log(fruits);
/* Part c:
Crear una variable llamada “sentence” que tenga un string vacío, luego al array 
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro 
de la variable sentence. Al final mostrar una única alerta con la cadena 
completa.*/
var sentence = '';
for (var i=0; i < fruits.length; i++) {
    sentence += fruits[i];    
}
alert(sentence);
/* Part d:
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con 
el número de la repetición, es decir que al final de la ejecución del bucle for 
deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 
9. Mostrar por la consola del navegador el al array final (utilizar console.log)
.*/
var repetitionNumber = [];
for (var i=0; i < 10; i++) {
    repetitionNumber[i] = i    
}
console.log(repetitionNumber);