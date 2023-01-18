const Discord = require('discord.js');
const bot = new Discord.Client();
const {token} = require('./config.json');
const LarryPic = ('\pic\\tunnel.png');
const RioPic = ('\pic\\turtle.png');
const VinPic = ('\pic\\satchel.png');
const workLarry = ('\pic\\larryWork.png');
const doesHeKnow = ('\pic\\does.png');
const vinOil = ('\pic\\vinoil.png');
const plobRaid = ('\pic\\plobraid.png');

bot.on('ready', () =>{
    console.log('This bot is online');
})


bot.on('message', msg=>{
    let userMessage = msg.content;
    userMessage = userMessage.toUpperCase();
    if(userMessage === "!LARRY"){
        console.log(msg);
        msg.channel.send("BOO LARRY!!", {files: [LarryPic]});
    }
    else if(userMessage === "!RIPLARRY"){
        msg.channel.send("RIP to Larry's steam account 12/31/2021. Got scammed trying to get rust skins");
    }
    else if(userMessage == "!LARRYOUTSIDE"){
        msg.channel.send("", {files: [workLarry]});
    }
	else if(userMessage == "!DOESHEKNOW"){
        msg.channel.send("", {files: [doesHeKnow]});
    }
	else if(userMessage == "!RIPVIN"){
        msg.channel.send("VINBO RUN YOU HAVE FULL METAL AK AND THERE IS A SCARY HEAVY SCIENTIST!!!!!", {files: [vinOil]});
    }
	else if(userMessage == "!PLOBRAID"){
        msg.channel.send("YO GUYS THERE IS A GOOPED WOODEN BASE!", {files: [plobRaid]});
    }
    else if(userMessage === "!RIO"){
        msg.channel.send("Uh oh Rio - Be careful what you say! Sunshine is lurking!", {files: [RioPic]});
    }
    else if(userMessage == "!VINBO"){
        msg.channel.send("DiD tHe SaTcHeL cHaRgE bLoW uP yEt. It'S bEeN 6 yEaRs -  Vincent", {files: [VinPic]});
    }
	else if(userMessage == "!ROLL"){
		msg.channel.send(1 + Math.floor(Math.random() * 6));
	}
    else if(userMessage === "!BAGALERT"){
        var voiceChannel = msg.member.voice.channel;
        if(!voiceChannel){
            msg.channel.send("You must be in a voice channel to use this function");
        }
        else{
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play(require("path").join(__dirname, './music/BagAlert.mp3'));
                dispatcher.on('start', ()=>{
                    console.log("Major Bag Alert is now playing!");
                })
                dispatcher.on('finish', finish =>{
                    console.log("Major Bag Alert has finished playing");
                    voiceChannel.leave();
                })
            }).catch(err => console.log(err));
        }
    }
})

bot.login(token);