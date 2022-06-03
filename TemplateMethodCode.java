public abstract class Treinos {

	final void treinoDiario() {
		preparoFisico();
		jogoTreino();
		treinoTatico();
	}

	abstract void preparoFisico();
	abstract void jogoTreino();

	final void treinoTatico() {
		System.out.println("Treino Tatico");
	}

}

class TreinoNoMeioDaTemporada extends Treinos {

	void preparoFisico() {
		System.out.println("Preparo Fisico Intenso.");
	}

	void jogoTreino() {
		System.out.println("Jogo Treino com Equipe Reserva.");
	}
}

class TreinoNoInicioDaTemporada extends Treinos {

	void preparoFisico() {
		System.out.println("Preparo Fisico Leve.");
	}

	void jogoTreino() {
		System.out.println("Jogo Treino com Equipe Junior.");
	}

}
