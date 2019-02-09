const exec = require('child_process').exec;
const Discord = require('discord.js')

exports.run = async (lofi, message, args) => {
    if (message.author.id !== "331265944363991042") return;
  
    const execRunning = new Discord.RichEmbed()
      .setDescription(`${args.join(' ')}`)
      .setFooter("Please wait, this process will take a minute")
      .setColor('BLURPLE')
    message.channel.send(execRunning).then(message => message.delete(7500))
    
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
};