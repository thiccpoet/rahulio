# Rahulio
1.0.5
```
//Rahulio 1.0.5 Discord Bot
//Main method code can be found in index.js
//Here you can find the initialization and instantiation of the bot

const Discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');
const client = new Discord.Client();
const { prefix, author, version } = require('./config.json');
const token = process.env.token;

client.once('ready', () => {
	console.log('Rahulio ' + version + ' is online!');
	client.user.setActivity('r$');	
})

client.login(token);
```
