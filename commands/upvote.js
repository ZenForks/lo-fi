const { RichEmbed } = require('discord.js')

exports.run = async (lofi, message, args) => {
 const Upvote = new RichEmbed()
 .setTitle('Vote Link')
 .setDescription('[Discord Bots](https://discordbots.org/bot/521995463369687040) \n[Bots for Discord](https://botsfordiscord.com/bots/521995463369687040) \n[Discord Bot List](https://discordbotlist.com/bots/521995463369687040) \n[Discord Boats](https://discord.boats/bot/521995463369687040) \n[Divine Discord Bot List](https://divinediscordbots.com/bots/521995463369687040) \n[Bots on Discord](https://bots.ondiscord.xyz/bots/521995463369687040) \n[Discord Bots Group](https://discordbots.group/bot/521995463369687040)')
 .setColor(0x242424)
 message.channel.send(Upvote)
}
