'use strict';
exports.BattleAbilities = {
		// sparkychild
	"furrytale": {
		isNonstandard: true,
		name: "Furry Tale",
		id: "furrytale",
		// priority for stabs feelsarken
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && pokemon.types.indexOf(move.type) > -1) return priority + 1;
		},
		onModifyMove: function (move, pokemon) {
			if (pokemon.types.indexOf(move.type) > -1) {
				move.ignoreDefensive = true;
			}
		},

		// weather for the respective forms
		// set rain for pikachu
		onStart: function (source) {
			this.setWeather('primordialsea');
		},
		onAnySetWeather: function (target, source, weather) {
			if (this.getWeather().id === 'primordialsea' && !(weather.id in {desolateland:1, primordialsea:1, deltastream:1})) return false;
		},
		onEnd: function (pokemon) {
			if (this.weatherData.source !== pokemon) return;
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					let target = this.sides[i].active[j];
					if (target === pokemon) continue;
					if (target && target.hp && target.hasAbility('furrytale')) {
						this.weatherData.source = target;
						return;
					}
				}
			}
			this.clearWeather();
		},
	},
	"letsdothis": {
		isNonstandard: true,
		onModifyDefPriority: 6,
		onModifyDef: function (def) {
			return this.chainModify(1);
		},
		onModifySpDPriority: 6,
		onModifySpD: function (spd) {
			return this.chainModify(1);
		},
		onStart: function (pokemon) {
			this.boost({atk: 2, spe: 2});
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== 'Move') return false;
		},
		id: "letsdothis",
		name: "Let's Do This",
	},
    "3bawlky5u": {
		onSwitchOut: function (pokemon) {
			pokemon.setStatus('');
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "3bawlky5u",
		name: "3Bawkly5U",
	},
	"dragonscurse": {
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && !target.hp) {
				this.damage(source.maxhp / 4, source, target, null, true);
				opponent.addVolatile('curse');
			}
		},
		id: "dragonscurse",
		name: "Dragon\'s Curse",
	},
	"gdaygday": {
		onBoost: function (boost) {
			for (var i in boost) {
				boost[i] *= 2;
			}
		},
		id: "gdaygday",
		name: "gday gday",
	},
	"pidgeotsblessing": {
		onBoost: function (boost) {
			for (var i in boost) {
				boost[i] *= -1;
			}
		},
		id: "pidgeotsblssing",
		name: "Pidgeot\'s Blessing",
	},
	"banter": {
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa:1}, source);
			}
		},
		id: "banter",
		name: "Banter",
	},
};