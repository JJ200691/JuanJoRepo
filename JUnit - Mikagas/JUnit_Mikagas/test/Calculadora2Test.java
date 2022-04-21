
import junit.mikagas.Calculadora2;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;

public class Calculadora2Test {

    public Calculadora2 cal;    //Se declara de forma global para no tener que instanciarla en cada método de prueba.

    @BeforeClass    //Se ejecuta una sola vez en toda la prueba antes de todos los bloques de código.
    public static void beforeClass() {
        System.out.println("beforeClass");
    }

    @Before //Todo el código que se va a ejecutar ANTES de CADA prueba.
    public void before() {
        System.out.println("before");   //Se colocan estos sout para verificar en que momento se ejecuta cada porción de código
        cal = new Calculadora2();
    }

    @After   //Todo el código que se va a ejecutar DESPUÉS de CADA prueba;
    public void after() {
        System.out.println("after");
        cal.clear();
    }

    @Test
    public void addTest() {
        System.out.println("prueba1");
        int resultado = cal.add(5, 10);
        int resEsperado = 15;
        assertEquals(resEsperado, resultado);   //Forma mas efectiva (5, cal.add(5,10).
    }

    @Test
    public void subTest() {
        System.out.println("prueba2");
        cal.sub(10, 5);
        int resultado = cal.ans();
        int resEsperado = 5;
        assertEquals(resEsperado, resultado);
    }

    @Test
    public void divTest() {
        cal.div(10, 2);
        int resultado = cal.ans();
        int resEsperado = 5;
        assertEquals(resEsperado, resultado);
    }

    //El @Test puede contener parametros, uno es el expected que indica que el método a testear puede lanzar una excepción.
    @Test(expected = ArithmeticException.class)
    public void divPorCeroTest() {
        int resultado = cal.div(5, 0);  //Si no se dividiera por 0 el test arrojaria error ya que se espera que arroje dicha excepcion.
    }

    //El otro parametro que puede contener es el timeout, que indica que un método puede fallar si se demora mas tiempo del indicado.
    @Test(timeout = 1000)   //Se coloca un tiempo menor y fallará el test
    public void operacionOptimaTest() {
        cal.operacionOptima();
    }

    @AfterClass //Se ejecuta una sola vez en toda la prueba al final de todos los bloques de código.
    public static void afterClass() {
        System.out.println("afterClass");
    }
}
