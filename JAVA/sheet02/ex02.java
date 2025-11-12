
public class ex02 {

    public static void main(String[] args) {
        System.out.println("Suma de 10 y 40 = " + sumarSiPositivo(10, 40));
        System.out.println("Suma de -5 y -10 = " + sumarSiPositivo(-5, -10));
        System.out.println("Suma de -2 y 4 = " + sumarSiPositivo(-2, -4));
        System.out.println("Suma de 3 y 5 = " + sumarSiPositivo(3, 5));
    }

    public static int sumarSiPositivo(int a, int b) {

        if (a > 0 && b > 0) {
            return a + b;
        } else {
            return 0;
        }
    }

}
