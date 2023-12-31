class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    console.log(`Veículo: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}`);
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas, escala) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
    this.escala = escala;
  }

  represent() {
    console.log(`Carro Hot Wheels: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Portas - ${this.numeroPortas}, Escala - ${this.escala}`);
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
    super(modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }

  represent() {
    console.log(`Moto: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Cilindradas - ${this.cilindradas}`);
  }
}

class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];

    const hotWheels1 = new Carro('Bone Shaker', 'Hot Wheels', 'Preto', 4, 2, '1:64');
    const hotWheels2 = new Carro('Twin Mill', 'Hot Wheels', 'Vermelho', 4, 2, '1:64');
    const hotWheels3 = new Carro('Monster Dairy Delivery', 'Hot Wheels', 'Azul', 4, 2, '1:64');

    const hotWheels4 = new Moto('Street Rodder', 'Hot Wheels', 'Amarelo', 2, '1:64');
    const hotWheels5 = new Moto('Ducati 1199 Panigale', 'Hot Wheels', 'Vermelho', 2, '1:64');
    const hotWheels6 = new Moto('Kawasaki Ninja ZX-6R', 'Hot Wheels', 'Verde', 2, '1:64');

    veiculos.push(hotWheels1, hotWheels2, hotWheels3, hotWheels4, hotWheels5, hotWheels6);
    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    const clones = [];
    for (const veiculo of veiculos) {
      const clone = veiculo.clone();
      clones.push(clone);
    }
    return clones;
  }

  static representarClones(veiculos) {
    for (const veiculo of veiculos) {
      veiculo.represent();
    }
  }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);

console.log('Veículos clonados: ');
Aplicacao.representarClones(clones);
