package tddconjunit_tismart;

public class Calculadora {

    public int restar(int a, int b) {
        return a - b;
    }

    public int suma(int a, int b) {
        return a + b;
    }

    public float dividir(int a, int b) {
        if (b == 0)
        {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return a / b;
    }

    public void procesoDemora() throws InterruptedException {
        Thread.sleep(500);
    }

}
