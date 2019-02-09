const Discord = require("discord.js")
const ytdl = require('ytdl-core')
const node_opus = require('node-opus')
const ffmpeg = require("ffmpeg-binaries");
const oppuscript = require('opusscript')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.YOUTUBE_API_V3);

exports.run = async (lofi, message, args) => {
  /* Unknown Message */
  if (message.channel.type == "dm") return;
  if (!message.member.voiceChannel) return message.channel.send({ embed: { color: 0x242424, description: `Please connect to the voice channel first.` }})
  if (!args[0]) return message.channel.send({ embed: { color: 0x242424, description: `Choose the stations first.` }})
  
  if (args[0] != 'ryancelsius' && args[0] != 'ryan-celsius'
      && args[0] != 'freecodecamp' 
      && args[0] != 'neotic'
      && args[0] != 'chillhop'
      && args[0] != 'chilledcow' && args[0] != 'cow'
      && args[0] != 'college-music' && args[0] != 'college'
      && args[0] != 'mellowbeat'
      && args[0] != 'saf' && args[0] != 'steezyasfuck'
      && args[0] != 'shiloh' && args[0] != 'shiloh-dynasty' && args[0] != 'shilohdynasty'
      && args[0] != 'tbb' && args[0] != 'thebootlegboy' && args[0] != 'the-bootleg-boy'
      && args[0] != 'nourish'
      && args[0] != 'ambition'
      && args[0] != 'inyourchill' && args[0] != 'in-your-chill'
      && args[0] != '7clouds'
      && args[0] != 'hr' && args[0] != 'homework-radio' && args[0] != 'homeworkradio') {
    return message.channel.send({ embed: { color: 0x242424, description: `No subcommand found. Type \`lofi help play\` for more information.` }})
  }
  
  const permissions = message.member.voiceChannel.permissionsFor(lofi.user);
  if (!permissions.has('CONNECT')) return message.channel.send({ embed: { color: 0x242424, description: `Unknown Permissions: **Connect**` }})
  if (!permissions.has('SPEAK')) return message.channel.send({ embed: { color: 0x242424, description: `Unknown Permissions: **Speak**` }})
  
    if (args[0] == 'ryancelsius' || args[0] == 'ryan-celsius') {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/AaYiRrPSTNw) \npeople: [ryan-celsius] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/AaYiRrPSTNw/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/AaYiRrPSTNw', { quality: 'highestaudio' });
        const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
    }
  
    if (args[0] == 'freecodecamp') {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=vAKtNV8KcWg) \npeople: [freecodecamp] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/vAKtNV8KcWg/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=vAKtNV8KcWg', { quality: 'highestaudio' });
        const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
    }
  
    if (args[0] == "neotic") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=fxn8p26WTR4) \npeople: [neotic] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/fxn8p26WTR4/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=fxn8p26WTR4', { quality: 'highestaudio' });
        const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
    
    if (args[0] == "chillhop") {
      await message.member.voiceChannel.leave()

      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=bebuiaSKtU4) \npeople: [chillhop] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/bebuiaSKtU4/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=bebuiaSKtU4', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "chilledcow" || args[0] == "cow") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/TnkWkRXgk1w) \npeople: [chilledcow] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/TnkWkRXgk1w/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/TnkWkRXgk1w', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "college-music" || args[0] == "college") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/F0IbjVq-fgs) \npeople: [college-music] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/F0IbjVq-fgs/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/F0IbjVq-fgs', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "mellowbeat") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()

        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=qK9OLRbAW30) \npeople: [mellowbeat-seeker] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/qK9OLRbAW30/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=qK9OLRbAW30', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "steezyasfuck" || args[0] == 'saf') {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=O9MV2hTefaY) \npeople: [steezyasfuck] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/O9MV2hTefaY/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=O9MV2hTefaY', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "shiloh" || args[0] == "shiloh-dynasty" || args[0] == "shilohdynasty") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/2atQnvunGCo) \npeople: [college-music] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/2atQnvunGCo/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/2atQnvunGCo', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }

    if (args[0] == "tbb" || args[0] == "thebootlegboy" || args[0] == "the-bootleg-boy") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/nSeg_XDiMf0) \npeople: [the-bootleg-boy] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/nSeg_XDiMf0/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/nSeg_XDiMf0', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }

    if (args[0] == "nourish") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/IjMESxJdWkg) \npeople: [nourish] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/IjMESxJdWkg/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/IjMESxJdWkg', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }

    if (args[0] == "ambition") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/sweongiU9x8) \npeople: [ambition] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/sweongiU9x8/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/sweongiU9x8', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }

    if (args[0] == "inyourchill" || args[0] == "in-your-chill") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/B8tQ8RUbTW8) \npeople: [in-your-chill] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/B8tQ8RUbTW8/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/B8tQ8RUbTW8', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "7clouds") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://youtu.be/6KVjo36lrSw) \npeople: [seven-clouds] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/6KVjo36lrSw/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://youtu.be/6KVjo36lrSw', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }
  
    if (args[0] == "homework-radio" || args[0] == "homeworkradio" || args[0] == "hr") {
      await message.member.voiceChannel.leave()
      await message.member.voiceChannel.join()
        .then(connection => {
        lofi.connvoice = connection;
        const embed = new Discord.RichEmbed()
        .setDescription(`played: [this lofi](https://www.youtube.com/watch?v=IPxbElRKjDk) \npeople: [homework-radio] \nrequest: [${message.author}]`)
        .setImage(`https://i.ytimg.com/vi/IPxbElRKjDk/maxresdefault.jpg?width=1280&height=720`)
        .setColor("RANDOM")
        message.channel.send(embed);
        
        const stream = ytdl('https://www.youtube.com/watch?v=IPxbElRKjDk', { quality: 'highestaudio' });
            const dispatcher = connection.playStream(stream);
        
        dispatcher.on('end', () => message.member.voiceChannel.leave());
            dispatcher.on('error', e => message.channel.send(`${e}`));
            dispatcher.setVolume(1);
            dispatcher.setBitrate(96)
        })
        .catch(console.log);
      }

}
