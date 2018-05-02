const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle(`${bot.user.username} Ping`)
  .setDescription(`:ping_pong: PONG!!!! My heartbeat is ${bot.ping}, and my memory usage is ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB.`)
  .setTimestamp()
  .setColor(`RANDOM`)
  .setFooter("RoBOTic Ping")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "ping"
}
