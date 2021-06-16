const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');


for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
client.once('ready', ()=>{
	console.log('Holo is ready~');
});


client.on('message', message =>{

	if(!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (!client.commands.has(commandName)) return;
	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('Holo cannot process that command.');
	}

	if(command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}`);
	}
});
client.login(token);