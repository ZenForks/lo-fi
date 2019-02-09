exports.run = (lofi, message, args) => {
  const { RichEmbed } = require('discord.js')
   const Donate = new RichEmbed()
  .setAuthor('Donate')
 .setDescription("Patreon: https://www.patreon.com/lo_fi")
  .setFooter("We're just wanna to keep Lo-Fi alive :)")
 .setColor(0x242424)
  message.channel.send(Donate)
}
