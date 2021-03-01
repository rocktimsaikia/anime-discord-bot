require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('isomorphic-unfetch');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN)
    .then('Bot is alive')
    .catch(err => console.err(err));

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith('!')) return;

    const body = message.content.slice(1);
    const args = body.split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'random'){
        try {
            const data  = await fetch('https://animechan.vercel.app/api/random');
            const res = await data.json();
            message.reply(`\n\n> ***${res.quote}***\n\n - ✍️ ${res.character} (${res.anime})`);   
        } catch (error) {
            console.error(error);
        }
    }
})
