"use strict";
let fs = require("fs");
let ssbdata = {};
fs.readFileSync("data/ssb-data.txt").toString().split("\n\n")
    .forEach(l => {
        let name = toId(l.split("(")[0]);
        ssbdata[name] = l.replace(/\n/g, "<br />");
    });

exports.commands = {
    ssb: function (target, room, user) {
        if (!target) return this.errorReply("Please specify what you are searching for.");
        if (!this.runBroadcast()) return false;
        if (!ssbdata[toId(target)]) return this.errorReply("Invalid staffmon.");
        this.sendReplyBox(ssbdata[toId(target)]);
    },
};