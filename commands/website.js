const { RichEmbed } = require('discord.js')

exports.run = async (lofi, message, args) => {
 const WebSite = new RichEmbed()
 .setDescription("[Primary Website](https://lofi-bot.glitch.me) and [Secondary Website](https://lofi-special.glitch.me/)")
 .setTitle("Lo-Fi Official Website")
 .setColor(0x242424)
 .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541551102748000257/unknown.png')
 message.channel.send(WebSite)
}
