//Exercise 6 - Functions
/* Part a:
Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
de dicha variable en la consola del navegador.*/
function addition (numberA,numberB) {
    return numberA + numberB;
}
var result = addition(5,6);
console.log(result);
/* Part b:
A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado.*/
function addition2 (numberA,numberB) {
    if ( isNaN(numberA) || isNaN(numberB)){
        alert('You are not entering numbers to the function');
        return 'NaN';
    } else {
        return numberA + numberB;
    }    
}
result = addition2(5,6);
console.log(result);
result = addition2('hola',6);
console.log(result);
/* Part c:
Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/
function validateInteger (number) {
    if (number-Math.floor(number) === 0) {
        return true;
    } else {
        return false;
    }
}
result = validateInteger(15.5);
console.log(result);
result = validateInteger(15);
console.log(result);
/* Part d:
A la función suma del ejercicio 6b) agregarle una llamada que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error 
y retorna el número convertido a entero (redondeado).*/
function addition3 (numberA,numberB) {
    if ( isNaN(numberA) || isNaN(numberB) ) {
        alert('You are not entering numbers to the function');
        return 'NaN';
    } else if (numberA-Math.floor(numberA) === 0 && numberB-Math.floor(numberB) === 0){
        return numberA + numberB;
    }  else {
        alert("It's a decimal number");
        return Math.round(numberA + numberB);   
    }
}
result = addition3(5,6);
console.log(result);
result = addition3(5.3,6);
console.log(result);
result = addition3('hola',6);
console.log(result);
/* Part e:
Convertir la validación del ejercicio 6b) en una función separada y llamarla 
dentro de la función suma probando que todo siga funcionando igual.*/
function validation (numberA,numberB) {
    if ( isNaN(numberA) || isNaN(numberB)){
        alert('You are not entering numbers to the function');
        return 'NaN';
    }
}
function addition4 (numberA,numberB) {
    
    if ( validation(numberA,numberB) === 'NaN' ) {
        return 'NaN';
    } else if (numberA-Math.floor(numberA) === 0 && numberB-Math.floor(numberB) === 0){
        var c = numberA + numberB;
        return c;
    }  else {
        alert("It's a decimal number");
        var c = numberA + numberB;
        return Math.floor(c);   
    }
}
result = addition3(5,6);
console.log(result);
result = addition3(5.3,6);
console.log(result);
result = addition3('hola',6);
console.log(result);