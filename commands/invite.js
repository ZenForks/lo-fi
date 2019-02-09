exports.run = (lofi, message, args) => {
  const { RichEmbed } = require('discord.js')
  const Invite = new RichEmbed()
 .setDescription("Invite Lo-Fi: [restricted, avoid the anti-invite features](https://discordapp.com/api/oauth2/authorize?client_id=521995463369687040&response_type=code&permissions=36703232&redirect_uri=http%3A%2F%2Flofi-bot.glitch.me%2Fthanks.html&scope=bot)")
 .setColor(0x242424)
  message.channel.send(Invite)
}
