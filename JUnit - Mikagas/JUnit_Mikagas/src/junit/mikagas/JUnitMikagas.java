package junit.mikagas;

import static junit.mikagas.Calculadora.suma;

public class JUnitMikagas {

    public static void main(String[] args) {

        int a = 5;
        int b = 10;
        int resultado = suma(a, b);
        int resEsperado = 15;

        System.out.println("El resultado es: " + resultado);

        //se puede validar de forma manual con una condición, pero en programas mas grandes no se recomienda
        if (resultado == resEsperado){
            System.out.println("El programa funciona bien");
        }else{
            System.out.println("El programa funciona mal");}
 
    }

}
