public class Numero implements Operador {

    private int numero;

    public Numero(int numero) {
        this.numero = numero;
    }

}

public interface Operador {

    int interpretar();

}

public class Numero implements Operador {

    private int numero;

    public Numero(int numero) {
        this.numero = numero;
    }

}

public class Numero implements Operador {

    private int numero;

    public Numero(int numero) {
        this.numero = numero;
    }

    @Override
    public int interpretar() {
        return this.numero;
    }
}

public class Somar implements Operador {

    private Numero esquerda;
    private Numero direita;

    public Somar(Numero esquerda, Numero direita) {
        this.esquerda = esquerda;
        this.direita = direita;
    }

    @Override
    public int interpretar() {
        return this.esquerda.interpretar() + this.direita.interpretar();
    }

}

public class Somar implements Operador {

    private Operador esquerda;
    private Operador direita;

    public Somar(Operador esquerda, Operador direita) {
        this.esquerda = esquerda;
        this.direita = direita;
    }

    @Override
    public int interpretar() {
        return this.esquerda.interpretar() + this.direita.interpretar();
    }

}

public class Subtrair implements Operador {

    private Operador esquerda;
    private Operador direita;

    public Subtrair(Operador esquerda, Operador direita) {
        this.esquerda = esquerda;
        this.direita = direita;
    }

    @Override
    public int interpretar() {
        return this.esquerda.interpretar() - this.direita.interpretar();
    }

}

public class Multiplicar implements Operador {

    private Operador esquerda;
    private Operador direita;

    public Multiplicar(Operador esquerda, Operador direita) {
        this.esquerda = esquerda;
        this.direita = direita;
    }

    @Override
    public int interpretar() {
        return this.esquerda.interpretar() * this.direita.interpretar();
    }

}

public class Dividir implements Operador {

    private Operador esquerda;
    private Operador direita;

    public Dividir(Operador esquerda, Operador direita) {
        this.esquerda = esquerda;
        this.direita = direita;
    }

    @Override
    public int interpretar() {
        return this.esquerda.interpretar() / this.direita.interpretar();
    }

}

public class TesteInterpretador {

    public static void main(String[] args) {
        Operador somar = new Somar(new Numero(1), new Numero(4));
        System.out.println(somar.interpretar());
        Operador subtrair = new Subtrair(somar, new Numero(2));
        System.out.println(subtrair.interpretar());
        Operador multiplicar = new Multiplicar(subtrair, somar);
        System.out.println(multiplicar.interpretar());
        Operador dividir = new Dividir(new Numero(30), multiplicar);
        System.out.println(dividir.interpretar());
    }

}
