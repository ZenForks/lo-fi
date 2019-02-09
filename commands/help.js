const { RichEmbed } = require('discord.js')

exports.run = (lofi, message, args) => {
  if (!args[0]) {
  const help = new RichEmbed()
  .setAuthor('<> required, [] optional.')
  .setTitle('Lo-Fi Commands List').setURL('https://lofi-bot.glitch.me/')
  .setDescription('Type `lofi help [command]` to get more info on a specific command. \nAdditional information can be found [here](https://lofi-bot.glitch.me/commands.html).')
  .addField('Radio', '`play`, `stop`, `volume`')
  .addField('Developer', '`blacklist`, `eval`, `exec`, `reload`')
  .addField('Other', '`donate`, `github`, `help`, `invite`, `ping`, `prefix`, `server`, `stats`, `submit`, `upvote`, `website`')
  .setImage(`https://pbs.twimg.com/media/DbzpBHtW4AAC5RC.jpg`)
  .setColor(0x1d1d1d)
  return message.channel.send(help)
  }
  
  if (args[0] != 'play' 
      && args[0] != 'volume'
      && args[0] != 'help'
      && args[0] != 'prefix'
      && args[0] != 'stats'
      && args[0] != 'submit') {
    return message.channel.send({ embed: { color: 0x242424, description: `No subcommand found. Type \`lofi help help\` for more information.` }})
  }
    
  if (args[0] == 'play') {
      const play = new RichEmbed()
      .addField('How To Use', '`lofi play <station>`', true)
      .addField('Example', '`lofi play chillhop`', true)
      .addField('Stations', '`neotic`, `chillhop`, `chilledcow/cow`, `college-music/college`, `mellowbeat`, `steezyasfuck`, `shiloh-dynasty/shiloh`, `tbb`, `nourish`, `ambition`, `in-your-chill`, `7clouds`, `homework-radio`, `freecodecamp`, `ryan-celsius`', true)
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541548817305042952/unknown.png')
      message.channel.send(play)
    }
  
  if (args[0] == 'volume') {
    const volume = new RichEmbed()
      .addField('How To Use', '`lofi volume <number>`', true)
      .addField('Example', '`lofi play 0.5 (which is the volume is 50%)`', true)
      .addField('Volume Range', '0 - 2', true)
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541548649092481026/unknown.png')
    message.channel.send(volume)
  }
  
  if (args[0] == 'help') {
    const help = new RichEmbed()
      .addField('How To Use', '`lofi help [command]`', true)
      .addField('Example', '`lofi help play`', true)
      .addField('Available', '`Play`, `Volume`, `Help`, `Prefix`, `Stats`, `Submit`.', true)
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541548334490320896/unknown.png')
    message.channel.send(help)
  }
  
  if (args[0] == 'prefix') {
    const prefix = new RichEmbed()
      .addField('How To Use', '`lofi prefix [prefix]`', true)
      .addField('Example', '`lofi prefix -> (current p: lofi) / lofi prefix >`', true)
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541548221143711744/unknown.png')
    message.channel.send(prefix)
  }
  
  if (args[0] == 'stats') {
    const stats = new RichEmbed()
      .addField('How To Use', '`lofi stats <usage/server/info>`', true)
      .addField('Example', '`lofi stats usage`', true)
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541546700397871105/unknown.png')
    message.channel.send(stats)
  }
  
  if (args[0] == 'submit') {
    const submit = new RichEmbed()
      .addField('How To Use', '`lofi submit <youtube channel/live video>`', true)
      .addField('Example', '`lofi submit https://www.youtube.com/channel/UC4X7J9D6VbTIwnFDFNkfQ1A`', true)
      .addField('Available', 'For this time, we\'re only available to accept YouTube ones.')
      .setColor(0x1d1d1d)
      .setImage('https://cdn.discordapp.com/attachments/536463033019400192/541547709539024896/unknown.png')
    message.channel.send(submit)
  }
}
