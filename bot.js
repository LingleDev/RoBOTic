const discord = require('discord.js');
const bot = new discord.Client();
const prefix = process.env.prefix

bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  console.log("RoBOTic Version 1.0.0 Loaded!")
  bot.user.setActivity(`Loading RoBOTic Version 1.0.0 Loaded!`, {type: "STREAMING", url: "https://youtube.com/c/FreakingHulkGaming"})
  setTimeout(err => {
    if (err) return console.error(err)
    bot.user.setActivity(`for j!help | ${bot.guilds.size} server(s)`, {type: "WATCHING"})
  }, 10000)
 })

bot.on("message", message => {
  if (message.channel.type == "dm") return;
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray.slice(prefix.length))
  
  if (cmd) {
    cmd.run(bot, message, args, discord)
    console.log(`${message.member.username} used the ${message.content.split(" ")[0]} command.`)
  }
});

  
  
bot.login(process.env.tok)
