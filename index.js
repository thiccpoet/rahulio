//Rahulio 1.0.0 Discord Bot

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



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; 

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();
	



	if(command === 'test') message.channel.send('Rahulio ' + version + ' is online and functioning!');
	


	if (command.startsWith('img')) 
		switch (args[0]){
			case 'img':
			img(command.substring(4));
			
			break;
		}	

		function img(message){
 
			var options = {
				url: "http://results.dogpile.com/serp?qc=images&q=" + message,
				method: "GET",
				headers: {
					"Accept": "text/html",
					"User-Agent": "Chrome"
				}
			}
			request(options, function(error, response, responseBody) {
				if (error) {
					return;
				}
			
			
				$ = cheerio.load(responseBody);
			
			
				var links = $(".image a.link");
			
				var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
			   
				console.log(urls);
			
				if (!urls.length) {
				   
					return;
				}

				message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
			});	
	
		};
		
	
	if (command === 'help') {
		message.channel.send('Private message sent!');
		const embed = new Discord.MessageEmbed()
			.setColor('#c334eb')
			.setTitle('Rahulio ' + version + ' Help Menu')
			.setURL('https://discord.js.org/')
			.setAuthor('Rahul Chari', 'https://imgur.com/12fKOZZ.jpg', 'https://discord.js.org')
			.setDescription('Thank you for calling the r$help command!')
			.setThumbnail('https://imgur.com/12fKOZZ.jpg')
			.addFields(
				{ name: 'Popular Commands', value: 'None.'},
				{ name: '\u200B', value: '\u200B' },
			//	{ name: 'Inline field title', value: 'Some value here', inline: true },
			//	{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			//.addField('Inline field title', 'Some value here', true)
			.setImage('https://imgur.com/12fKOZZ.jpg')
			.setTimestamp()
			.setFooter('Rahulio ' + version, 'https://imgur.com/12fKOZZ.jpg');
		message.author.send(embed);

}	


	if (command === `server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}\nIcon: ${message.guild.iconURL()}`);
	
	}

})