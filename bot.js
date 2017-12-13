const d = require('discord.js');
const bot = new d.Client();
const prefix = process.env.prefix

bot.commands = new d.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...")
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  })
})

bot.on("ready", () => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame(`RoBOTic Version 0.0.1 Loaded!`)
  setInterval(() => {
    bot.user.setGame(`j!help | ${bot.guilds.array().length} server(s)`)
  }, 2500)
 })

bot.on("message", message => {
  if (message.content == prefix + "help") {
    const embed = {
  "title": "RoBOTic Help",
  "description": "You asked for help, here it is! :stuck_out_tongue:",
  "url": "https://discord.gg/wxrWNWZ",
  "color": 508910,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/349661784057184256/390558851348561945/bot.png",
    "text": "RoBOTic Help Menu"
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
message.channel.send({embed}).then(m => m.delete(5000))
  }
})

bot.login(process.env.tok)
