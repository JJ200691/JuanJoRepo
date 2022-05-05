// //  Tipos de variables 

// String = "hola como va";
// Number = 25;
// Boolean = true;

// // Formas de declarar una variable
// var número = 25; // variable global 
// let cadena = "hola"; // variable local, solo se reconoce en un bloque de código 
// const Boolean = false; // variable constante, no puede cambiar su valor 

// // Casos especiales
// let num = null; // la variable se inicializa intencionalmente con valor nulo
// let num2 = NaN; // not a number significa que la variable con la que queremos operar no es un numero

// // Funcion prompt
// let nombre = prompt("decime tu nombre"); // el nombre ingresado se almacena en 'nombre'(abrir consola al usuario)

// // Operadores de asignación
// var n = 10;
// n += 5; // suma al valor de la variable
// n -= 4; // resta al valor de la variable
// n *= 2; // multiplica al valor de la variable
// n /= 3; // divide al valor de la variable
// n %= 10; // modulo del valor de la variable
// n **= 5; // potencia del valor de la variable
// n++; // incrementa en 1
// n--; // decrementa en 1
// n ** 2; // eleva a la potencia según el número

// // Operadores aritméticos
// let num1 = 1;
// let nume2 = 2;
// num1 == nume2; // igualdad en valor (no diferencia tipo de dato)
// num1 === nume2; // estricta igualdad, valor y tipo de dato
// num1 != nume2; // desigualdad en valor
// num1 !== nume2; // desigualdad estricta, valor y tipo de dato
// num1 < nume2; // menor
// num1 > nume2; // mayor
// num1 <= nume2; // menor o igual
// num1 >= nume2; // mayor o igual

// // Operadores lógicos
// let valor = true;
// let valor2 = true;
// let resultado1 = valor && valor2; // operador "y" (devuelve true si ambas son true)
// let resultado2 = valor || valor2; // operador "o" (devuelve true si alguna de las 2 expresiones es true)
// let resultado3 = !valor2; //devuelve true si la expresion es falsa y viceversa

// // Concatenación
// var cad1 = "Hola";
// var cad2 = "como estás?";
// concaten = cad1 + cad2; // de esta forma concateno 2 cadenas
// concaten2 = "" + 5 + 10; // para hacerlo con nros como texto, tengo que forzar el string
// frase = cad1.concat(cad2); // método para concatenar
// frase2 = "Hola" + cad2 + " todo bien?"; // también se puede con signos +
// frase3 = `Hola ${cad2} todo bien`; // forma para evitar errores con backticks

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
// document.write(array[2]); // para mostrar una posición específica (arranca de 0)
// let arrayAsociado = {   // se puede asociar y después se llama por el dato asociado en vez de la posición
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

// for (aux in animales) {  //  muestra las posiciones de cada elemento
//     document.write(aux, "<br>");
// }

// for (aux of animales) {  //  muestra el contenido de cada elemento
//     document.write(aux, "<br>");
// }
// // se puede utilizar la sentencia break o continue en cualquier bucle

// // Funciones
// function saludar() {    //  Se crea con la palabra reservada "function"
//     prompt("Hola, cómo estás?");
//     alert("Todo bien, vos?");
// }
// saludar();  //  llamado a la función

// function devolverEdad() {   //  función con retorno
//     let respuesta = prompt("Cuantos años tienes?");
//     return respuesta;
// }
// let func = devolverEdad();
// document.write(func);

// function suma(n1, n2) {     // funcion con parámetros
//     let suma = n1 + n2;
//     document.write(suma);
// }
// suma(5, 10);

// function resta(n1, n2) {    // funcion con parametros y retorno
//     return n1 - n2;
// }
// resta(10, 5);

// const multiplicar = (n1, n2) => n1 * n2;     // función flecha      
// multiplicar(5, 2);

// POO
class Animal {  //  se crea la clase

    constructor(especie, edad, color) { //  constructor del objeto
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
}

const animal1 = new Animal("perro", 10, "negro"); //  instacia de animal, se instancian como constantes
document.write(animal1.especie + " " + animal1.edad + " " + animal1.color);

class Gato extends Animal { //  herencia

    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    set setRaza(raza) { //  metodo setter
        this.raza = raza;
    }

    get getRaza() { //  metodo getter
        return this.raza;
    }
}

const gato1 = new Gato("gato", 10, "negro", "bombay");
alert(gato1.getRaza);
gato1.setRaza = "angora";
alert(gato1.getRaza);




