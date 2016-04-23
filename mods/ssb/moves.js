'use strict';

exports.BattleMovedex = {
	// sparkychild
	"furrycosplay": {
		isNonstandard: true,
		accuracy: true,
		category: "Status",
		id: "furrycosplay",
		isViable: true,
		name: "Furry Cosplay",
		pp: 5,
		priority: 5,
		flags: {},
		onTryHit: function (source, target) {
			this.attrLastMove("[still]");
		},
		onHit: function (pokemon, target, move) {
			// litle surprise - 15% chance of failing so GL!
			if (Math.random() >  0.85) {
				this.add("c|~sparkychild|Ahhhh! s-stop looking at me like that! i-i was just changing my costume... o////o");
				this.add("c|~sparkychild|/me faints");
				pokemon.selfFaint = true;
				return pokemon.faint();
			}
			// substitute moves and set weather
			function setMove(oldMove, moveid) {
				let index = pokemon.moves.indexOf(oldMove);
				if (index === -1) return;
				let move = Tools.getMove(moveid);
				let sketchedMove = {
					move: move.name,
					id: move.id,
					pp: move.pp,
					maxpp: move.pp,
					target: move.target,
					disabled: false,
					used: false,
				};
				pokemon.moveset[index] = sketchedMove;
				pokemon.moves[index] = toId(move.name);
			}
			// protect
			this.useMove("Protect", pokemon);
			let subs = [["thunder", "searingshot"], ["steameruption", "solarbeam"], ["hurricane", "earthpower"]];
			if (pokemon.template.speciesid === 'pikachu' && pokemon.formeChange('Fennekin')) {
				subs.forEach(s => setMove(s[0], s[1]));
				this.add('-formechange', pokemon, 'Fennekin', '[msg]');
				this.setWeather('desolateland');
			} else if (pokemon.formeChange('Pikachu')) {
				subs.forEach(s => setMove(s[1], s[0]));
				this.add('-formechange', pokemon, 'Pikachu', '[msg]');
				this.setWeather('primordialsea');
			}
			// make changing form available in consecutive turns
			delete pokemon.volatiles.stall;

			// limit boosts from this move.
			let SpABoost = 1;
			let SpeBoost = 1;
			if (pokemon.boosts.spa && pokemon.boosts.spa >= 1) SpABoost = 0;
			if (pokemon.boosts.spe && pokemon.boosts.spe >= 1) SpeBoost = 0;
			this.boost({spa:SpABoost, spe:SpeBoost}, pokemon);
			this.add("c|~sparkychild|There! All done! D-do you like it? :3");
		},
		target: "self",
		type: "Normal",
	},
//ReturningAvenger
	"aquasubscribe": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		id: "aquasubscribe",
		self: {boosts:
				{
				spa:1,
				spe:1
				}
			},
		name: "Aqua Subscribe",
		pp: 10,
		priority: 1,
		onHit: function () {
			this.add('c|►ReturningAvenger|#ShamelessPromo Subscribe to https://www.youtube.com/channel/UCUPwiPDUIGqNg8c4WlLEnQQ');
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hydro Pump", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Water"
	},
//Gyaratoast
	"breadsmash": {
		accuracy: 85,
		basePower: 150,
		category: "Physical",
		id: "breadsmash",
		name: "BREADSMASH",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch'
		},
		onHit: function () {
			this.add('c|✂Gyaratoast|FUCKING SMASHING!');
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Waterfall", target);
		},
		recoil: [1, 2],
		target: "normal",
		type: "Water"
	},
//SpecsMegaBeedrill
	"hivefive": {
		accuracy: 100,
		basePower: 140,
		category: "Special",
		id: "hivefive",
		name: "Hive Five",
		pp: 10,
		priority: 0,
		onHit: function () {
        	this.add('c|SpecsMegaBeedrill|( ͡° ͜ʖ ͡°) Hive Five! ( ͡° ͜ʖ ͡°)');
		},
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
			chance: 100,
    		volatileStatus: "confusion",
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bug Buzz", target);
		},
		target: "normal",
		type: "Bug"
	},
//Phoenix DBNX
	"xtremespeed": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		id: "xtremespeed",
		name: "X-treme Speed",
		pp: 30,
		priority: 1,
		recoil: [1, 4],
		onPrepareHit: function (target, source, move) {
            this.attrLastMove('[still]');
			this.add('-anim', source, "Extreme Speed", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
//TheGodOfPie
	"handsonic": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		id: "handsonic",
		name: "Hand Sonic",
		pp: 10,
		priority: 0,
		onPrepareHit: function (target, source, move) {
            this.attrLastMove('[still]');
			this.add('-anim', source, "Fairy Lock", target);
			this.add('-anim', source, "Extreme Speed", target);
		},
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
//Chaotic
	"banterhammer": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "banterhammer",
		name: "Banter Hammer",
		pp: 10,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Overheat", target);
		},
		flags: {protect: 1, reflectable: 1, mirror: 1, defrost: 1},
		status: 'brn',
		onHit: function (target, source) {
            target.addVolatile('taunt');
            target.addVolatile('confusion');
            target.addVolatile('curse');
            target.addVolatile('torment');
            target.addVolatile('healblock');
            target.addVolatile('embargo');
        },
		secondary: false,
		target: "normal",
		type: "Fire"
	},
//Mystifi
	"cutenessspell": {
		accuracy: 100,
		basePower: 20,
		basePowerCallback: function (pokemon) {
			return 20 + 20 * pokemon.positiveBoosts();
		},
		category: "Special",
		id: "cutenessspell",
		name: "Cuteness Spell",
		pp: 10,
		onPrepareHit: function (pokemon) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Moonblast", pokemon);
		},
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
//Jigglykong
	"plasmablast": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		id: "plasmablast",
		name: "Plasma Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: [{chance:20, status:'brn'}],
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Techno Blast", target);
		},
		onEffectiveness: function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Electric', type);
		},
		target: "normal",
		type: "Normal"
	},
//djclifford14
	"dragonassault": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		id: "dragonassault",
		name: "Dragon Assault",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source, move) {
            this.attrLastMove('[still]');
            this.add('-anim', source, "Super Fang", target);
        },
		secondary: {
			chance: 20, 
			self: {
				boosts: {
					atk:1
				}
			}
		},
		target: "normal",
		type: "Dragon"
	},
//Volco
	"woodtreesword": {
        accuracy: 90,
        basePower: 150,
        category: "Physical",
        shortDesc: "Use and Find Out.",
        pp: 15,
        priority: 0,
        flags: {contact: 1, protect: 1, mirror: 1},
        recoil: [1, 3],
        onTryHit: function (target, source, move) {
            this.attrLastMove('[anim]woodhammer');
        },
        onMoveFail: function (target, source, move) {
            this.attrLastMove('[anim]woodhammer');
        },
        onHit: function (target, source, move) {
            this.add('c|+Emg E4 Volco|Let\'s do this');
        },
        secondary: false,
        target: "normal",
        type: "Grass",
    },
//gday
	"feelsjig": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "feelsjig",
		name: "feelsjig",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk:2,
			def:2,
			spa:2,
			spd:2,
			spe:2,
			accuracy:2
		},
		onTry: function (pokemon, target) {
		if (pokemon.activeTurns > 1) {
			this.add('-fail', pokemon);
			this.add('-hint', "feelsjig only works on your first turn out.");
			return null;
			}
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', target, "Geomancy", target);
		},
		secondary: false,
		target: "self",
		type: "Bug"
	},
//vulpixmayhem
	"pixiepower": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		id: "pixiepower",
		name: "Pixie Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Draining Kiss", target);
		},
		secondary: false,
		target: "normal",
		type: "Grass"
	},
	'superpowerhammerarm': {
		isNonstandard: true,
		accuracy: 95,
		basePower: 120,
		category: 'Physical',
		desc: 'Use and Find Out.',
		shortDesc: 'Use and Find Out.',
		pp: 8,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit: function (target, source, move) {
			this.attrLastMove('[anim]superpower');
		},
		onMoveFail: function (target, souce, move) {
			this.add('c|@Black Tabby Ready for this superpower hammer arm!');
		},
		self: {
			boosts: {
				atk: -1,
				def: -1
		},
		secondary: false,
		target: "normal",
		type: "Fighting",
		},
	},
};