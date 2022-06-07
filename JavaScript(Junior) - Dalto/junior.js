// //  Tipos de variables 

// String = "hola como va";
// Number = 25;
// Boolean = true;

// // Formas de declarar una variable
// var número = 25; //variable global 
// let cadena = "hola"; //variable local, solo se reconoce en un bloque de código 
// const Boolean = false; //variable constante, no puede cambiar su valor 

// // Casos especiales
// let num = null; //la variable se inicializa intencionalmente con valor nulo
// let num2 = NaN; //not a number significa que la variable con la que queremos operar no es un numero

// // Funcion prompt
// let nombre = prompt("decime tu nombre"); //el nombre ingresado se almacena en 'nombre'(abrir consola al usuario)

// // Operadores de asignación
// var n = 10;
// n += 5; //suma al valor de la variable
// n -= 4; //resta al valor de la variable
// n *= 2; //multiplica al valor de la variable
// n /= 3; //divide al valor de la variable
// n %= 10; //modulo del valor de la variable
// n **= 5; //potencia del valor de la variable
// n++; //incrementa en 1
// n--; //decrementa en 1
// n ** 2; //eleva a la potencia según el número

// // Operadores aritméticos
// let num1 = 1;
// let nume2 = 2;
// num1 == nume2; //igualdad en valor (no diferencia tipo de dato)
// num1 === nume2; //estricta igualdad, valor y tipo de dato
// num1 != nume2; //desigualdad en valor
// num1 !== nume2; //desigualdad estricta, valor y tipo de dato
// num1 < nume2; //menor
// num1 > nume2; //mayor
// num1 <= nume2; //menor o igual
// num1 >= nume2; //mayor o igual

// // Operadores lógicos
// let valor = true;
// let valor2 = true;
// let resultado1 = valor && valor2; //operador "y" (devuelve true si ambas son true)
// let resultado2 = valor || valor2; //operador "o" (devuelve true si alguna de las 2 expresiones es true)
// let resultado3 = !valor2; //devuelve true si la expresion es falsa y viceversa

// // Concatenación
// var cad1 = "Hola";
// var cad2 = "como estás?";
// concaten = cad1 + cad2; //de esta forma concateno 2 cadenas
// concaten2 = "" + 5 + 10; //para hacerlo con nros como texto, tengo que forzar el string
// frase = cad1.concat(cad2); //método para concatenar
// frase2 = "Hola" + cad2 + " todo bien?"; //también se puede con signos +
// frase3 = `Hola ${cad2} todo bien`; //forma para evitar errores con backticks

// // Condicionales
// var algo = "JuanJo";
// if (algo == "JuanJo") {
//     alert("hola" + algo);
// } else if (algo != "JuanJo") {
//     alert("no es tu nombre");
// } else {
//     alert("chau");
// }

// // Arrays
// let array = ["valor", "valor2", 25, true]; // puede contener cualquier tipo de dato
// document.write(array[2]); //para mostrar una posición específica (arranca de 0)
// let arrayAsociado = {   //se puede asociar y después se llama por el dato asociado en vez de la posición
//     marca: "toyota",
//     modelo: "corolla",
//     año: 2018,
//     tipo: "sedan"
// }
// document.write(arrayAsociado["marca"]);
// document.write(arrayAsociado["modelo"]);

// // Bucles
// let n1 = 10;
// let n2 = 5;

// while (n1 > n2) {
//     n2++;
//     document.write("Sigue siendo mayor<br>");
// }

// do {
//     n2++;
//     document.write("Sigue siendo mayor<br>")
// } while (n1 > n2);

// for (let i = 0; i < 10; i++) {
//     document.write("Continuar iterando <br>")
// }

// let animales = ["gato", "perro", "vaca"];

// for (aux in animales) {  //muestra las posiciones de cada elemento
//     document.write(aux, "<br>");
// }

// for (aux of animales) {  //muestra el contenido de cada elemento
//     document.write(aux, "<br>");
// }
// // se puede utilizar la sentencia break o continue en cualquier bucle

// // Funciones
// function saludar() {    //Se crea con la palabra reservada "function"
//     prompt("Hola, cómo estás?");
//     alert("Todo bien, vos?");
// }
// saludar();  //llamado a la función

// function devolverEdad() {   //función con retorno
//     let respuesta = prompt("Cuantos años tienes?");
//     return respuesta;
// }
// let func = devolverEdad();
// document.write(func);

// function suma(n1, n2) {     //funcion con parámetros
//     let suma = n1 + n2;
//     document.write(suma);
// }
// suma(5, 10);

// function resta(n1, n2) {    //funcion con parametros y retorno
//     return n1 - n2;
// }
// resta(10, 5);

// const multiplicar = (n1, n2) => n1 * n2;     //función flecha      
// multiplicar(5, 2);

// POO 
// class Animal {  //  se crea la clase

//     constructor(especie, edad, color) { //constructor del objeto
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//     }
// }

// const animal1 = new Animal("perro", 10, "negro"); //instacia de animal, se instancian como constantes
// document.write(animal1.especie + " " + animal1.edad + " " + animal1.color);

// class Gato extends Animal { //herencia

//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color);
//         this.raza = raza;
//     }

//     set setRaza(raza) { //metodo setter
//         this.raza = raza;
//     }

//     get getRaza() { //metodo getter
//         return this.raza;
//     }
// }

// const gato1 = new Gato("gato", 10, "negro", "bombay");
// alert(gato1.getRaza);
// gato1.setRaza = "angora";
// alert(gato1.getRaza);

//Métodos de cadena
// let cadena1 = "cadena de prueba";
// let cadena2 = "otra cadena de prueba";

// let metodoConcat = cadena1.concat(" hola");  //concatenar cadenas
// document.write(metodoConcat + "<br>");
// let metodoStartsWhith = cadena1.startsWith(cadena2);    //devuelve true si una cadena comienza con los mismos caracteres que otra cadena
// document.write(metodoStartsWhith + "<br>");
// let metodoEndsWith = cadena1.endsWith(cadena2); //devuelve true si una cadena termina con los mismos caracteres que otra cadena
// document.write(metodoEndsWith + "<br>");
// let metodoIncludes = cadena1.includes(cadena2); //si una cadena se encuentra dentro de otra devuelve true
// document.write(metodoIncludes + "<br>");
// let metodoIndexOf = cadena1.indexOf("prueba");  //devuelve la posición donde comienza la cadena ingresada
// document.write(metodoIndexOf + "<br>");
// let metodoLastIndexOf = cadena1.lastIndexOf("prueba"); // devuelve la posición donde termina la cadena ingresada
// document.write(metodoLastIndexOf + "<br>");
// let metodoPadStart = cadena1.padStart(25, "a");  //rellena cadena al principio con los caracteres deseados hasta el número de caracteres ingresado
// document.write(metodoPadStart + "<br>");
// let metodoPadEnd = cadena1.padEnd(25, "b");  //rellena cadena al final con los caracteres deseados hasta el número de caracteres ingresado
// document.write(metodoPadEnd + "<br>");
// let metodoRepeat = cadena1.repeat(5);   //devuelve la misma cadena repetida la cantidad de veces ingresada
// document.write(metodoRepeat + "<br>");
// let metodoSplit = cadena1.split("de");  //divide la cadena de acuerdo al caracter ingresado, transformando el resto de los caracteres en posiciones de un array
// document.write(metodoSplit + "<br>");
// let metodoSubString = cadena1.substring(0, 3);   //toma la porción indicada de la cadena y forma una nueva.
// document.write(metodoSubString + "<br>");
// let metodoToLowerCase = cadena1.toLowerCase();  //convierte una cadena a minúsculas
// document.write(metodoToLowerCase + "<br>");
// let metodoToUpperCase = cadena1.toUpperCase();  //convierte una cadena a mayúsculas
// document.write(metodoToUpperCase + "<br>");
// let metodoToString = cadena1.toString();  //convierte un tipo de dato en un string
// document.write(metodoToString + "<br>");
// let metodoTrim = cadena1.trim();    //elimina los espacios en blanco que posea la cadena
// document.write(metodoTrim + "<br>");
// let metodoTrimEnd = cadena1.trimEnd();  //eliminas los espacios en blanco al final de la cadena
// let metodoTrimStar = cadena1.trimStart();   //elimina los espacios en blanco al comienzo de la cadena
// let metodoValueOf = cadena1.valueOf();  //retorna el valor primitivo de un objeto String

//Metodos de arrays
// let array = ["elemento1", "elemento2", "elemento3"];

//Transformadores
// let metPop = array.pop();   //elimina el ultimo elemento del array y lo devuelve
// document.write(metPop + "<br>");
// let metShift = array.shift();   //elimina el primer elemento de un array y lo devuelve
// document.write(metShift + "<br>");
// let metPush = array.push("elemento4"); //agrega uno o mas elementos al final de la lista y nos devuelve la cantidad de elementos
// document.write(metPush + "<br>");
// let metReverse = array.reverse();   //invierte el orden del array
// document.write(metReverse + "<br>");
// let metUnShift = array.unshift("elemento0");    //agrega uno o mas elementos al principio de la lista y nos devuelve la cantidad de elementos
// document.write(metUnShift + "<br>");
// let metSort = array.sort();     //ordena el array de menor a mayor (alfabéticamente o números)
// document.write(metSort + "<br>");
// let metSplice = array.splice(0, 1, "agregado");     //elimina elementos del array y/o agrega nuevos, devuelve los eliminados
// document.write(metSplice + "<br>");
// Accesores
// let metJoin = array.join("***");  //convierte el array a String y se puede indicar como separarlos
// document.write(metJoin + "<br>");
// let metSlice = array.slice(0, 2);   //devuelve una copia de una porcion del array que se indique
// document.write(metSlice + "<br>");
// let metToString = array.toString(); //al igual que toString en cadenas, convierte array en cadena de texto
// let metIndexOf = array.indexOf("elemento1");    //devuelve el indice de el elemento indicado
// let metIncludes = array.includes("elemento3");  //retorna un booleano si se encuentra o no el elemento indicado
// De repetición
// document.write(array.filter(aux => aux.length > 5));   //recorre los elementos del array que coincidan con la condicion indicada
// array.forEach(aux => {  //misma función que filter, sirve para recorrer solamente
//     document.write(aux + "<br>");
// });
//Métodos Math
// let numero;
// numero = Math.sqrt(25); //retorna la raiz cuadrada
// numero = Math.cbrt(125);    //retorna la raiz cubica
// numero = Math.max(1,2,3,4);   //retorna el máximo, solo recibe números
// numero = Math.min(1,2,3,4); //retorna el minimo, solo recibe números
// numero = Math.random() * 100; //retorna un número aleatorio entre 0 y 1
// numero = Math.round(9.45);  //retorna el valor redondeado al entero mas cercano
// numero = Math.fround(9.99); //devuelve el flotante simple y preciso más cercano a un número 
// numero = Math.floor(2.99);  //devuelve el mayor entero menor que o igual a un número
// numero = Math.trunc(4,55);  //devuelve la parte entera del número
// numero = Math.PI;   //número PI
// document.write(numero);


