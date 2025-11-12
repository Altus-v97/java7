import java.util.Arrays;

public class ex03 {

    public static void main(String[] args) {
        int[] misNumeros = {4, 12, 6, 2};
        double promedio = calculo(misNumeros);
        System.out.println("Entrada es: " + Arrays.toString(misNumeros));
        System.out.println("El promedio es: " + promedio);
    }
    public static double calculo(int[] numeros) {

        if (numeros.length == 0) {
            return 0.0;
        }
        double suma = 0;
        for (int numero : numeros) {
            suma += numero;
        }
        return suma / numeros.length;
    }

}
