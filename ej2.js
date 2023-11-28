// Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack() {
    return this.power;
  }
  defend(damage) {
    let remainingLife = this.life - damage;
    console.log("Remaining HP: " + remainingLife);
  }
}
class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkColaCao() {
    this.power = this.power + 10;
  }
}
class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkNesquik() {
    this.life = this.life + 10;
  }
}

let maya = new Maya(10, 5);
let aztec = new Aztec(15, 3);

//Gameplay:
aztec.drinkNesquik();
maya.drinkColaCao();
aztec.defend(maya.attack());
maya.defend(aztec.attack());