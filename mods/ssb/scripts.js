'use strict';
require("sugar");
exports.BattleScripts = {
randomSeasonalMeleeTeam: function (side) {
		let userid = toId(side.name);
		let team = [];
		var variant = (this.random(2) === 1);
		var sets = {
			'⚒Emg E4 Volco': {
				species: 'Torterra', ability: 'letsdothis', item: 'Leftovers', gender: 'M',
				moves: ['precipiceblades', 'spore', 'headsmash'],
				baseSignatureMove: 'woodtreesword', signatureMove: "Wood Tree Sword",
				evs: {hp:252, atk:252, def:4}, nature: 'adamant',
			},
			'sparkychild': {
				species: 'Pikachu', ability: 'Furry Tale', item: 'Light Ball', gender: "F",
				moves: ['Thunder', 'Steam Eruption', 'hurricane'],
				baseSignatureMove: 'furrycosplay', signatureMove: "Furry Cosplay",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'ReturningAvenger': {
				species: 'Ludicolo', ability: 'Primordial Sea', item: 'Life Orb', gender: "M", shiny: true,
				moves: ['gigadrain', 'icebeam', 'focusblast'],
				baseSignatureMove: 'aquajet', signatureMove: "Aqua Subscribe",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Golduck BREAK': {
				species: 'Golduck', ability: 'Primordial Sea', item: 'Life Orb', gender: 'M',
				moves: ['calmmind', 'frostbreath', 'psychic'],
				signatureMove: 'Hydro Pump',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid',
			},
			'Gyaratoast': {
				species: 'Gyarados', ability: 'Rock Head', item: 'Choice Scarf', gender: "F", shiny: true,
				moves: ['headsmash', 'bravebird', 'doubleedge'],
				baseSignatureMove: 'waterfall', signatureMove: "BREADSMASH",
				evs: {spd:4, atk:252, spe:252}, nature: 'Jolly',
			},
			'Bottered Toast': {
				species: 'Bisharp', ability: 'No Guard', item: 'Lagging Tail', gender: "M",
				moves: ['sheercold', 'fissure', 'guillotine'],
				baseSignatureMove: 'horndrill', signatureMove: "Horn Drill",
				evs: {def:4, hp:252, spd:252}, nature: 'Serious',
			},
			'TheFourthReplica': {
				species: 'Glalie', ability: 'Refrigerate', item: 'Focus Sash', gender: "F",
				moves: ['boomburst', 'extremespeed', 'return'],
				baseSignatureMove: 'recover', signatureMove: "Recover",
				evs: {atk:208, spa:140, spe:160}, nature: 'Naive',
			},
			'Hooded Angel': {
				species: 'Victini', ability: 'Contrary', item: 'Life Orb', gender: "M",
				moves: ['psychoboost', 'overheat', 'dragonascent'],
				baseSignatureMove: 'uturn', signatureMove: "U-Turn",
				evs: {atk:252, spa:4, spe:252}, nature: 'Hasty',
			},
			'Phoenix CourierNX': {
				species: 'Heracross', ability: 'Huge Power', item: 'Choice Scarf', gender: "M",
				moves: ['closecombat', 'megahorn', 'earthquake'],
				baseSignatureMove: 'highjumpkick', signatureMove: "High Jump Kick",
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			'CheeseMan195x': {
				species: 'Oshawott', ability: 'Wonder Guard', item: 'Eviolite', gender: "M",
				moves: ['bellydrum'],
				baseSignatureMove: 'explosion', signatureMove: "Explosion",
				evs: {atk:252, hp:248, spd:8}, nature: 'Jolly',
			},
			'Mystic Rebel': {
				species: 'Zoroark', ability: 'Mega Launcher', item: 'Expert Belt', gender: "M",
				moves: ['originpulse', 'darkpulse', 'dragonpulse'],
				baseSignatureMove: 'aurasphere', signatureMove: "Aura Sphere",
				evs: {spa:252, spe:252, spd:4}, nature: 'Timid',
			},
			'Odd Cytoplasm': {
				species: 'Zygarde', ability: 'Speed Boost', item: 'Assault Vest', gender: "M",
				moves: ['outrage', 'boltstrike', 'dragonascent'],
				baseSignatureMove: 'precipiceblades', signatureMove: "Precipice Blades",
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Adamant'
			},
			'SpecsMegaBeedrill': {
				species: 'Beedrill-Mega', ability: 'Adaptability', item: 'Choice Specs', gender: "M",
				moves: ['blueflare', 'sludgewave', 'earthpower'],
				baseSignatureMove: 'bugbuzz', signatureMove: "Hive Five",
				evs: {spa:252, spe:252, spd:4}, nature: 'Timid',
			},
			'MzFoxy': {
				species: 'Chespin', ability: 'Wonder Guard', item: 'Air Balloon', gender: "F",
				moves: ['hurricane', 'seedflare', 'nastyplot'],
				baseSignatureMove: 'leechseed', signatureMove: "Leech Seed",
				evs: {hp:248, spa:252, spd:8}, nature: 'Modest',
			},
			'Hawk619': {
				species: 'Staraptor', ability: 'Delta Stream', item: 'Choice Band', gender: "M",
				moves: ['closecombat', 'doubleedge', 'bravebird'],
				baseSignatureMove: 'dragonascent', signatureMove: "Dragon Ascent",
				evs: {atk:252, spe:252, spd:4}, nature: 'Jolly',
			},
			'TheGodOfPie': {
				species: 'Electivire', ability: 'Moxie', item: 'Life Orb', gender: 'M',
				moves: ['earthquake', 'powerwhip', 'highjumpkick'],
				signatureMove: 'Volt Tackle',
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Mystifi': {
			    species: 'Clefairy', ability: 'Filter', item: 'Eviolite', gender: 'M',
			    moves: ['calmmind', 'batonpass', 'softboiled'],
			    baseSignatureMove: 'storedpower', signatureMove: "Cuteness Spell",
			    evs: {def:252, hp:252, spd:4}, nature: 'Bold'
			},
			'Kie': {
				species: 'Feraligatr', ability: 'Primordial Sea', item: 'Leftovers', gender: 'M',
				moves: ['earthquake', 'icepunch', 'dragondance'],
				signatureMove: 'waterfall',
				evs: {hp:56, atk:252, spd:196}, nature: 'Adamant'
			},
			'Jigglykong': {
				species: 'Porygon2', ability: '3Bawlky5U', item: 'Eviolite', gender: 'M',
				moves: ['toxic', 'recover', 'hex'],
				baseSignatureMove: 'technoblast', signatureMove: "Plasma Blast",
				evs: {hp:252, def: 252, spa:4}, nature: 'Bold'
			},
			'Incognito Style': {
				species: 'Honchkrow', ability: 'Protean', item: 'Life Orb', gender: 'M',
				moves: ['knockoff', 'flareblitz', 'dragonascent'],
				baseSignatureMove: 'wildcharge', signatureMove: "Wild Charge",
				evs: {spd:252, spa:252, hp:4}, nature: 'Jolly'
			},
			'djclifford14': {
				species: 'Haxorus', ability: 'Tough Claws', item: 'Life Orb', gender: 'M', shiny: true,
				moves: ['drainpunch', 'ironhead', 'poisonjab'],
				signatureMove: 'Dragon Claw',
				evs: {spd:252, spa:252, hp:4}, nature: 'Jolly'
			},
			'TheAquaPhoenix': {
				species: 'Articuno', ability: 'No Guard', item: 'Leftovers', gender: 'M', shiny: true,
				moves: ['hydropump', 'focusblast', 'hurricane'],
				signatureMove: 'Blizzard',
				evs: {spd:252, spa:252, spe:4}, nature: 'Timid'
			},
			'Sota Higurashi': {
				species: 'Victini', ability: 'Contrary', item: 'Expert Belt', gender: 'M',
				moves: ['vcreate', 'uturn', 'boltstrike'],
				baseSignatureMove: 'zenheadbutt', signatureMove: 'Zen Headbutt',
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'gday': {
				species: 'Jigglypuff', ability: 'gday gday', item: 'Eviolite', gender: 'M',
				moves: ['moonblast', 'storedpower', 'moonlight'],
				baseSignatureMove: 'quiverdance', signatureMove: 'feelsjig',
				evs: {spa:252, spd:252, hp:4}, nature: 'Modest'
			},
			'LumBerryClefable2': {
				species: 'Clefable', ability: 'Simple', item: 'Power Herb', gender: 'M',
				moves: ['moonblast', 'geomancy', 'irondefense'],
				signatureMove: 'Soft-Boiled',
				evs: {hp:248, spa:252, def:8}, nature: 'Modest'
			},
			'TheDuke1718': {
				species: 'Seviper', ability: 'Banter', item: 'Choice Scarf', gender: 'M',
				moves: ['sludgewave', 'blueflare', 'energyball'],
				signatureMove: 'Switcheroo', 
				evs: {spa:252, spd:252, hp:4}, nature: 'Timid'
			},
			'vulpix mayhem': {
				species: 'Vulpix', ability: 'Pidgeot\'s Blessing', item: 'lifeorb', gender: 'F',
				moves: ['overheat', 'leafstorm', 'aurasphere'],
				signatureMove: 'Moonblast',
				evs: {spa:252, spe:252, spd:4}, nature: 'Timid'
			},	
			'Master Mewking': {
				species: 'Mew', ability: 'protean', item: 'life orb', gender: 'M', shiny: true,
				moves: ['aurasphere', 'flamethrower', 'calmmind'],
				signatureMove: 'Psystrike',
				evs: {spa: 252, spe: 252, spd: 4}, nature: 'Timid'
			},	
			'cbrevan': {
				species: 'Revenankh', ability: 'Huge Power', item: 'choiceband', gender: 'M',
				moves: ['shadowstrike', 'knockoff', 'icepunch'],
				baseSignatureMove: 'drainpunch', signatureMove: 'drainpunch',
				evs: {atk: 252, spd: 196, hp: 56}, nature: 'Adamant'
			},
			'Hydrostatics': {
				species: 'Infernape', ability: 'Iron Fist', item: 'lifeorb', gender: 'M',
				moves: ['machpunch', 'closecombat', 'thunderpunch'],
				signatureMove: 'Fire Punch',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly'
			},	
			'Back At My Day...': {
				species: 'Noivern', ability: 'Headphones', item: 'lifeorb', gender: 'M',
				moves: ['bugbuzz', 'chatter', 'flamethrower'],
				baseSignatureMove: 'dragonpulse', signatureMove: 'Dragon Pulse',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid'
			},
			'Hack_Guy': {
				species: 'Victini', ability: 'Contrary', item: 'lifeorb', gender: 'M',
				moves: ['psychoboost', 'dracometeor', 'leafstorm'],
				baseSignatureMove: 'overheat', signatureMove: 'overheat',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid'			},	
			'Tamas': {
				species: 'paras', ability: 'desolateland', item: 'lifeorb', gender: 'M',
				moves: ['gigadrain', 'blueflare', 'sludgewave'],
				baseSignatureMove: 'bugbuzz', signatureMove: 'Bug Buzz',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'timid',
			},	
			'General Knowledge': {
				species: 'Sigilyph', ability: 'simple', item: 'leftovers', gender: 'M',
				moves: ['cosmicpower', 'roost', 'tailglow'],
				baseSignatureMove: 'storedpower', signatureMove: 'Stored Power',
				evs: {hp: 252, spdef: 252, spa: 4}, nature: 'Calm',
			},
			'sparktrain': {
				species: 'Seel', ability: 'Regenerator', item: 'Life Orb', gender: 'M',
				moves: ['extremespeed', 'fakeout', 'precipiceblades'],
				baseSignatureMove: 'Waterfall', signatureMove: 'waterfall',
				evs: {hp: 232, atk: 252, spd: 24}, nature: 'adamant',
			},
			'Animaignis': {
				species: 'Gyarados', ability: 'Contrary', item: 'assaultvest', gender: 'M',
				moves: ['vcreate', 'waterfall', 'earthquake'],
				signatureMove: 'Dragon Ascent',
				evs: {atk: 252, spd: 252, spdef: 4}, nature: 'jolly',
			},
			'DarkSlay': {
				species: 'Krilowatt', ability: 'Magic Guard', item: 'Life Orb', gender: 'M',
				moves: ['discharge', 'heartswap', 'recover'],
				signatureMove: 'Scald',
				evs: {spa: 252, spd: 252, spdef: 4}, nature: 'Timid',
			},
			'KhosroTheGreat': {
				species: 'Sceptile-Mega', ability: 'Contrary', item: 'Life Orb', gender: 'M',
				moves: ['dragonascent', 'earthquake', 'dragonclaw'],
				signatureMove: 'Leaf Blade',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly',
			},
			'Lul Pokemanz': {
				species: 'Umbreon', ability: 'Unaware', item: 'Leftovers', gender: 'M',
				moves: ['cosmicpower', 'moonlight', 'toxic'],
				signatureMove: 'Foul Play',
				evs: {hp: 252, def: 252, spdef: 4}, nature: 'Bold',
			},
			'JackMM': {
				species: 'Meganium', ability: 'Desolate Land', item: 'Leftovers', gender: 'M',
				moves: ['weatherball', 'synthesis', 'seedflare'],
				signatureMove: 'Giga Drain',
				evs: {hp: 252, spa: 252, def: 4}, nature: 'Modest',
			},
			'Max Exp. Trainer': {
				species: 'Metagross-Mega', ability: 'Tough Claws', item: 'Life Orb', gender: 'M',
				moves: ['earthquake', 'zenheadbutt', 'boltstrike'],
				signatureMove: 'Meteor Mash',
				evs: {atk: 252, hp: 252, def: 4}, nature: 'Adamant',
			},
			'Rolox5198803': {
				species: 'Darkrai', ability: 'Mega Launcher', item: 'Life Orb', gender: 'M',
				moves: ['originpulse', 'aurasphere', 'darkvoid'],
				signatureMove: 'Dark Pulse',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid',
			},
			'PenQuin': {
				species: 'Piplup', ability: 'No Guard', item: 'Life Orb', gender: 'M',
				moves: ['blizzard', 'focusblast', 'hurricane'],
				signatureMove: 'Hydro Pump',
				evs: {spa: 252, spd: 252, spdef: 4}, nature: 'Timid',
			},
			'ultimategamer726': {
				species: 'Crawdaunt', ability: 'Tough Claws', item: 'Life Orb', gender: 'M',
				moves: ['aquajet', 'knockoff', 'icepunch'],
				signatureMove: 'Crabhammer',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly',
			},
			'MacDreDog': {
				species: 'Blastoise-Mega', ability: 'Skill Link', item: 'Leftovers', gender: 'M',
				moves: ['bulletseed', 'rockblast', 'iciclespear'],
				signatureMove: 'Water Shuriken',
				evs: {atk: 252, hp: 252, def: 4}, nature: 'Adamant',
			},
			'Ben_Sevir': {
				species: 'Blaziken-Mega', ability: 'Reckless', item: 'Life Orb', gender: 'M',
				moves: ['highjumpkick', 'bravebird', 'wildcharge'],
				signatureMove: 'Flare Blitz',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly',
			},
			'Shadow ✪f Lord': {
				species: 'Blaziken-Mega', ability: 'Huge Power', item: 'Life Orb', gender: 'M',
				moves: ['vcreate', 'knockoff', 'earthquake'],
				signatureMove: 'Power-Up Punch',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Adamant',
			},
			'Dratias': {
				species: 'Latias-Mega', ability: 'Protean', item: 'Life Orb',
				moves: ['dragonpulse', 'moonblast', 'aurasphere'],
				signatureMove: 'Psystrike',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid',
			},
			'Buzzma': {
				species: 'Zoroark', ability: 'Protean', item: 'Life Orb', gender: 'M',
				moves: ['darkpulse', 'psystrike', 'dracometeor'],
				signatureMove: 'Sludge Wave',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid',
			},
			'Nazi Moderino': {
				species: 'Litleo', ability: 'Snow Warning', item: 'Black Sludge', gender: 'M',
				moves: ['payday', 'trick', 'chatter'],
				signatureMove: 'Poison Gas',
				evs: {spa: 252, spd: 252, atk: 4}, nature: 'Naive',
			},
			'ChallengerBot': {
				species: 'Mollux', ability: 'Desolate Land', item: 'Choice Scarf', gender: 'M',
				moves: ['sludgewave', 'thunderbolt', 'psystrike'],
				signatureMove: 'Searing Shot',
				evs: {spa: 252, spd: 252, spdef: 4}, nature: 'Timid',
			},
			'Skillett': {
				species: 'Diglett', ability: 'Huge Power', item: 'Focus Sash', gender: 'M',
				moves: ['knockoff', 'rockslide', 'suckerpunch'],
				signatureMove: 'Precipice Blades',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly',
			},
			'Champ✪Shadow': {
				species: 'Hoopa-Unbound', ability: 'Tough Claws', item: 'Life Orb', gender: 'M',
				moves: ['zenheadbutt', 'closecombat', 'meteormash'],
				signatureMove: 'Hyperspace Fury',
				evs: {atk: 252, spd: 252, hp: 4}, nature: 'Jolly',
			},
			'Derek Uzumaki': {
				species: 'Infernape', ability: 'Reckless', item: 'Life Orb', gender: 'M',
				moves: ['flareblitz', 'headsmash', 'wildcharge'],
				signatureMove: 'High Jump Kick',
				evs: {atk:252, spd:252, hp: 4}, nature: 'Jolly',
			},
			'Legacy Wobz': {
				species: 'Wobuffet', ability: 'Prankster', item: 'Leftovers',
				moves: ['destinybond', 'moonblast', 'recover'],
				signatureMove: 'Psystrike',
				evs: {spa: 252, hp: 252, def: 4}, nature: 'Modest',
			},
			'fender': {
				species: 'Gible', ability: 'Speed Boost', item: 'Life Orb', gender: 'M',
				moves: ['precipiceblades', 'boltstrike', 'flareblitz'],
				signatureMove: 'Outrage',
				evs: {atk:252, spd:252, hp: 4}, nature: 'Jolly',
			},
			'Bronze0re': {
				species: 'Bronzong', ability: 'Regenerator', item: 'leftovers',
				moves: ['toxic', 'doomdesire', 'cosmicpower',],
				signatureMove: 'Gyro Ball',
				evs: {hp: 252, def: 252, spdef: 4}, nature: 'Relaxed',
			},
			'TatacoolThreat': {
				species: 'Plasmanta', ability: 'Protean', item: 'Air Balloon',
				moves: ['thunderbolt', 'scald', 'flashcannon'],
				signatureMove: 'Sludge Wave',
				evs: {spa: 252, spd: 252, spdef: 4}, nature: 'Timid',
			},
			'illst.God': {
				species: 'Lucario-Mega', ability: 'Banter', item: 'Life Orb', gender: 'M',
				moves: ['flashcannon', 'psystrike', 'earthpower'],
				signatureMove: 'Aura Sphere',
				evs: {spa: 252, spd: 252, hp: 4}, nature: 'Timid',
			},
		};

		let pool = Object.keys(sets).randomize();
		for (let i = 0; i < 6; i++) {
			if (i === 2) {
				let monIds = pool.slice(0, 6).map(p => toId(p));
				let monName = Object.keys(sets).filter(s => toId(s) === userid)[0];
				if (monName && monIds.indexOf(userid) === -1) {
					pool[2] = monName;
				}
			}
			let name = pool[i];
			let set = sets[name];
			set.level = 100;
			set.name = name;
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};