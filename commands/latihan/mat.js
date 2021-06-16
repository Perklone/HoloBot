const Discord = require('discord.js');

module.exports = {
	name : 'mat',
	desc : 'Gives out a Math SBMPTN Question',

	execute(message) {
		function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        const value = getRandomIntInclusive(1, 5);
        const matPath = new Discord.MessageAttachment(`./Material/Soal/mtk${value}.PNG`, `mtk${value}.PNG`);

        const matEmbed = new Discord.MessageEmbed()
          .setTitle('Soal Matematika')
          .attachFiles(matPath)
          .setImage(`attachment://mtk${value}.PNG`);
        message.channel.send(matEmbed);
	},

};