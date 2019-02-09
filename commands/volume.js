const Discord = require('discord.js')

exports.run = (lofi, message, args) => {
      const dbl = new (require('dblapi.js'))(process.env.DISCORD_BOTS, lofi);
      dbl.hasVoted(message.author.id).then(voted => {
      if (!voted) {
            return message.channel.send({ embed: { color: 0x242424, description: "Vote the bot first. Type `lofi.upvote` or [click here](https://discordbots.org/bot/521995463369687040)" }})
      }
            
      if (voted) {
      if (message.channel.type == "dm") return;
            
      if (!message.member.voiceChannel) {
            return message.channel.send({ embed: { color: 0x242424, description: `Please connect to the voice channel first.` }})
      }
               
      if (!lofi.connvoice) {
            return message.channel.send({ embed: { color: 0x242424, description: `There's no radio played right now.` }})
      }
      
      if (!args[0]) {
            return message.channel.send({ embed: { color: 0x242424, description: `Please put the volume length.` }})
      }
            
      if (isNaN(args[0])) {
          return message.channel.send({ embed: { color: 0x242424, description: `Volume that you put is not a number. Please put a valid number.` }})
      }
      
      if(args[0] > 2) {
            return message.channel.send({ embed: { color: 0x242424, description: `Volume can be set in range 0 - 2.` }})
      }
        
      lofi.connvoice.dispatcher.setVolume(args[0])
      return message.channel.send({ embed: { color: 0x242424, description: `Volume has been changed to **${args[0]}**` }})
      }
    
    })
}
