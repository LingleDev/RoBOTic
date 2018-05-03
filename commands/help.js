module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("RoBOTic Help")
  .setDescription("My commands are `j!help`, and `j!ping`.")
  .addField("More commands?", "Maybe more commands later... I don't know.")
  .setTimestamp()
  .setFooter("Help Command")
  .setColor("RANDOM")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
