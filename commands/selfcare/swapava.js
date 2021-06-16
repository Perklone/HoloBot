module.exports = {
	name: 'swapava',
	desc: 'Changes the avatar of HoloBot',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const destination = './images/a.jpeg';
		message.client.user.setAvatar(`${destination}`);
	},
};