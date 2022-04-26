/* Capitulo 1: mostrar que helado puede comprar cada uno con el dinero que tienen */
var nombre1 = "Roberto";
var nombre2 = "Pedro";
var nombre3 = "Cofla";

var dinero1 = prompt("Cuanto dinero tiene " + nombre1 + " ?");
if (dinero1 == 1.6) {
    alert(`${nombre1} te alcanza para un helado de agua`);
}
var dinero2 = prompt("Cuanto dinero tiene " + nombre2 + " ?");
if (dinero2 == 1.8) {
    alert(`${nombre2} te alcanza para un helado de crema`)
}
var dinero3 = prompt("Cuanto dinero tiene " + nombre3 + " ?");
if (dinero3 == 3) {
    alert(`${nombre3} te alcanza para un helado con confites o un pote de 1/4`)
}

/* Capitulo 2: 
- En una fiesta crear una máquina que solo deje pasar a los mayores de edad y la 1er persona
que entre después de las 2am no paga entrada. 
- Por otro lado Cofla empezó las clases y tiene que crear un sistema para registrar ausentes(A) y presentes(P) 
en clase, se puede tener un máximo del 10% de ausencias. Hay 20 alumnos y hay que medirlo en 30 días.
- Crear una calculadora que haga todas las operaciones matemáticas. */
function ingresarPersona() {
    let nombre = prompt("Bienvenido a la fiesta! Cuál es tu nombre?");
    let edad = prompt("Cuantos años tenés?");
    let hora = prompt("Ingresa la hora");
    if (edad >= 18 && hora >= 2) {
        alert(`Felicitaciones ${nombre}, puedes ingresar y no pagás entrada`);
    } else if (edad >= 18 && hora < 2) {
        alert(`Podés ingresar ${nombre}, abonás tu entrada en taquilla`);
    } else {
        alert(`No sos mayor de 18 ${nombre}! No podés ingresar`);
    }
}
ingresarPersona();

var alumnos = [];
var asistencia = [];
var contP = 0;
var contA = 0;
ingresarAlumnos = () => {
    for (i = 0; i < 20; i++) {
        alumnos[i] = prompt("Ingrese el nombre del alumno");
        document.write(alumnos[i]);
        for (j = 0; j < 20; j++) {
            asistencia[j] = prompt("Presente(P) o Ausente(A)");
            if (asistencia[j] == "P") {
                contP++;
            } else {
                contA++;
            }
            document.write(" " + asistencia[j]);
        }
        if (contA > contP) {
            document.write(" | Ha reprobado por cantidad de inasistencias");
        } else {
            document.write(" | Aprobado");
        }
        document.write("<br>");
    }
}
ingresarAlumnos();

function calculadora(op, n1, n2) {
    switch (op) {
        case "suma": alert(n1 + n2);
            break;
        case "resta": alert(n1 - n2);
            break;
        case "multiplicacion": alert(n1 * n2);
            break;
        case "division": alert(n1 / n2);
            break;
        default:
            break;
    }
}
num1 = parseInt(prompt("Ingrese un número"));
num2 = parseInt(prompt("Ingrese otro número"));
operacion = prompt("Ingrese una operación");
calculadora(operacion, num1, num2);








