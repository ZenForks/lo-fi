const { RichEmbed, version } = require("discord.js")
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const moment = require('moment')
const db = require('quick.db')

exports.run = (lofi, message, args) => {
    
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

  // const duration = require('moment').duration(process.uptime(), 'seconds').format('dd:hh:mm:ss')
  const serverUptime = require('moment').duration(require('os').uptime(), 'seconds').format("D [days], H [hrs], m [mins], s [secs]");
  const countCores = os.cpus().length
  const cpuModel = os.cpus()[0].model
  const guild = lofi.guilds.size.toLocaleString()
  const chan = lofi.channels.size.toLocaleString()
  const user = lofi.users.size.toLocaleString()
  const Vc = lofi.voiceConnections.size.toLocaleString()
  const usage = formatBytes(process.memoryUsage().heapUsed)
  const Node = process.version
  const CPU = percent.toFixed(2)
  const created = moment.utc(lofi.user.createdAt).format('MMMM Do YYYY')
  const freeMem = formatBytes(Math.round(require('os').freemem))
  const totalMem = formatBytes(Math.round(require('os').totalmem))
  
  if (!args[0]) return message.channel.send({ embed: { color: 0x242424, description: `No subcommand available. Type \`lofi help stats\` for more information.` }})
  if (args[0] != 'usage' && args[0] != 'server' && args[0] != 'info') return message.channel.send({ embed: { color: 0x242424, description: `No subcommand found. Type \`lofi help stats\` for more information.` }})
  
  if (args[0] == 'usage') {
    const usaged = new RichEmbed()
    .addField('CPU Cores', os.cpus().length, true)
    .addField('RAM (Total/Free/Used)', `**\`${totalMem}\`** | **\`${freeMem}\`** | **\`${usage}\`**`, true)
    .addField('CPU Usage', `${CPU}%`, true)
    .setColor(0x242424)
    return message.channel.send(usaged)
  }
      
  if (args[0] == 'server') {
    const servers = new RichEmbed()
    .addField('Servers', guild, true)
    .addField('Users', user, true)
    .addField('Channels', chan, true)
    .addField('Connected Users', Vc, true)
    .addField('Lo-Fi Uptime', lofi.util.parseDur(lofi.uptime), true)
    .setColor(0x242424)
    return message.channel.send(servers)
  }
  
  if (args[0] == 'info') {
    const bot = new RichEmbed()
    .addField('Node.JS', Node, true)
    .addField('Discord.JS', version, true)
    .addField('Lo-Fi', `${lofi.package.version}`, true)
    .addField('License', `${lofi.package.license}`, true)
    .addField('Developer', `<@331265944363991042> \n<@304377187057008645>`, true)
    .setColor(0x242424)
    .addField('Created Date', created, true)
    return message.channel.send(bot)
  }
   
      /*.addField('General Information', `• Uptime: **\`${duration}\`**\n• Users: **\`${user}\`** \n• Guilds: **\`${guild}\`** \n• Channels: **\`${chan}\`** \n• Shards: **\`none\`** `)
      .addField('Bot Information', `• OS: **\`Linux x64\`** \n• CPU: **\`${countCores} Cores | ${cpuModel}\`** \n• Memory: **\`${usage} MB / ${totalMem} MB (${CPU}%)\`**`)
      .addField('Additional Information', `• Date Created: **\`${created}\`** \n• Lo-Fi played: **\`${Vc} Voice Connections\`** \n• Discord.js: **\`${version}\`** \n• Node.js **\`${Node}\`**`)*/
      
    })
}

function formatBytes(a,b){
if(0==a) return "0 Bytes";
var c =1024, d = b || 2, e = ["B","KB","MB","GB","TB","PB","EB","ZB","YB"], f = Math.floor(Math.log(a)/Math.log(c));
return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]
}
