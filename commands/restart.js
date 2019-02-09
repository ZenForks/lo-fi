const Discord = require("discord.js")

exports.run = async (lofi, message, args) => {
      var authors = ["331265944363991042"];
    if(!authors.includes(message.author.id)) return;
  
  message.channel.send('Restarting...')
    .then(msg => lofi.destroy())
  
    .then(() => delete require.cache[require.resolve(`./blacklist.js`)])
    .then(() => delete require.cache[require.resolve(`./unblacklist.js`)])
    .then(() => delete require.cache[require.resolve(`./eval.js`)])
    .then(() => delete require.cache[require.resolve(`./help.js`)])
    .then(() => delete require.cache[require.resolve(`./ping.js`)])
    .then(() => delete require.cache[require.resolve(`./play.js`)])
    .then(() => delete require.cache[require.resolve(`./reload.js`)])
    .then(() => delete require.cache[require.resolve(`./restart.js`)])
    .then(() => delete require.cache[require.resolve(`./stats.js`)])
    .then(() => delete require.cache[require.resolve(`./stop.js`)])
    .then(() => delete require.cache[require.resolve(`./changelog.js`)])
    .then(() => delete require.cache[require.resolve(`../server.js`)])
    .then(() => delete require.cache[require.resolve(`../shard.js`)])
  
    .then(() => lofi.login(process.env.SECRET))
    .then(msg => message.channel.send("Restart completed."))
  
  return;
}
