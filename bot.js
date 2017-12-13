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
  bot.user.setGame(`j!helping on ${bot.guilds.array().length} servers `)
})


bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.channel.send("Help and ping! :grin:")
  }
})

bot.login(process.env.tok)
