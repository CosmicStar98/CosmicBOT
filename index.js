var io = require("socket.io-client")
console.log('░█████╗░░█████╗░░██████╗███╗░░░███╗██╗░█████╗░██████╗░░█████╗░████████╗')
console.log('██╔══██╗██╔══██╗██╔════╝████╗░████║██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝')
console.log('██║░░╚═╝██║░░██║╚█████╗░██╔████╔██║██║██║░░╚═╝██████╦╝██║░░██║░░░██║░░░')
console.log('██║░░██╗██║░░██║░╚═══██╗██║╚██╔╝██║██║██║░░██╗██╔══██╗██║░░██║░░░██║░░░')
console.log('╚█████╔╝╚█████╔╝██████╔╝██║░╚═╝░██║██║╚█████╔╝██████╦╝╚█████╔╝░░░██║░░░')
console.log('░╚════╝░░╚════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░╚════╝░╚═════╝░░╚════╝░░░░╚═╝░░░')
console.log('   ║                          ║   ')
console.log('█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█')
console.log('█          Version: ①.⑥.⑦        █')
console.log('█ Build Date: January 25th, 2022 █')
console.log('█       Developed by: Cosmic     █')
console.log('█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█')
console.log('                                                                       ')
var socket = io("http://server.erik.red:3000")
socket.emit('login',{name:'CosmicBOT {c#hub}'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://server.erik.red:3000")
	socket.emit('login',{name:'CosmicBOT {c#hub}'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('c?')){
            text = text.slice(2)
            var cmd = text.split(' ')[0]
            var oth = text.slice(cmd.length+1)
            if(Object.keys(commands).includes(cmd)){
                var command = commands[cmd](oth)
                setTimeout(function(){
                    socket.emit('talk',{text:command})
                },100)
            }
        }
    })
    socket.on('reconnected',reconnected)
}
socket.emit('command', {list:['pitch','77']})
socket.emit('command', {list:['speed','146']})
var lists = [];
var reloadit;
var cmdcount = 0;
var ytcount = 0;
var sockets = []
var talkmode = true;
var commands = {
    echo(txt){
        if(txt.startsWith('c#')){
            return "hahahaha nice spam lmao hahaha fuck you"
        }
        return txt
    },
	asshole(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice asshole... no homo lmao"
        }
		console.log('Assholed ' + txt)
		cmdcount++
		socket.emit('command', {list:['asshole',txt]})
    },
	owo(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice boner... no homo lmao"
        }
		console.log('Owo\'ed ' + txt)
		cmdcount++
		socket.emit('command', {list:['owo',txt]})
    },
	cmds1:function(){
		console.log('Loaded cmds1 menu.')
		cmdcount++
		return "- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c#hub</li> <hr /><b>✰Commands:✰</b><hr /><li>c#joke</li><br /> <li>c#fact</li><br /> <li>c#asshole</li><br /> <li>c#owo</li><br /> <li>c#bees</li><br /> <li>c#linux</li><br /> <li>c#triggered</li><br /> <li>c#pawn</li><br /> <li>c#emotes</li><br /> <li>c#colors</li><br /> <hr /><h6>Commands Page 1.</h6><hr />"
	},
	cmds2(txt){
		console.log('Loaded cmds2 menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c#hub</li> <hr /><b>✰Commands:✰</b><hr /> <li>c#echo</li><br /> <li>c#message</li><br /> <li>c#bonzibuddy</li><br /> <li>c#bonzibuddy2</li><br /> <li>c#cyberpunk</li><br /> <li>c#drivepower</li><br /> <li>c#bigsmoke</li><br /> <li>c#vaporwave</li><br /> <li>c#unvaporwave</li><br /> <li>c#gabe</li><br /> <li>c#fakeerrors</li><br /> <hr /><h6>Commands Page 2.</h6><hr />'
	},
	help1(txt){
		if(txt.startsWith('c#')){
            return "This command has been depreciated since version <b>①.⑤.③</b> please move to <b>c#cmds1</b> or <b>c#cmds2</b>!"
        }
		console.log('Loaded defunct help1 menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c#cmds1</li><br /> <li>c#cmds2</li> <hr /><b>✰Error 404:✰</b><hr />This command has been depreciated since version <b>①.⑤.③</b> please move to <b>c#cmds1</b> or <b>c#cmds2</b>!<br /> <hr /><h6>Help Page 1.</h6><hr />'
	},
	help2(txt){
		if(txt.startsWith('c#')){
            return "This command has been depreciated since version <b>①.⑤.③</b> please move to <b>c#cmds1</b> or <b>c#cmds2</b>!"
        }
		console.log('Loaded defunct help2 menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c#cmds1</li><br /> <li>c#cmds2</li> <hr /><b>✰Error 404:✰</b><hr />This command has been depreciated since version <b>①.⑤.③</b> please move to <b>c#cmds1</b> or <b>c#cmds2</b>!<br /> <hr /><h6>Help Page 1.</h6><hr />'
	},
	hub(txt){
		if(txt.startsWith('c#')){
            return "jajajajaa cool command lmao hahaha shut the fuck up"
        }
		console.log('Loaded hub menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><br /><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Commands:✰</b><hr /> <li>c#cmds1</li><br /> <li>c#cmds2</li><br /> <li>c#aboutme</li><br /> <li>c#links</li><br /> <hr /><h6>Hub.</h6><hr />'
	},
	links(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded links menu.')
		cmdcount++
		return '- - <hr /><h4>⚜My Discord Server:</h4> <br /><h5>https://bit.ly/3C1wDDO</h5><br /><hr /> <h4>📝My Pastebin Profile:</h4> <br /><h5>https://bit.ly/3k1DiYM</h5><br /><hr /> <h4>🌐My Github Profile:</h4> <br /><h5>https://tinyurl.com/ykx6s9hj</h5><br /><hr /> <h4>☣️Cosmos GUI:</h4> <br /><h5>https://pastebin.com/jzRwYG4T</h5><br /><hr /> <h6>Links.</h6><hr />'
	},
	aboutme(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded aboutme menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version ①.⑥.⑦</h4><br><hr>Hello, I am <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>! If you need my assistance please start by using <b>c#hub</b>. <hr><div><h5>⌬ Developed by: Cosmic ⌬</h5></div></p>'
	},
	fakeerrors(txt){
		if(txt.startsWith('c#')){
            return "haha cool command lmao hahaha shut the fuck up"
        }
		console.log('Loaded fakeerrors menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Fake Errors:✰</b><hr /><li>c#nojavascript</li><br /> <li>c#error</li><br /> <li>c#banned</li><br /> <li>c#kicked</li><br /> <li>c#unsupported</li><br /><hr /><h6>Fake Errors.</h6><hr />'
	},
	colors(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded colors menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Colors:✰</b><hr /><li>c#red</li><br /> <li>c#green</li><br /> <li>c#blue</li><br /> <li>c#purple</li><br /> <li>c#pink</li><br /> <li>c#black</li><br /> <li>c#brown</li><br /> <li><del>c#pope</del></li><br /> <hr /><h6>Color Picker.</h6><hr />'
	},
	emotes(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded emotes menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Emotes:✰</b><hr /><li>c#backflip</li><br /> <li>c#swagflip</li><br /> <hr /><h6>Emote Picker.</h6><hr />'
	},
	yt_search(txt){
		if(txt==""){
			return 'Enter the YouTube search text to get this result.'
		} else {
		cmdcount++
		console.log('https://www.youtube.com/search?q=' + txt)
        return ('There is your requested website: https://www.youtube.com/search?q=' + [txt])
		}
    },
	google(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Google search.'
		} else {
		cmdcount++
		console.log('https://www.google.com/search?q=' + txt)
        return ('Google Link: https://www.google.com/search?q=' + [txt])
		}
    },
	ddg(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for DuckDuckGo search.'
		} else {
		cmdcount++
		console.log('https://duckduckgo.com/?q=' + txt)
        return ('DuckDuckGo Link: https://duckduckgo.com/?q=' + [txt])
		}
    },
	bing(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Bing search.'
		} else {
		cmdcount++
		console.log('https://www.bing.com/search?q=' + txt)
        return ('Bing Link: https://www.bing.com/search?q=' + [txt])
		}
    },
	pope(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Attempted to give a non-admin pope.')
		cmdcount++
		return 'HEY, EVERYONE LOOK AT THIS IDIOT WHO IS TRYING TO GET POPE IN A PUBLIC ROOM HAHAHAHHAAA!! LMAO' 
	},
	red(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to red.')
		cmdcount++
        socket.emit('command', {list:['color','red','this.userPublic.name']})
	},
	green(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to green.')
		cmdcount++
        socket.emit('command', {list:['color','green','this.userPublic.name']})
	},
	blue(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to blue.')
		cmdcount++
        socket.emit('command', {list:['color','blue','this.userPublic.name']})
    },
	purple(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to purple.')
		cmdcount++
        socket.emit('command', {list:['color','purple','this.userPublic.name']})
    },
	pink(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to pink.')
		cmdcount++
        socket.emit('command', {list:['color','pink','this.userPublic.name']})
    },
	black(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to black.')
		cmdcount++
        socket.emit('command', {list:['color','black','this.userPublic.name']})
    },
	brown(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to brown.')
		cmdcount++
        socket.emit('command', {list:['color','brown','this.userPublic.name']})
    },
	backflip(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice emote lmao hahaha fuck you"
        }
		console.log('Played backflip animation.')
		cmdcount++
        socket.emit('command', {list:['backflip','this.userPublic.name']})
    },
	swagflip(txt){
		if(txt.startsWith('c#')){
            return "hahahaha nice emote lmao hahaha fuck you"
        }
		console.log('Played swagflip animation')
		cmdcount++
        socket.emit('command', {list:['backflip','swag','this.userPublic.name']})
    },
	cyberpunk(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'WAKE THE FUCK UP SAMURAI, WE GOT A CITY TO BURN!!'
    },
	drivepower(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Its about drive, its about power, we stay hungry, we devour Put in the work, put in the hours and take whats ours Black and Samoan in my veins, my culture bangin with Strange I change the game so whats my motherfuckin name? Rock!!'
    },
	bigsmoke(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Ill have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.'
    },
	gabe(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Good Evening, my name is Gabe Newell from the Microsoft team, and from analyzing your browser history we are here to inform you that your Windows XP Operating system is not valid. Your OS will be locked in 2 hours and it will stay this way until you have paid for the Microsoft product. If you have any questions or concerns please do not hesitate to go fucking kill yourself!'
    },
	behh(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice spam lmao hahaha fuck you"
    }
	cmdcount++
	return 'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh'
    },
	bonzibuddy(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Welcome to my world of BonziBUDDY! I will explore the Internet with you as your very own friend and sidekick!  I can talk, walk, joke, browse, search, e-mail, and download like no other friend you have ever had!  I even have the ability to compare prices on the products you love and help you save money! Best of all, I AM FREE!'
    },
	bonzibuddy2(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Well, hello there! I do not believe we have been properly introduced. I am BonziBUDDY! Nice to meet you! Since this is the first time we have met, I would like to tell you a little about myself. I am your friend and BonziBUDDY! I have the ability to learn from you. The more we browse, search, and travel the internet together, the smarter I will become! Not that I am not already smart!'
    },
	logo(txt){
	if(txt.startsWith('c#')){
        return "- - <h5>⌬ Developed by: Cosmic ⌬</h5>"
    }
	cmdcount++
	return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3>'
    },
	joke(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice joke lmao hahaha fuck you"
    }
		console.log('Telling a joke.')
	   	cmdcount++
        socket.emit('command', {list:['joke']})
    },
	fact(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fact lmao hahaha fuck you"
    }
		console.log('Spitting fax.')
	   	cmdcount++
        socket.emit('command', {list:['fact']})
    },
	bees(txt){
	if(txt.startsWith('c#')){
        return "ya like jazz?"
    }
		cmdcount++
        socket.emit('command', {list:['bees']})
    },
	linux(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice linux distro xD hahaha fuck you windows is better"
    }
		console.log('Flexing on Windows.')
	   	cmdcount++
        socket.emit('command', {list:['linux']})
    },
	triggered(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	   	cmdcount++
        socket.emit('command', {list:['triggered']})
    },
	pawn(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	   	cmdcount++
        socket.emit('command', {list:['pawn']})
    },
	vaporwave(txt){
	if(txt.startsWith('c#')){
        return "ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ"
    }
	   	cmdcount++
		console.log('ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ')
        socket.emit('command', {list:['vaporwave']})
    },
	unvaporwave(txt){
	if(txt.startsWith('c#')){
        return "ᴀ ɴ ᴛ ɪ ~ ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ"
    }
		cmdcount++
		console.log('ᴀ ɴ ᴛ ɪ ~ ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ')
        socket.emit('command', {list:['unvaporwave']})
    },
	bagelchip(txt){
        return "hahaha nice fake id lmao im gonna call the cops hahahaha fuck you"
    },
	botver(txt){
	cmdcount++
	return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version: ①.⑥.⑦</h4><hr><h4>Automated Beta</h4><hr>'
    },
	message(txt){
		cmdcount++
		console.log('You have a new message!!\n"' + txt + '"')
        return ("<h3>A message has been sent into the command terminal. An admin monitoring the terminal will see your message!</h3>\n\n\n Your sent message: " + [txt])
    },
	ban(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	cmdcount++
	return 'HEY, EVERYONE LOOK AT THIS RETARD WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'
    },
	kick(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	cmdcount++
	return 'HEY, EVERYONE LOOK AT THIS RETARD WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'
    },
	nojavascript(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded javascript error message.')
	cmdcount++	
	return '- - <h2>Hey! You have JavaScript disabled!</h2> <br>BonziWORLD cannot run in this browser because you have JavaScript disabled.<br>Please enable it in the page settings, and then BonziWORLD will start working correctly.'
    },
	error(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded generic error message.')
	cmdcount++
	return '- - <br><h2>BonziWORLD has encountered an error and needs to close.</h2><br> Nah, but seriously there was an error and you got disconnected from the server. Chances are, your internet just died out for a brief moment or your device went to sleep. Otherwise the server just screwed up.<br> <br> Try and reload the page. If that does not work and your internet is okay, then panic. We will probably be back up Soon™ though.<br> <br> <b>Reload?</b></a><br> <br>'
    },
	banned(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded ban message.')
	cmdcount++
	return '- - <br><h2>You got banned!</h2><br><br><b>Why? </b><br> Jokes on you! This is just a test! You did not actually get banned lol<br><br><br><b>When is it over?</b><br>idk I guess whenever this message goes away xD'
    },
	kicked(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded kick message.')
	cmdcount++
	return '- - <br><h2>You got kicked!</h2><br> <br><b>Why? </b><br> Jokes on you! This is just a test! You did not actually get kicked lmao'
    },
	unsupported(txt){
	if(txt.startsWith('c#')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded unsupported error message.')
	cmdcount++
	return '- - <br><h2>BonziWORLD cannot run on this platform.</h2><br>Unfortunately, BonziWORLD cannot run in this browser!<br>You can try to download a BonziWORLD app that works on your device, or update your browser.'
    }
	}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('c#')){
        text = text.slice(2)
        var cmd = text.split(' ')[0]
        var oth = text.slice(cmd.length+1)
        if(Object.keys(commands).includes(cmd)){
            var command = commands[cmd](oth)
            setTimeout(function(){
                socket.emit('talk',{text:command})
            },100)
        }
    }
});
setInterval(function(){
if(socket.connected==false) {
	console.log('Disconnected from the server. Restarting')
	setTimeout(function(){reconnected}, 1000)
}
}, 3000);
