const d = require('discord.js');
const bot = new d.Client();
const prefix = process.env.prefix

bot.on("ready", ready => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame(`j!helping on ${bot.guilds.array().length} servers `)
})


bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.channel.send("Help and ping! :grin:")
  }
  if (message.content == prefix + "ping") {
    message.channel.send(`:ping_pong: PONG! My ping is ${bot.ping} ms!`)
  }
})

bot.login(process.env.tok)
