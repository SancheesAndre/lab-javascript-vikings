// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[randomSaxonIndex]
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomVikingIndex]

    let vikingDamageDone = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return vikingDamageDone
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy[randomSaxonIndex]
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy[randomVikingIndex]

    let saxonDamageDone = randomViking.receiveDamage(randomSaxon.attack())

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1 );
    }

    return saxonDamageDone
  }

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length > 0) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Saxons have fought for their lives and survived another day...';
    }
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
