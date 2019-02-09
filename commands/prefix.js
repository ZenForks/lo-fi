const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (lofi, message, args) => {
  var prefix = 'lofi.';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = 'lofi.';
  else prefix = fetched;
  
  let preFIX = args.join(' ')

  if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '331265944363991042' && message.author.id !== '304377187057008645') return message.channel.send({embed: { color: 0x242424, description: `You don't have **Manage Server** permissions.` }});
  
  if (!preFIX) return message.channel.send({embed: { color: 0x242424, description: `Lo-Fi's current prefix is **\`${prefix}\`**` }});

  db.set(`prefix_${message.guild.id}`, preFIX)
  return message.channel.send({embed: { color: 0x242424, description: `Prefix changed to: **\`${preFIX}\`**` }});

}
