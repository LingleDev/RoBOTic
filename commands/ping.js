module.exports.run = (bot, message, args) => {
     message.channel.send({embed: {
  color: 3447003,
  description: "PONG! :ping_pong: My ping is " + bot.ping + "ms!"
}}).then(m => m.delete(5000));
  console.log(`${message.author.username} used the ping command. Bot Ping: ${bot.ping}`)
}

module.exports.help = {
  name: "ping",
  usage: ``,
  information: ""
}
