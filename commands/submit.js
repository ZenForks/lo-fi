const Discord = require('discord.js')
const mentionHook = new Discord.WebhookClient("536474491413463040", process.env.Submitted);
const talkedRecently = new Set();

exports.run = async (lofi, message, args) => {
    if (message.channel.type == "dm") return;
  
    if (!args[0]) return message.channel.send({ embed: { color: 0x242424, description: `Please supply a valid YouTube channel or live streaming video.` }})
  
    // Invalid url
    const YouTube = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)/g.test(message.content);
    if (!YouTube) return message.channel.send({ embed: { color: 0x242424, description: `Please put a valid link.` }})
  
        if (talkedRecently.has(message.author.id)) {
            return message.channel.send({ embed: { color: 0x242424, description: `Cooldown: 60 seconds. Please wait. <a:lofiding:541147874856271873>` }})
    } else {

               let logsEmbed = new Discord.RichEmbed()
              .setDescription(`**requester tag:** ${message.author.tag} \n**requester id:** ${message.author.id} \n**link streamer:** ${args.join(" ")}`)
              .setColor("RANDOM")
              .setTimestamp()
                  
              mentionHook.send(logsEmbed);
              message.channel.send({ embed: { color: 0x242424, description: `Thank you. Your request is in a queue. It is now awaiting approval, we will notify you via DM.` }})

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
 }
