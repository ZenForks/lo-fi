const Discord = require("discord.js")
const ytdl = require('ytdl-core')

exports.run = async (lofi, message, args) => {
  if (message.channel.type === "dm") return;
  if (!message.member.voiceChannel) return message.channel.send({ embed: { color: 0x242424, description: `Please connect to the voice channel first.` }})
  if (!lofi.connvoice) return message.channel.send({ embed: { color: 0x242424, description: `There's no radio played right now.` }})
  
  await message.member.voiceChannel.leave()
  message.channel.send({ embed: { color: 0x242424, description: `Disconnected.` }})
  message.channel.send({ embed: { color: 0x7289DA, description: `Hey. Consider donating Lo-Fi in https://www.patreon.com/lo_fi if you like Lo-Fi, small donation will help this bot keeping alive. `}}).then(donate => donate.delete(12000));
}
