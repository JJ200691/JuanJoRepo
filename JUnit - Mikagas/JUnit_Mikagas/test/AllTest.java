
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
//Se coloca como parametro un array con todas las pruebas que deseamos ejecutar en el orden que las coloquemos
@Suite.SuiteClasses(
{
    Calculadora2Test.class, CalculadoraTest.class, CalculadoraParametroTest.class
})
public class AllTest {

}
