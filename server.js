const Discord = require("discord.js");
const db = require('quick.db')
const fs = require("fs");
const lofi = new Discord.Client({ disableEveryone: true });
const request = require('request')
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const snekfetch = require('snekfetch')
const readyStats = new Discord.WebhookClient(`536474469850677277`, process.env.readyStats);
lofi.package = require("./package.json")
lofi.util = require("./util.js")
lofi.connections = new Discord.Collection()

lofi.on("ready", () => {
      function randomStatus() {
        let status = ['Lo-Fi', `${lofi.voiceConnections.size} listening me`, `${lofi.guilds.size} guilds`, `${lofi.users.size} users`];
        // let status = ["Please be patient", 'Under Maintenance']
        let rstatus = Math.floor(Math.random() * status.length);
        lofi.user.setActivity(status[rstatus], {type: 'STREAMING' , url: 'https://www.twitch.tv/ninja'});

    }; setInterval(randomStatus, 60000)
  
  console.log('Connected.')
  const Embed5 = new Discord.RichEmbed()
  .setDescription(`Connected.`)
  .setColor("BLURPLE")
  .setTimestamp()
  readyStats.send(Embed5)
  /* {type: 'STREAMING' , url: 'https://www.twitch.tv/raygd'}); */
})

lofi.on('disconnect', () => console.log('Disconnected.'));
lofi.on('reconnecting', () => console.log('Reconnecting.'));

process.on('unhandledRejection', error => {
    if (error.name === 'DiscordAPIError') return;
    console.error(`Unhandled Error Found! \n ${error.stack}`)
});

lofi.login(process.env.SECRET).catch(console.error);
lofi.on('warn', console.warn);
lofi.on('error', console.error);

lofi.on('message', async message => {
  var prefix = 'lofi ';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = 'lofi ';
  else prefix = fetched;
  
  let msg = message.content.toLowerCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  const blacklist = db.fetch(`Blacklist_${message.author.id}`)
      
  if (!msg.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;  

    try {
  if (blacklist) {
       console.log(`${sender.tag} - ${sender.id} - trying to run the **${cmd}** cmd.`);
       const Embed = new Discord.RichEmbed()
      .setDescription(`${sender.tag} - ${sender.id} - trying to run the **${cmd}** cmd.`)
      .setColor("RED")
      .setTimestamp()
      readyStats.send(Embed)
      return message.channel.send({ embed: { color: 0xcc5353, description: `**Sorry.** You've been blacklisted by Lo-Fi Owner/Developer. [Go to the Support Server](https://discord.gg/MyGH4YC) for Blacklist appeals, or you can email the owner for Blacklist Appeals in here: **\`lofi_appeals@yahoo.com\`**`}});
  }    
      let command = require(`./commands/${cmd}.js`);
      command.run(lofi, message, args);
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(`${sender.tag} - ${sender.id} - ${cmd}`);
      const Embed = new Discord.RichEmbed()
      .setDescription(`${sender.tag} - ${sender.id} - ${cmd}`)
      .setColor("GREEN")
      .setTimestamp()
      readyStats.send(Embed)
    }
  
  });
lofi.on("guildCreate", guild => {
   if (!guild.available) return;
   const Hook = new Discord.WebhookClient(`536474379408769034`, process.env.GUILD);
  console.log(`Invited to: ${guild.name}, created by ${guild.owner.user.username}`)
  const Embed = new Discord.RichEmbed()
  .setDescription(`Invited to: ${guild.name}, created by ${guild.owner.user.username}`)
  .setColor("GREEN")
  .setTimestamp()
  Hook.send(Embed)
});

lofi.on("guildDelete", guild => {
   if (!guild.available) return;
  const Hook = new Discord.WebhookClient(`536474379408769034`, process.env.GUILD);
  console.log(`Kicked from: ${guild.name}.`)
   const Embed = new Discord.RichEmbed()
  .setDescription(`Kicked from: ${guild.name}.`)
  .setColor("RED")
  .setTimestamp()
  Hook.send(Embed)
});
