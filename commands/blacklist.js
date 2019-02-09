const Discord = require('discord.js')
const fs = require('fs');
const blHook = new Discord.WebhookClient("529585523128401931", process.env.blHook);
const db = require('quick.db')

exports.run = (lofi, message, args) => {
  if (message.author.id !== "331265944363991042" && message.author.id !== "304377187057008645") return undefined;
  
  if (!args[0]) return message.channel.send('Please choose one. You want to **add** a user to Blacklist, or **delete** the user from the blacklist.')
  if (args[0] != 'add' && args[0] != 'del' && args[0] != 'delete' && args[0] != 'remove') return;
  
  if (args[0] == 'add') {
  const blUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if (!blUser) return message.channel.send('Please supply the ID member, or mention the user.')
  
  const reason = args.slice(2).join(" ")
  if (!reason) return message.channel.send("Please supply the reason.")
  
       const Embed = new Discord.RichEmbed()
      .setDescription(`${blUser.user} / ${blUser.id} has been blacklisted. \n**Reason:** ${reason}`)
      .setColor("RED")
      .setTimestamp()
      blHook.send(Embed)
    db.set(`Blacklist_${blUser.id}`, true)
    message.channel.send(`${blUser.user} / ${blUser.id} has been blacklisted from using the bot.`)
  }
  
  
  if (args[0] == 'delete' || args[0] == 'del' || args[0] == 'remove') {
  const blUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if (!blUser) return message.channel.send('Please supply the ID member, or mention the user.')
  
  const reason = args.slice(2).join(" ")
  if (!reason) return message.channel.send("Please supply the reason.")
  
       const Embed = new Discord.RichEmbed()
      .setDescription(`${blUser.user} / ${blUser.id} has been unblacklisted. \n**Reason:** ${reason}`)
      .setColor("GREEN")
      .setTimestamp()
      blHook.send(Embed)
    db.delete(`Blacklist_${blUser.id}`)
    message.channel.send(`${blUser.user} / ${blUser.id} has been unblacklisted`)
  }
}
