require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('isomorphic-unfetch');
const client = new Discord.Client();

client.on('ready', () => {
	console.info(`Logged in as ${client.user.tag} 🚀`);
});

client.on('message', async message => {
	if (message.author.bot || !message.content.startsWith('!')) {
		return;
	}

	const body = message.content.slice(1);
	const args = body.split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'random') {
		try {
			const data = await fetch('https://animechan.vercel.app/api/random');
			const respose = await data.json();
			message.reply(`\n\n> ***${respose.quote}***\n\n - ✍️ ${respose.character} (${respose.anime})`);
		} catch (error) {
			console.error(error);
		}
	}
});

client.login(process.env.BOT_TOKEN);
