//Exercise 2 - Strings
/* Part a:
Crear una variable de tipo string con al menos 10 caracteres y convertir todo 
el texto en mayúscula (utilizar toUpperCase).*/
var strA = 'estudiantes';
console.log(strA);
strA = strA.toUpperCase();
console.log(strA);
/* Part b:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los primeros 5 caracteres guardando el resultado en una nueva 
variable (utilizar substring).*/
var strB = 'anticuados';
var strBFirst = strB.substring(0,5);
console.log(strB,strBFirst);
/* Part c:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring).*/
var strC = 'finalmente';
var n = strC.length;
var strCLast = strC.substring(n-3,n);
console.log(strC,strCLast);
/* Part d:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el 
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y 
el operador +).*/
var strD = 'MONDADIENTES';
var strDFirst = strD.substring(0,1);
strDFirst = strDFirst.toUpperCase();
var strDSecond = strD.substring(1,strD.length);
strDSecond = strDSecond.toLowerCase();
var strDNew = strDFirst + strDSecond;
console.log(strD,strDNew);
/* Part e:
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en 
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).*/
var strE = 'estudiantes responsables';
var space = strE.indexOf(' ');
console.log(strE, space);
/* Part f:
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en 
mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
toUpperCase, toLowerCase y el operador +).*/
var strF = 'PREFERENCIAS MUSICALES';
var total = strF.length;
var space = strF.indexOf(' ');
var strFFirst = strF.substring(0,space+1);
var strFSecond = strF.substring(space+1, total);
var strFFIrstFirst = strFFirst.substring(0,1);
strFFIrstFirst = strFFIrstFirst.toUpperCase();
var strFFirstLast = strFFirst.substring(1,space+1);
strFFirstLast = strFFirstLast.toLowerCase();
var strFSecondFirst = strFSecond.substring(0,1);
strFSecondFirst = strFSecondFirst.toUpperCase();
var strFSecondLast = strFSecond.substring(1,total);
strFSecondLast = strFSecondLast.toLowerCase();
var strFNew = strFFIrstFirst + strFFirstLast + strFSecondFirst + strFSecondLast;
console.log(strF, strFNew);