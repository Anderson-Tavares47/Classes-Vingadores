class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = -peso;
  }
}

class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }
  lutar() {
    alert(`${this.nome[1]} esta lutando usando ${this.poderes[0]}`);
  }
}

const thor = new Vingador(
  ["Thor", "Hulk"],
  ["1.85", "2.50"],
  ["97kg", "300kg"],
  ["Super força", "Raio"],
  true,
  true
);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};
