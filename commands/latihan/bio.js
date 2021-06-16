const Discord = require('discord.js');

module.exports = {
	name : 'bio',
	desc : 'Gives out a Biology SBMPTN Question',

	execute(message) {
		function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        const value = getRandomIntInclusive(1, 5);
        const bioPath = new Discord.MessageAttachment(`./Material/Soal/bio${value}.PNG`, `bio${value}.PNG`);

        const bioEmbed = new Discord.MessageEmbed()
          .setTitle('Soal Biologi')
          .attachFiles(bioPath)
          .setImage(`attachment://bio${value}.PNG`);
        message.channel.send(bioEmbed);
	},

};