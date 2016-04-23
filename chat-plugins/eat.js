 exports.commands = {
 
 eat: function(target, room, user) {
      if (!target) return this.sendReply("Eat needs a target.");
      return this.parse('/me eats ' + target + '!');
    },
 };