const discord = require('discord.js')
const prefix = process.env.prefix

module.exports.run = (bot, message, args) => {
  if (message.content == prefix + "ping") {
    message.channel.send(":ping_pong: PONG! My ping is " + bot.ping + "ms!")
  }
}
