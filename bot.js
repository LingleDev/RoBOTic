const d = require('discord.js');
const bot = new d.Client();
const prefix = process.env.prefix

bot.on("ready", ready => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame(`j!helping on ${bot.guilds.array().length} servers `)
})


bot.on("message", message => {
  if (message.content == prefix + "help") {
    const embed = {
  "title": "RoBOTic Help",
  "description": "You asked for help, here it is! :stuck_out_tongue:",
  "url": "https://discord.gg/wxrWNWZ",
  "color": 508910,
  "timestamp": "2017-12-13T17:51:29.259Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/349661784057184256/390558851348561945/bot.png",
    "text": "footer text"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/349661784057184256/390558851348561945/bot.png"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/349661784057184256/390558851348561945/bot.png"
  },
  "author": {
    "name": "RoBOTic",
    "url": "",
    "icon_url": "https://cdn.discordapp.com/attachments/349661784057184256/390558851348561945/bot.png"
  },
  "fields": [
    {
      "name": "Utility",
      "value": "A ban command is coming soon."
    },
    {
      "name": "Bot Status",
      "value": "Ping"
    },
    {
      "name": "Misc",
      "value": "Help"
    },
    {
      "name": "Bot Developer",
      "value": "FreakingHulk Gaming#6545",
      "inline": true
    },
    {
      "name": "Bot Owner",
      "value": "🎁JamesRobotic🎁13#1840",
      "inline": true
    }
  ]
};
message.channel.send({embed})
  }
  if (message.content == prefix + "ping") {
    message.channel.send(`:ping_pong: PONG! My ping is ${bot.ping} ms!`)
  }
})

bot.login(process.env.tok)
