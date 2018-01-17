const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle(`${bot.user.username} Ping`)
  .setDescription(`:ping_pong: PONG!!!! My heartbeat is ${bot.ping}, and my memory usage is ${}`)
}

module.exports.help = {
  name: "ping"
}
