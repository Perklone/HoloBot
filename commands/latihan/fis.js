const Discord = require('discord.js');

module.exports = {
	name : 'fis',
	desc : 'Gives out a Physics SBMPTN Question',

	execute(message) {
		function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        const value = getRandomIntInclusive(1, 5);
        const fisPath = new Discord.MessageAttachment(`./Material/Soal/fis${value}.PNG`, `fis${value}.PNG`);

        const fisEmbed = new Discord.MessageEmbed()
          .setTitle('Soal Fisika')
          .attachFiles(fisPath)
          .setImage(`attachment://fis${value}.PNG`);
        message.channel.send(fisEmbed);
	},

};