import java.util.Arrays;

public class ex04 {

    public static void main(String[] args) {
        double[][] temperaturas = {
            {15.5},
            {30.3},
            {-5.8}
        };
        System.out.println(Arrays.deepToString(temperaturas));
        System.out.println("Promedio semana 1: " + temperaturas[0][0] + "°C");
        System.out.println("Promedio semana 2: " + temperaturas[1][0] + "°C");
        System.out.println("Promedio semana 3: " + temperaturas[2][0] + "°C");
    }

}
