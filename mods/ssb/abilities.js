'use strict';
exports.BattleAbilities = {
	// sparkychild
	"operadiva": {
		name: "Opera Diva",
		id: "operadiva",
		onStart: function (pokemon) {
			let foeactive = pokemon.side.foe.active;
			let stolenBoosts = {};
			for (let i = 0; i < foeactive.length; i++) {
				let target = foeactive[i];
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				// steal boosts
				["atk", "def", "spa", "spd", "spe", "accuracy", "evasion"].forEach(s => {
					if (target.boosts[s] && target.boosts[s] > 0) {
						if (!stolenBoosts[s]) stolenBoosts[s] = 0;
						stolenBoosts[s]+= target.boosts[s];
						this.add("-unboost", target, s, target.boosts[s]);
						target.boosts[s] = 0;
					}
				});
			}
			this.boost(stolenBoosts, pokemon);
		},
		onModifyMove: function (move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				move.negateSecondary = true;
				pokemon.addVolatile('trickster');
			}
			move.accuracy = 100;
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify([0x14CD, 0x1000]); // The Sheer Force modifier is slightly higher than the normal 1.3 (0x14CC)
			}
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
	"mysticblades": {
		onStart: function (pokemon) {
			this.add('-ability', pokemon, 'Mystic Blades');
	        this.useMove('Topsy-Turvy', pokemon);
	    },
		onAfterDamageOrder: 1,
		onAfterDamage: function (damage, target, source, move, pokemon) {
			if (source && source !== target && move && move.flags['contact']) {
				this.add('-ability', target, 'Mystic Blades');
				this.damage(source.maxhp / 8, source, target, null, true);
			}
		},
		id: "mysticblades",
		name: "Mystic Blades",
	},
	"holylands": {
		onStart: function (source) {
			this.setWeather('desolateland');
		},
		onAnySetWeather: function (target, source, weather) {
			if (this.getWeather().id === 'desolateland' && !(weather.id in {desolateland:1, primordialsea:1, deltastream:1})) return false;
		},
		onEnd: function (pokemon) {
			if (this.weatherData.source !== pokemon) return;
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					let target = this.sides[i].active[j];
					if (target === pokemon) continue;
					if (target && target.hp && target.hasAbility('desolateland')) {
						this.weatherData.source = target;
						return;
					}
				}
			}
			this.clearWeather();
		},
		id: "holylands",
		name: "Holy Lands",
		rating: 5,
		num: 190,
		onSwitchOut: function (source) {
			source.heal(source.maxhp / 3);
			source.cureStatus();
		},
	},
	"headphones": {
		name:"Headphones",
		"id": "headphones",
		onModifyMove: function (move) {
			if (move.flags.sound) move.basePower *= 1.3;
		},
	}
};