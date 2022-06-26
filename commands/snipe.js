const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "snipe",
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send('no message deleted')

        const embed = new MessageEmbed()
        .setTitle(`${msg.author.username} said:`)
        .setColor("#ddbec3")
        .setDescription(`${msg.message}`)
        .setFooter({
            text: `${msg.message.createdAt}`,
            iconURL: msg.author.displayAvatarURL()
        })
        
        if(msg.image) embed.setImage(msg.image)
        message.channel.send({embeds: [embed]})
    }
}
