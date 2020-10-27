//Exercise 2 - Strings
/* Part a:
Crear una variable de tipo string con al menos 10 caracteres y convertir todo 
el texto en mayúscula (utilizar toUpperCase).*/
var myVar = 'estudiantes';
console.log(myVar);
myVar = myVar.toUpperCase();
console.log(myVar);
/* Part b:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los primeros 5 caracteres guardando el resultado en una nueva 
variable (utilizar substring).*/
var sb = 'anticuados';
var sb2 = sb.substring(0,5);
console.log(sb,sb2);
/* Part c:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring).*/
var sc = 'finalmente';
var n = sc.length;
var sc2 = sc.substring(n-3,n);
console.log(sc,sc2);
/* Part d:
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el 
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y 
el operador +).*/
var sd = 'MONDADIENTES';
var sd1 = sd.substring(0,1);
sd1 = sd1.toUpperCase();
var sd2 = sd.substring(1,sd.length);
sd2 = sd2.toLowerCase();
var sdNew = sd1 + sd2;
console.log(sd,sdNew);
/* Part e:
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en 
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).*/
var se = 'estudiantes responsables';
var space = se.indexOf(' ');
console.log(se, space);
/* Part f:
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en 
mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
toUpperCase, toLowerCase y el operador +).*/
var sf = 'PREFERENCIAS MUSICALES';
var total = sf.length;
var space = sf.indexOf(' ');
var sf1 = sf.substring(0,space+1);
var sf2 = sf.substring(space+1, total);
var sf11 = sf1.substring(0,1);
sf11 = sf11.toUpperCase();
var sf12 = sf1.substring(1,space+1);
sf12 = sf12.toLowerCase();
var sf21 = sf2.substring(0,1);
sf21 = sf21.toUpperCase();
var sf22 = sf2.substring(1,total);
sf22 = sf22.toLowerCase();
var sfNew = sf11 + sf12 + sf21 + sf22;
console.log(sf, sfNew);