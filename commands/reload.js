const Discord = require('discord.js')

exports.run = (lofi, message, args) => {
  
    var authors = ["331265944363991042"];
    if(!authors.includes(message.author.id)) return;
  
  try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
      return message.channel.send({embed: { color: 0x242424, description: `Failed to reload: **\`${args[0]}.js\`**` }});
    }

    message.channel.send({embed: { color: 0x242424, description: `Successfully reload: **\`${args[0]}.js\`**` }});
};
