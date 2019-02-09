exports.run = (lofi, message, args) => {
  const { RichEmbed } = require('discord.js')
   const GitHub = new RichEmbed()
 .setDescription("Github Repository: https://github.com/imtoasted/lo-fi")
 .setColor(0x242424)
  message.channel.send(GitHub)
}
