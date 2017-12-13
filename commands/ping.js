
module.exports.run = (bot, message, args) => {
    message.channel.send(":ping_pong: PONG! My ping is " + bot.ping + "ms!")
}

module.exports.help = {
  name: "ping",
  usage: "gets the ping of the bot.",
  informamtion: "ping"
}
