const Discord = require('discord.js');

module.exports = {
	name : 'kim',
	desc : 'Gives out a Chemistry SBMPTN Question',

	execute(message) {
		function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        const value = getRandomIntInclusive(1, 5);
        const kimPath = new Discord.MessageAttachment(`./Material/Soal/kim${value}.PNG`, `kim${value}.PNG`);

        const kimEmbed = new Discord.MessageEmbed()
          .setTitle('Soal Kimia')
          .attachFiles(kimPath)
          .setImage(`attachment://kim${value}.PNG`);
        message.channel.send(kimEmbed);
	},

};