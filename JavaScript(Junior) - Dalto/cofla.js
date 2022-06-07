// /* Capitulo 1: 
// - Mostrar que helado puede comprar cada uno con el dinero que tienen */
// var nombre1 = "Roberto";
// var nombre2 = "Pedro";
// var nombre3 = "Cofla";

// var dinero1 = prompt("Cuanto dinero tiene " + nombre1 + " ?");
// if (dinero1 == 1.6) {
//     alert(`${nombre1} te alcanza para un helado de agua`);
// }
// var dinero2 = prompt("Cuanto dinero tiene " + nombre2 + " ?");
// if (dinero2 == 1.8) {
//     alert(`${nombre2} te alcanza para un helado de crema`)
// }
// var dinero3 = prompt("Cuanto dinero tiene " + nombre3 + " ?");
// if (dinero3 == 3) {
//     alert(`${nombre3} te alcanza para un helado con confites o un pote de 1/4`)
// }

// /* Capitulo 2: 
// - En una fiesta crear una máquina que solo deje pasar a los mayores de edad y la 1er persona
// que entre después de las 2am no paga entrada. 
// - Por otro lado Cofla empezó las clases y tiene que crear un sistema para registrar ausentes(A) y presentes(P) 
// en clase, se puede tener un máximo del 10% de ausencias. Hay 20 alumnos y hay que medirlo en 30 días.
// - Crear una calculadora que haga todas las operaciones matemáticas. */
// function ingresarPersona() {
//     let nombre = prompt("Bienvenido a la fiesta! Cuál es tu nombre?");
//     let edad = prompt("Cuantos años tenés?");
//     let hora = prompt("Ingresa la hora");
//     if (edad >= 18 && hora >= 2) {
//         alert(`Felicitaciones ${nombre}, puedes ingresar y no pagás entrada`);
//     } else if (edad >= 18 && hora < 2) {
//         alert(`Podés ingresar ${nombre}, abonás tu entrada en taquilla`);
//     } else {
//         alert(`No sos mayor de 18 ${nombre}! No podés ingresar`);
//     }
// }
// ingresarPersona();

// var alumnos = [];
// var asistencia = [];
// var contP = 0;
// var contA = 0;
// ingresarAlumnos = () => {
//     for (i = 0; i < 20; i++) {
//         alumnos[i] = prompt("Ingrese el nombre del alumno");
//         document.write(alumnos[i]);
//         for (j = 0; j < 20; j++) {
//             asistencia[j] = prompt("Presente(P) o Ausente(A)");
//             if (asistencia[j] == "P") {
//                 contP++;
//             } else {
//                 contA++;
//             }
//             document.write(" " + asistencia[j]);
//         }
//         if (contA > contP) {
//             document.write(" | Ha reprobado por cantidad de inasistencias");
//         } else {
//             document.write(" | Aprobado");
//         }
//         document.write("<br>");
//     }
// }
// ingresarAlumnos();

// function calculadora(op, n1, n2) {
//     switch (op) {
//         case "suma": alert(n1 + n2);
//             break;
//         case "resta": alert(n1 - n2);
//             break;
//         case "multiplicacion": alert(n1 * n2);
//             break;
//         case "division": alert(n1 / n2);
//             break;
//         default:
//             break;
//     }
// }
// num1 = parseInt(prompt("Ingrese un número"));
// num2 = parseInt(prompt("Ingrese otro número"));
// operacion = prompt("Ingrese una operación");
// calculadora(operacion, num1, num2);

/* Capitulo 3:
- Crear un sistema para mostrar 3 tipos de celulares con sus funcionalidades.
- Cada celular debe contener color, peso, resolución de pantalla, resolución de cámara
y memoria RAM.
- Además cada celular debe poder prender, apagar, reiniciar, tomar fotos y grabar.
- Hacer todas estas implementaciones pero para celulares alta gama con otras funcionalidades */
// class Celular {

//     constructor(color, peso, resPan, resCam, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.resPan = resPan;
//         this.resCam = resCam;
//         this.ram = ram;
//     }

//     prender = () => "El celular se ha encendido";
//     apagar = () => "El celular se ha apagado";
//     reiniciar = () => "El celular se reiniciará";
//     sacarFoto = () => "Se ha tomado una foto";
//     grabar = () => "Se está grabando un video";

//     elegirFunc = () => {
//         alert("Qué función del celular desea realizar?\n1-Prender\n2-Apagar\n3-Reiniciar\n4-Tomar foto\n5-Grabar\n6-Salir")
//         do {
//             var res = prompt("Opcion: ");
//             switch (res) {
//                 case "1": alert(this.prender);
//                     break;
//                 case "2": alert(this.apagar);
//                     break;
//                 case "3": alert(this.reiniciar);
//                     break;
//                 case "4": alert(this.sacarFoto);
//                     break;
//                 case "5": alert(this.grabar);
//                     break;
//                 case "6": alert("Gracias")
//                     break;
//             }
//         } while (res != "6");
//     }

//     mostrarInfo = () => {
//         return `
//                 Color: ${this.color}
//                 Peso: ${this.peso}
//                 Resolución de pantalla: ${this.resPan}
//                 Resolución de cámara: ${this.resCam}
//                 Memoria ram: ${this.ram}`
//     }

// }
// const cel1 = new Celular("negro", "500gr", "32mp", "32mp", "2gb");
// const cel2 = new Celular("gris", "550gr", "64mp", "32mp", "4gb");
// const cel3 = new Celular("blanco", "650gr", "64mp", "64mp", "6gb");

// alert("Bienvenido a la tienda de celulares!!!\nElija que celular desea ver:\n1-Samsung\n2-Motorolla\n3-Nokia\n4-Salir");

// do {
//     var resp = prompt("Ingrese opción");
//     switch (resp) {
//         case "1": alert(cel1.mostrarInfo());
//             alert(cel1.elegirFunc());
//             break;
//         case "2": alert(cel2.mostrarInfo());
//             alert(cel2.elegirFunc());
//             break;
//         case "3": alert(cel3.mostrarInfo());
//             alert(cel3.elegirFunc());
//             break;
//         case "4": alert("Gracias");
//             break;
//     }
// } while (resp != "4");

// class CelAltaGama extends Celular {

//     constructor(color, peso, resPan, resCam, ram, camLenta, recFacial) {
//         this.camLenta = camLenta;
//         this.recFacial = recFacial;
//         super(color, peso, resPan, resCam, ram);
//     }

//     videoCamLenta = () => "Se está grabando un video en cámara lenta";
//     reconocimientoFacial = () => "Se va a realizar un conocimiento facial";
// }

// const celu1 = new CelAltaGama("negro", "500gr", "64mp", "112mp", "8gb", "5fps", "activado");
// celu1.mostrarInfo();
/* Capitulo 4:
- Perfeccionar calculadora parq que pueda calcular ademas potencias, raiz cuadrada y cúbica.
- Crear una función que al pasarle como parámetro la materia nos devuelva el profesor asignado y el nombre de todos los alumnos.
- Crear un método para inscribirse a una materia, si hay 20 alumnos inscriptos, negarle la inscripción, de lo contrario añadirlo.
 */
// function calculadora(op, n1, n2) {
//     switch (op) {
//         case "suma": alert(n1 + n2);
//             break;
//         case "resta": alert(n1 - n2);
//             break;
//         case "multiplicacion": alert(n1 * n2);
//             break;
//         case "division": alert(n1 / n2);
//             break;
//         case "potencia": alert(n1 ** n2);
//             break;
//         case "raiz cuadrada": alert(Math.sqrt(n1));
//             break;
//         case "raiz cubica": alert(Math.cbrt(n1));
//             break;
//     }
// }
// num1 = parseInt(prompt("Ingrese un número"));
// num2 = parseInt(prompt("Ingrese otro número"));
// operacion = prompt("Ingrese una operación");
// calculadora(operacion, num1, num2);

class Materia {

    constructor(profesor, alumnos) {
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    get getProfesor() {
        return this.profesor;
    }

    get getAlumnos() {
        return this.alumnos;
    }

    set setAlumnos(alumnos) {
        this.alumnos = alumnos;
    }
}
var matematicas = new Materia("Profesor: Ricardo Centurión", ["Pepito", "Cofla", "Maria"]);
var lengua = new Materia("Profesor: Lopes Murphy", ["Pepito", "Cofla", "Maria", "Matias"]);
var ingles = new Materia("Profesor: Susana Dora", ["Pepito", "Maria", "Diego"]);
var fisica = new Materia("Profesor: Carlos Arzobispo", ["Pepito", "Cofla", "Diego"]);
var ciencias = new Materia("Profesor: Marta Gomez", ["Pepito", "Diego", "Pablo"]);
var musica = new Materia("Profesor: Martin Palermo", ["Pepito", "Cofla", "Maria", "Pablo"]);

const mostrarMateria = (Materia) => {
    document.write(Materia.getProfesor + "<br>");
    document.write("Alumnos inscriptos: " + Materia.getAlumnos + "<br>");
}
mostrarMateria(matematicas);
mostrarMateria(lengua);
mostrarMateria(ingles);
mostrarMateria(fisica);
mostrarMateria(ciencias);
mostrarMateria(musica);

function inscripción() {
    let materia = {
        fisica: [Juan, Diego, Carlos, Rodrigo, Fede, Pablo, Sergio, Sofia, Julieta],
        lengua: [Juan, Diego, Carlos, Rodrigo, Fede, Pablo, Sergio, Sofia, Julieta],
        quimica: [Juan, Diego, Carlos, Rodrigo, Fede, Pablo, Sergio, Sofia, Julieta],
        musica: [Juan, Diego, Carlos, Rodrigo, Fede, Pablo, Sergio, Sofia, Julieta]
    
}






