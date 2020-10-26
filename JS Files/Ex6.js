//Exercise 6 - Functions
/* Part a:
Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
de dicha variable en la consola del navegador.*/
function addition (a,b) {
    var c = a + b;
    return c;
}
var d = addition(5,6);
console.log(d);
/* Part b:
A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado.*/
function addition2 (a,b) {
    if ( isNaN(a) || isNaN(b)){
        alert('You are not entering numbers to the function');
        return 'NaN';
    } else {
        var c = a + b;
        return c;
    }    
}
var d = addition2(5,6);
console.log(d);
var d = addition2('hola',6);
console.log(d);
/* Part c:
Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/
function validateInteger (a) {
    if (a-Math.floor(a) === 0) {
        return true;
    } else {
        return false;
    }
}
a = validateInteger(15.5);
console.log(a);
a = validateInteger(15);
console.log(a);
/* Part d:
A la función suma del ejercicio 6b) agregarle una llamada que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error 
y retorna el número convertido a entero (redondeado).*/
function addition3 (a,b) {
    if ( isNaN(a) || isNaN(b) ) {
        alert('You are not entering numbers to the function');
        return 'NaN';
    } else if (a-Math.floor(a) === 0 && b-Math.floor(b) === 0){
        var c = a + b;
        return c;
    }  else {
        alert("It's a decimal number");
        var c = a + b;
        return Math.floor(c);   
    }
}
var d = addition3(5,6);
console.log(d);
var d = addition3(5.3,6);
console.log(d);
var d = addition3('hola',6);
console.log(d);
/* Part e:
Convertir la validación del ejercicio 6b) en una función separada y llamarla 
dentro de la función suma probando que todo siga funcionando igual.*/
function validation (a,b) {
    if ( isNaN(a) || isNaN(b)){
        alert('You are not entering numbers to the function');
        return 'NaN';
    }
}
function addition4 (a,b) {
    
    if ( validation(a,b) === 'NaN' ) {
        return 'NaN';
    } else if (a-Math.floor(a) === 0 && b-Math.floor(b) === 0){
        var c = a + b;
        return c;
    }  else {
        alert("It's a decimal number");
        var c = a + b;
        return Math.floor(c);   
    }
}
var d = addition3(5,6);
console.log(d);
var d = addition3(5.3,6);
console.log(d);
var d = addition3('hola',6);
console.log(d);