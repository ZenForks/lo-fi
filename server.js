const Discord = require("discord.js");
const db = require('quick.db')
const { get } = require('node-superfetch')
const fs = require("fs");
const lofi = new Discord.Client({ disableEveryone: true });
const request = require('request')
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const snekfetch = require('snekfetch')
lofi.package = require("./package.json")
lofi.util = require("./util.js")
lofi.connections = new Discord.Collection()

lofi.on("ready", () => {
      function randomStatus() {
        let status = ['hey you stole me~'];
        // let status = ["Please be patient", 'Under Maintenance']
        let rstatus = Math.floor(Math.random() * status.length);
        lofi.user.setActivity(status[rstatus], {type: 'STREAMING' , url: 'https://www.twitch.tv/ninja'});

    }; setInterval(randomStatus, 60000)
  
  console.log('Connected.')
  /* {type: 'STREAMING' , url: 'https://www.twitch.tv/raygd'}); */
})

lofi.on('disconnect', () => console.log('Disconnected.'));
lofi.on('reconnecting', () => console.log('Reconnecting.'));

process.on('unhandledRejection', error => {
    if (error.name === 'DiscordAPIError') return;
    console.error(`Unhandled Error Found! \n ${error.stack}`)
});

lofi.login("YOUR FRICKING TOKEN").catch(console.error);
lofi.on('warn', console.warn);
lofi.on('error', console.error);

lofi.on('message', async message => {
  var prefix = 'lofi ';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = 'lofi ';
  else prefix = fetched;
  
  let { body } = await get('https://lofi-canary.glitch.me/api/blacklist/${message.author.id}')
  if (body.error === 'not_found') body = false;
  
  let msg = message.content.toLowerCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  const blacklist = db.fetch(`Blacklist_${message.author.id}`)
      
  if (!msg.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;  

    try {
  if (body === true){
      return message.channel.send({ embed: { color: 0xcc5353, description: `**Sorry.** You've been blacklisted by Lo-Fi Owner/Developer. [Go to the Support Server](https://discord.gg/MyGH4YC) for Blacklist appeals, or you can email the owner for Blacklist Appeals in here: **\`lofi_appeals@yahoo.com\`**`}});
  }
      let command = require(`./commands/${cmd}.js`);
      command.run(lofi, message, args);
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(`${sender.tag} - ${sender.id} - ${cmd}`);
    }
  
  });
lofi.on("guildCreate", guild => {
   if (!guild.available) return;
});

lofi.on("guildDelete", guild => {
   if (!guild.available) return;
});
