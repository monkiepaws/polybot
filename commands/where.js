const Discord = require('discord.js');
const description = '';

module.exports = {
    name: "where",
    usage: "no arguments",
    aliases: [],
    description: description,
    cooldown: 2,
    execute(message, args) {
        const guilds = Discord.client.guilds.map(guild => guild['name']);
        const embed = Discord.RichEmbed()
            .setColor('#00ff7b')
            .setTitle('I\'m at home in:')
            .setDescription(`${guilds.join('\n')}`);
        return message.channel.send(embed)
            .catch(console.error);
    }
};