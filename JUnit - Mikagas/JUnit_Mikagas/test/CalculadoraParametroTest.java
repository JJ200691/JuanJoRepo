
import java.util.ArrayList;
import java.util.List;
import junit.mikagas.Calculadora2;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(value = Parameterized.class)   //Se utiliza para que corra con un runner parametrizado
public class CalculadoraParametroTest {
    
    @Parameters //El runner llama al método que tenga esta anotación
    public static Iterable<Object[]> getData(){
        List<Object[]> obj = new ArrayList();
        obj.add(new Object[] {3,1,4});
        obj.add(new Object[] {2,3,5});
        return obj;
    }

    private int a;
    private int b;
    private int resEsperado;

    //El mismo JUnit se encarga de llamar al constructor en el método
    public CalculadoraParametroTest(int a, int b, int resEsperado) {
        this.a = a;
        this.b = b;
        this.resEsperado = resEsperado;
    }

    @Test
    public void testAdd() {
        Calculadora2 cal = new Calculadora2();
        int resultado = cal.add(a, b);
        assertEquals(resEsperado, resultado);

    }

}
