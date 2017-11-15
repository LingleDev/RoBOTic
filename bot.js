const d = require('discord.js');
const bot = new d.Client();
const pre = process.env.prefix

bot.on("ready", ready => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame("j!help | Serving the owner.")
})

bot.login(process.env.tok)
