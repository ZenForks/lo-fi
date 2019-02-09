const { RichEmbed } = require('discord.js')

exports.run = async (lofi, message, args) => {
 const Server_Invite = new RichEmbed()
 .setDescription("Invite Link Code: **`MyGH4YC`**")
 .setColor(0x242424)
 message.channel.send(Server_Invite)
}
