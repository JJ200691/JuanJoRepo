
import junit.mikagas.Calculadora;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculadoraTest {
    
    @Test //Se debe colocar esta anotación para indicar que esa función deberá ser testeada.
    public void sumaTest() {
        int resultado = Calculadora.suma(5, 10);
        int resEsperado = 15;
        //Se llama un método que analiza el valor esperado contra el valor actual o verdadero.
        assertEquals(resEsperado, resultado);
    }
    
    @Test
    public void restaTest() {
        int resultado = Calculadora.resta(10, 5);
        int resEsperado = 5;
        assertEquals(resEsperado, resultado);
    }
    
    //Se hace un Test del código y en el output figura si hay errores o no, detalla las funciones que fallaron y donde se encuntra el error.
    
}
