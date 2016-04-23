'use strict';

exports.commands = {
	whip: function (target, room, user) {
		if (!this.can('lock', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has whipped ' + targetUser + '.');
		targetUser.popup(user + ' has whipped you.');
	},
	smack: function (target, room, user) {
		if (!this.can('ban')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(user + ' has smacked ' + targetUser + '.');
	},
	memed: function (target, room, User) {
		if (!this.can('declare')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has memed ' + targetUser + '.');
		this.parse('/declare NIIIIICE MEEEEME');
	},
	banhammer: function (target, room, User) {
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has gave the hammer to ' + target + '.');
		targetUser.popup("The Hammer has been dropped");
	},
	rekt: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/C26ZRE6.gif" width="600" height="300"</center>');
	},
	bombing: function (target, room, User) {
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' bombed ' + target + '.');
		targetUser.popup("The bomb has exploded");
	},
	noscope: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><img src=http://stream1.gifsoup.com/view3/20140324/5006332/360-noscope-chicken-o.gif width="600" height="300"</center>');
	},
	roflstomp: function (target, room, User) {
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has roflstomped ' + target + '.');
		targetUser.popup("GIT ROFLSTOMPED BOII!");
	},
	tip: function (target, room, User) {
		if (!this.can('ban', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has tipped their fedora to ' + targetUser + '.');
		targetUser.popup('Someone has tipped their fedora to you');
	},
	bow: function (target, room, User) {
		if (!this.can('broadcast', null, room)) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has bowed to ' + targetUser + '.');
		targetUser.popup('Someone has bowed to you');
	},
	rekted: function (target, room, User) {
		if (!this.can('eval')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' has destroyed ' + targetUser + '.');
		targetUser.popup('Someone has destroyed you');
	},
	smite: function (target, room, User) {
		if (!this.can('eval')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' smite ' + targetUser + ' with thier wrath.');
		targetUser.popup('A GOD has made you feel their wrath');
	},
	fired: function (target, room, User) {
		if (!this.can('lock')) return this.errorReply('Access Denied');
		let targetUser = Users.get(target);
		room.add(User + ' fired ' + targetUser + '.');
		targetUser.popup('YOU HAVE BEEN FIRED!');
	},
	broke: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox('<center><video src="http://r4---sn-ab5l6nzs.googlevideo.com/videoplayback?source=youtube&pl=24&mime=video/webm&ip=68.132.51.87&expire=1456788631&id=o-AHMd8ZLgKPboESCKb60dXCAAV6rjEC9Kof3-2-QQfdB8&keepalive=yes&upn=1M4ZMLLmG0w&key=cms1&fexp=9406852,9408491,9412845,9416126,9416985,9418223,9420452,9422596,9423661,9423662,9424037,9424135,9424772,9425780,9427245,9429055,9429087,9429505&clen=170856526&itag=242&dur=35995.760&signature=34DC47CC23F06F6F70A02FD47DE6DA98EE94D7C1.7185593359F397AC90C9498AD91CB6A09211E9E2&ipbits=0&sver=3&sparams=clen,dur,expire,gir,id,initcwndbps,ip,ipbits,itag,keepalive,lmt,mime,mm,mn,ms,mv,nh,pl,source,upn&lmt=1449590895266333&gir=yes&title=Windows-Error-Remix-10-Hours%20[BollyCine.Net]&redirect_counter=1&req_id=a7b35ef98b4ba3ee&cms_redirect=yes&mm=30&mn=sn-ab5l6nzs&ms=nxu&mt=1456766974&mv=m" controls"play/stop" width="400" height="300"></video></center>');
	},
};
