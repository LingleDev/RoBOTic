const discord = require('discord.js')
const prefix = "j!"

module.exports.run = (bot, message, args) => {
  if (message.content == prefix + "ping") {
    message.channel.send(":ping_pong: PONG! My ping is " + bot.ping + "ms!")
  }
}
