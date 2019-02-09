const { RichEmbed } = require('discord.js')
const warningTokenMessage = ["Gausah ngecek-ngecek anjing", "Wooo haram", "0822 bapak lu ngocok"]
const db = require('quick.db')

exports.run = (lofi, message, args) => {
      if (message.author.id !== '331265944363991042' && message.author.id !== '531792925982720000' && message.author.id !== '304377187057008645') return;
    try {
        let codein = args.join(' ');
        let code = eval(codein);
    
      if (!codein) return;
      if (codein.includes(`SECRET`)) {
        code = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
        console.log(`${message.author.tag} use this eval to against the tokens and privacy.`)
      } else {
        code = eval(code);
      }

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }

}
