const Discord = require("discord.js")

exports.run = (lofi, message, args) => {
  let start = Date.now();
  message.channel.send({ embed: { color: 0x242424, description: `Please wait...` }}).then(message => { 
    message.delete();
    let diff = (Date.now() - start).toLocaleString();
    		return message.channel.send({ embed: { color: 0x242424, description: `${diff} miliseconds.` }})
  });
}
