module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("RoBOTic Restarting...")
  .setDescription(":wave: Restarting...")
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: embed}).then(m => {
    m.delete(5000)
    bot.destroy().then(() => {
      bot.login(process.env.tok).then(() => {
        embed.setTitle("RoBOTic Restarted!")
        embed.setDescription(":thumbsup: RoBOTic Restarted!")
        embed.setTimestamp()
        embed.setColor("RANDOM")
        message.channel.send({embed: embed})
      })
    })
  })
}

module.exports.help = {
  name: "restart"
}
