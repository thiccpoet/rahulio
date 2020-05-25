//Rahulio 1.0.5 Discord Bot

const Discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');
const client = new Discord.Client();
const { prefix, author, version } = require('./config.json');
const token = process.env.token;
const af = require('./af.json');


client.once('ready', () => {
	console.log('Rahulio ' + version + ' is online!');
	client.user.setActivity('r$');	
})

client.login(token);



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; 

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();
	
	console.log(args);


	if(command === 'test') message.channel.send('Rahulio ' + version + ' is online and functioning!');

	else if (command.startsWith(`ouija`)){
		if(args.length > 1) {
			const yn = [`yes`,`no`,`maybe`,`unknown`,`unlikely`,`very likely`,`doubtful`];
			const what = [`vanilla`,`what?`,`anal`,`unknown`,`everything is meaningless`,`nothing`];
			const why = [`no idea`,`carnal urges`,`deformities at birth`,`the ways of life`,`she doesn't love you`,`fortune`,`lack of initative`];
			const when = [`never`,`soon`,`when pigs fly`,`unknown`,`it's already happened`,`right now`,`in an eternity`];
			const where = [`in hell`,`up your ass and to the left`,`nowhere`,`somewhere`,`unknown`,`New York`];
			const who = [`you`,`your mother`,`your neighbor`,`unknown`,`a hooker`,`a nobody`,`a rich old man with a deceptively small phallus`];
			const how = [`no idea`,`somehow`,`raw`,`it's impossible`,`with love`,`gotta believe`];
			if (args[0].toLowerCase() === `is` || args[0].toLowerCase() === `are` || args[0].toLowerCase() === `am` || args[0].toLowerCase() === `will` || args[0].toLowerCase() === `can` || args[0].toLowerCase() === `should`|| args[0].toLowerCase() === `would`){
				if(message.content.substring(message.content.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + yn[Math.floor(Math.random() * yn.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + yn[Math.floor(Math.random() * yn.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `what`){
				if(message.content.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + what[Math.floor(Math.random() * what.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + what[Math.floor(Math.random() * what.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `why`){
				if(message.content.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + why[Math.floor(Math.random() * why.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + why[Math.floor(Math.random() * why.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `when`){
				if(message.content.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));
					message.channel.send(`Answer: ` + when[Math.floor(Math.random() * when.length)] + `!`);	
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + when[Math.floor(Math.random() * when.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `where`){
				if(message.content.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + where[Math.floor(Math.random() * where.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + where[Math.floor(Math.random() * where.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `who`){
				if(message.content.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + who[Math.floor(Math.random() * who.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + who[Math.floor(Math.random() * who.length)] + `!`);
				}
			}
			else if (args[0].toLowerCase() === `how`){
				if(message.content	.substring(message.length-1) === `?`){
					message.channel.send(`Question: ` + message.content.substring(8));	
					message.channel.send(`Answer: ` + how[Math.floor(Math.random() * how.length)] + `!`);
				}
				else{
					message.channel.send(`Question: ` + message.content.substring(8) + `?`);	
					message.channel.send(`Answer: ` + how[Math.floor(Math.random() * how.length)] + `!`);
				}
			}
			else {message.channel.send(`Please begin your question with [is/are/am/will/should/would/can/what/why/when/where/who/how]!`)};
		}
		else {message.channel.send(`Please ask a valid question!`)}
	}
	

	else if (command === 'coin'){
		var coin = Math.floor(Math.random()*101);
		if (coin == 100) message.channel.send(`Coin landed on its side!`);
		else if (coin <= 49) message.channel.send(`Heads!`);
		else message.channel.send(`Tails!`);
	}


	else if (command == `clap`){
		var strr;
		if(args.length > 1){
		for (var k = 0; k < args.length; k++){
			strr += args[k]+`:clap:`;
		}
		message.channel.send(strr);
	}
		else {message.channel.send(`Please format using [r$clap word1 word2...]`);}
	}

	else if (command === `love`)
	{
		if (args.length == 2)
		{
			message.channel.send(`Love Calculator for ` + args[0] + ` and ` + args[1] + `!`);
			var pct = Math.floor(Math.random()*101);
			if (pct <= 10)
			{
				message.channel.send(`No match!`);
			}
			else if (pct <= 30)
			{
				message.channel.send(`The couple is a ` + pct + `% match!`);
				message.channel.send(`Bad!`);
			}
			else if (pct <= 50)
			{
				message.channel.send(`The couple is a ` + pct + `% match!`);
				message.channel.send(`Questionable!`);
			}
			else if (pct <= 70)
			{
				message.channel.send(`The couple is a ` + pct + `% match!`);
				message.channel.send(`Fair!`);
			}
			else if (pct <= 90)
			{
				message.channel.send(`The couple is a ` + pct + `% match!`);
				message.channel.send(`Excellent!`);
			}
			else 
			{
				message.channel.send(`The couple is a ` + pct + `% match!`);
				message.channel.send(`A perfect match!`);
			}
		}
		else
		{
			message.channel.send(`Please use the format 'r$love name1 name2'.`);
		}
	}

	/*else if (command.startsWith('img')) 
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
	*/	
	
	else if (command === 'help') {
		message.channel.send('Private message sent!');
		const embed = new Discord.MessageEmbed()
			.setColor('#c334eb')
			.setTitle('Rahulio ' + version + ' Help Menu')
			.setURL('https://github.com/thiccpoet/rahulio/')
			.setAuthor(author, 'https://imgur.com/12fKOZZ.jpg', 'https://discord.js.org')
			.setDescription('Thank you for calling the r$help command!')
			.setThumbnail('https://imgur.com/12fKOZZ.jpg')
			.addFields(
				{ name: 'Popular Commands', value: 'r$carti, r$ouija, r$love, r$clap, r$af, r$server, r$test, r$coin\n'},
			//	{ name: '\u200B', value: '\u200B' },
			//	{ name: 'Inline field title', value: 'Some value here', inline: true },
			//	{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			//.addField('Inline field title', 'Some value here', true)
			//.setImage('https://imgur.com/12fKOZZ.jpg')
			.addField('***', 'For additional questions, feel free not to contact me.')
			.setTimestamp()
			.setFooter('Rahulio ' + version, 'https://imgur.com/12fKOZZ.jpg');
		message.author.send(embed);
		
}	


	else if (command === `server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}\nIcon: ${message.guild.iconURL()}`);
	
	}
	
	else if (command.startsWith(`carti`)){

		if(args.length <= 0){message.channel.send(`Please input at least one term to ensure accurate Cartinese translation!`);}
		else{
			const lineOne = [`+*`,`ok !`,`+!:)`,`:black_heart:`,`*  *`,`!!`,`:butterfly:`,`:butterfly:`];
			const lineTwo = [`:)`,`xo !`,`:(`,`slatt_!`,`*`,`#love *`,`ok !`, "_", "_", "_"];
			const lineThree = [`++**`,`+:)`,`:broken_heart:`,`:mushroom::mushroom:`,`& *`,`:two_hearts:`,`lit` + `**!++`];
			var temp1;
			var temp2;
			var temp3;

			//line 1
			var bfly = Math.floor(Math.random()*11);
			if (bfly <= 1){
				message.channel.send(lineOne[6] + lineOne[6] + lineOne[6] + `\n`);
			}
			else {
				temp1 = lineOne[Math.floor(Math.random() * (lineOne.length-1))];
				temp2 = lineOne[Math.floor(Math.random() * (lineOne.length-1))];
				temp3 = lineOne[Math.floor(Math.random() * (lineOne.length-1))];
				message.channel.send(temp1 + ` ` + temp2 + ` ` + temp3 + ` `);
			}

			//line 2
			temp1 = lineTwo[Math.floor(Math.random() * lineTwo.length)];
			temp2 = lineTwo[Math.floor(Math.random() * lineTwo.length)];
			temp3 = lineTwo[Math.floor(Math.random() * lineTwo.length)];
			var split1; var split2;
			if (message.content.substring(8).length > 1){
				split1 = message.content.substring(8).substring(0, Math.round(message.content.substring(8).length/2));
				split2 = message.content.substring(8).substring(Math.round(message.content.substring(8).length/2));
				message.channel.send(temp1 + ` ` + split1 + ` ` + temp2 + ` ` + split2 + ` ` + temp3)
			}
			else {
				message.channel.send(temp1 + ` ` + temp2 + ` ` + message.content.substring(8) + ` ` + temp3 + ` ` + temp2);		
			}

			//line 3
			temp1 = lineThree[Math.floor(Math.random() * lineThree.length)];
			temp2 = lineThree[Math.floor(Math.random() * lineThree.length)];
			temp3 = lineThree[Math.floor(Math.random() * lineThree.length)];
			message.channel.send(temp1 + ` ` + temp2 + ` ` + temp3 + ` `);
		}

	}

	else if (command === `af`)
	{
		var val = Math.floor(Math.random() * af.length);
		message.channel.send(`Anne Frank Fact #` + val);
		message.channel.send(af[val]);
	}

})

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const emb = new Discord.MessageEmbed()
		.setTitle(`Welcome to `+ guild.name + `, ${member}!\nPlease familiarize yourself with the server's rules!`);
	channel.send(emb);
});