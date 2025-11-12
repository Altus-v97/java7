public class ex01 {
    public static void main(String[] args) {
        System.out.println("eco: Hola3x");
        eco("Hola" + "\n", 3);
    }

    public static void eco(String text, int n) {
        for (int i = 0; i < n; i++) {
            System.out.println(text);
        }

    }
}
