function Fighter(fighterMaker) {
	let name = fighterMaker.name;
	let damage = fighterMaker.damage;
	let hp = fighterMaker.hp;
	let agility = fighterMaker.agility;
	let currentHP = hp;
	let basicHP = fighterMaker.hp;
	let wins = 0;
	let losses = 0;

	this.getName = function() {
		return name;
	}
	this.getDamage = function() {
		return damage;
	}
	this.getAgility = function() {
		return agility;
	}
	this.getHealth = function() {
		return currentHP;
	}
	this.attack = function (enemy) {
		const ONE_HUNDRED = 100;
		let random = Math.floor(Math.random() * (ONE_HUNDRED + 1));
		function success() {
			return ONE_HUNDRED - enemy.getAgility();
		}
		if (random < success()) {
			enemy.dealDamage(damage);
			console.log(`${name} make ${damage} damage to ${enemy.getName()}`);
		} else {
			console.log(`${enemy.getName()} attack missed.`);
		}
	}
	this.dealDamage = function(points) {
		currentHP = currentHP - points;
		if (currentHP < 0) {
			currentHP = 0;
		}
	}
	this.logCombatHistory = function() {
		console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
	}
	this.heal = function(points) {
		hp = hp + points;
		if (hp > basicHP) {
			hp = basicHP;
		}
		return console.log(currentHP);
	}
	this.addWin = function() {
		wins+=1;
	}
	this.addLoss = function() {
		losses+=1;
	}
}

const myFighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Bill', damage: 30, hp: 90, agility: 25});

function battle(fighter1, fighter2) {
	if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
		do {
			console.log(`${fighter1.getName()} hp: ${fighter1.getHealth()}`);
			console.log(`${fighter2.getName()} hp: ${fighter2.getHealth()}`);
			fighter1.attack(fighter2);
			fighter2.attack(fighter1);	
		} while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0);
	}
	if (fighter1.getHealth() === 0) {
		fighter1.addLoss();
		fighter2.addWin();
		console.log(`${fighter1.getName()} is dead and can't fight.`);
		console.log(myFighter2.logCombatHistory());
	} else if (fighter2.getHealth() === 0) {
		fighter2.addLoss();
		fighter1.addWin();
		console.log(`${fighter2.getName()} is dead and can't fight.`);
		console.log(myFighter1.logCombatHistory());
	}
}

battle(myFighter1, myFighter2);