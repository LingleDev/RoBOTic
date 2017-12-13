const d = require('discord.js');
const bot = new d.Client();
const prefix = process.env.prefix
const fs = require('fs')

bot.commands = new d.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...")
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  })
})

bot.on("ready", ready => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame("j!help | Serving the owner.")
})


bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.channel.send("Only a help command. More later! :grin:")
  }
  if (message.content == prefix + "ping") {
    message.channel.send("PONG! :ping_pong: My ping is " + bot.ping + "ms.")
  }
})

bot.login(process.env.tok)
