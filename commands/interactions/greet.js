module.exports = {
	name: 'greet',
	description: 'Holo will greet the user who executes this command.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Heya~');
	},
};

