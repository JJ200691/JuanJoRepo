
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;
import tddconjunit_tismart.Calculadora;

/*Fase Roja
Primero se desarrolla el test sin clases creadas para identificar los valores necesarios y errores para desarrollar el método.
Fase Verde
Después se genera todo lo necesario para que el Test funcione (clases, métodos, etc).
Fase Refactor
Luego se refactoriza el código volviendoló mas simple y efectivo.
 */
public class CalculadoraTest {

    Calculadora cal = new Calculadora();

    @AfterClass
    public static void afterClass() {
        System.out.println("after class");
    }

    @BeforeClass
    public static void beforeClass() {
        System.out.println("before class");
    }

    @After
    public void after() {
        System.out.println("after");
    }

    @Before
    public void before() {
        System.out.println("before");
    }

    @Test
    public void resta() {
        assertEquals(5, cal.restar(6, 1));
    }

    @Test
    public void suma() {
        assertEquals(10, cal.suma(5, 5));
    }

    @Test
    public void division() {
        assertEquals(5, cal.dividir(10, 2), 0);
    }

    @Test(expected = ArithmeticException.class)
    public void divisioException() {
        assertEquals(2, cal.dividir(10, 0), 0);
    }

    @Test(timeout = 1000)
    public void procesoDemora() throws InterruptedException {
        cal.procesoDemora();
    }

}
