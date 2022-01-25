const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'hey gamer';



client.once('ready', () => {
    console.log('Gamer Assistant is online!');
    
});


const yesno_list = ["Yes",        "No",               "Maybe...",
                    "Sure!",      "Obviously not",    "Perhaps...",
                    "Hell yeah",  "Hell no",
                    "Absolutely", "Absolutely not",
                    "Of course",  "Nope",
                    "Why not", "That's not a good idea"]

const why_list = ["I don't know", "Ask your mom", "Because, thats how life is", "How would I know?", "I seriously have no clue", "Because you are stoopid"]

const is_list = ["is", "was", "am", "are", "were", "did", "does", "has", "have", "had"]

const vowel = ["a", "e", "i", "o", "u"]

const vowel2 = ["aa", "ee", "oo", "ou", "ea", "oa", "oe", "eo", "eu", "ei", "ai", "oi", "ui"]

const cons_b = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "w", "ch", "tr", "dr", "kr", "pr", "kl", "gr", "fl", "fr", "br", "sh", "wr"]

const cons = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w"]

const cons_e = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w"]

const sort = ["bvcve", "bvcve", "bvcv", "bvcve", "b2e", "b2cve", "bve", "bv", "b2", "b2cve", "bvcv", "bve", "b2cvcve", "bvcvcvcve", "b2c2e", "bvc2", "bvy", "b2y", "b2cy", "bvcvy", "bvc2cy", "bvcvcvcy", "bvcvcve", "bvcve", "b2cve", "b2c2e", "b2e", "bvcvcv", "vcve", "vcv", "vcvcve", "2cve", "bvcvcve", "bvcvy", "b2cvcy", "b2c2cv", "bvcy", "vcv", "vcy", "vcy", "vcvy", "vcvcy", "bvcvcy", "vcvcy", "vcve"]

const weeb_list = [":UmaruCri:", ":Crying:", ":veiMadge:", ":AngerShake:", ":RageExtreme:", ":veiHACKERMANS:", ":UmaruCrybaby:", ":suffering:", ":SleepTime:", ":pocky_ef_sigh:", ":PadoruPadoru:", ":Yeptune:", ":CB_zzz:", ":EveryonePolite:", ":shrug:", ":XDlol:", ":KannaPingNom:", ":CB_ping_rage:", ""]

const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Commands')
    .setAuthor('Gamer Assistant', /*'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org'*/)
    //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Help', value: "``Hey Gamer, help`` = List of all the commands.\nor\n``Hey Gamer, help 'command'`` = View command." },
        { name: 'Ping', value: "``Hey Gamer, ... ping ...`` = Pong." }, 
        { name: 'Spam', value: "``Hey Gamer, spam 'Word/Sentence' 'amount(*optional)'`` = Spams that word or sentence." },
        { name: 'Say', value: "``Hey Gamer, say 'Word/Sentence'`` = Says that word or sentence." },
        { name: 'Broadcast', value: "``Hey Gamer, broadcast 'Word/Sentence'`` = Says that word or sentence and deletes your message." },
        { name: 'Name', value: "``Hey Gamer, ... name ...`` = Says that word or sentence and deletes your message." },
        { name: 'Age', value: "``Hey Gamer, ... old / age ...`` = Generates random age." },
        { name: 'Dice', value: "``Hey Gamer, dice/roll`` = Rolls dice (number between 1 and 6).\nor\n``Hey Gamer, dice/roll 'number'`` = Rolls dice (number between 1 and your number).\nor\n``Hey Gamer, dice/roll 'minimum' 'maximum'`` = Rolls dice (number between min. and max.)." },
        { name: 'New word', value: "``Hey Gamer, ... new word ...`` = Generates random not existing word." },
        { name: 'Anything else', value: "Random Yes or No based awnser." },
    )
    .setTimestamp()
    .setFooter('Gamer Assistant');

client.on('message', message => {

    var str = message.content;
    var str2 = message.content.toLowerCase();
    var res = str.toLowerCase().replace(/[^A-Za-z0-9\s<>@:]/g, '');

    if (message.author.bot) return

    if (res.split(/ +/)[0] == "mels") {
        message.channel.send("<@!457062141078536194>").then(msg => msg.delete({ timeout: 3}));
    }
    
    if (str2.includes("iemand valorant") || str2.includes("iemand valo")) {
        message.channel.send("<@&707857043964428318>").then(msg => msg.delete({ timeout: 3}));
    }

    var words = res.split(/ +/);
    var weeb_found = false
    for (i=0; i < words.length; i++) {
        if (words[i] in weeb_list) {
            weeb_found = true
        }
    }
    if (weeb_found){
        message.channel.send(`Wow, ${message.author} is a weeb :O!`);
    }

    //if (res = "hey gamers") {
    //    message.channel.send("Hi I'm a gamer");
    //}
    if (!res.startsWith(prefix)) return;

    //message.channel.send('mc: ' + message.content);
    //message.channel.send('res: ' + res);


    var args = res.slice(prefix.length).split(/ +/);
    const args2 = str.split(/ +/);
    args.shift();
    //message.channel.send('args: ' + args);
    //message.channel.send('args[0]: ' + args[0]);

    const no_args = res.split(/ +/);
    //message.channel.send('test ofzo idk: ' + no_args);
    if (no_args.length < 3) {
        message.channel.send(`Hello ${message.author}, how can I help you?`);
        setTimeout(() => { message.channel.send(`Type "Hey gamer (question)"`); }, 1000);
        setTimeout(() => { message.channel.send(`Type "Hey gamer help" for a list of commands`); }, 1500);
        return;
    }
    if (args == "help") {
        message.channel.send(helpEmbed);
        //message.channel.send("Commands:\n**Help** = List of all the commands.\n**Help 'command'** = View command.\n**... ping ...** = Pong.\n**Spam 'Word/Sentence'** = Spams that word or sentence.\n**Say 'Word/Sentence'** = Says that word or sentence.\n**Broadcast 'Word/Sentence'** = Says that word or sentence and deletes your message.\n**... name ...** = Generates a random name.\n**... old/age ...** = Generates random age.\n**Dice/Roll 'number'** = Rolls dice for a number between 1 and that number.\nor **Dice/Roll 'min number' 'max number'** = Rolls dice for a number between the min. and max.\n**Anything else** = Yes or No awnser.");
    }
    else if (args[0] == "help" && args[1] == "nl") {
        message.channel.send("Commands:\n**Help** = Lijst met alle commando's.\n**Help 'commando'** = Geeft commando weer.\n**... ping ...** = Pong.\n**Spam 'Woord/Zin'** = Spamt dat woord of die zin.\n**Zeg 'Woord/Zin'** = Zegt dat woord of die zin.\n**Broadcast 'Woord/Zin'** = Zegt dat woord of die zin en verwijderd jouw bericht.\n**... naam ...** = Genereert een willekeurige naam.\n**... oud ...** = Genereert een willekeurige leeftijd.\n**Dobbelsteen/Roll 'nummer'** = Rolt dobbelsteen voor een nummer tussen 1 en dat nummer.\nor **Dobbelsteen/Roll 'min nummer' 'max nummer'** = Rolt dobbelsteen voor een nummer tussen min. en max.\n**Al het andere** = Engelse Ja of Nee antwoord.");

    }
    else if (args[0] == "help" && args[1] == "spam") {
        message.channel.send("**Hey Gamer, spam 'Sentence' 'amount(*optional)'**");
    }
    else if (args[0] == "help" && args[1] == "say") {
        message.channel.send("**Hey Gamer, say 'Sentence'**");
    }
    else if (args[0] == "help" && args[1] == "zeg") {
        message.channel.send("**Hey Gamer, Zeg 'Zin'**");
    }
    else if (args[0] == "help" && args[1] == "broadcast") {
        message.channel.send("**Hey Gamer, broadcast 'Sentence'**");
    }
    else if (args[0] == "help" && args[1] == "zeg") {
        message.channel.send("**Hey Gamer, Zeg 'Zin'**");
    }
    else if (args[0] == "help" && args[1] == "dice") {
        message.channel.send("**Hey Gamer, dice (1 - 6)\n**or **Hey Gamer, dice 'number' (1 - number)\n**or **Hey Gamer, dice 'minimum' 'maximum' (min. - max.)**");
    }
    else if (args[0] == "help" && args[1] == "roll") {
        message.channel.send("**Hey Gamer, roll (1 - 6)\n**or **Hey Gamer, roll 'number' (1 - number)\n**or **Hey Gamer, roll 'minimum' 'maximum' (min. - max.)**");
    }
    else if (args[0] == "help" && args[1] == "dobbelsteen") {
        message.channel.send("**Hey Gamer, dobbelsteen (1 - 6)\n**of **Hey Gamer, dobbelsteen 'nummer' (1 - nummer)\n**of **Hey Gamer, dobbelsteen 'minimum' 'maximum' (min. - max.)**");
    }

    else if (args[0] == "broadcast") {
        var fruits = args2;
        fruits.shift();
        fruits.shift();
        fruits.shift();

        message.delete({ timeout: 1 });

        if (fruits.length < 1) {
            message.channel.send('Type a string after "say"');
        } else {

            message.channel.send(fruits.join(" "));
        }
    }

    else if (args[0] == "console") {
        var fruits = args2;
        fruits.shift();
        fruits.shift();
        fruits.shift();
        message.delete({ timeout: 1 });
        console.log(fruits.join(" "));
    }

    else if (args[0] == "spam") {
        var fruits = args2;
        fruits.shift();
        fruits.shift();
        fruits.shift();
        if (fruits.length < 1) {
            fruits = ["Spam"];
        }
        if (!fruits[fruits.length - 1].includes("<@")) {
            var number = true
        } else {
            var number = false
        }
        var last = fruits[fruits.length - 1].replace(/[^0-9>]/g, '');
        
        if (number) {
            if (last.charAt(0) == ">") {
                last = last.substring(1);
                var high_last = true;
            } else if (last.includes(">")) {
                message.channel.send("Number is invalid");
                return;
            } else {
                last = Number(last);
                var high_last = false;
            }
        } else {
            var high_last = false;
        }
        
        fruits_join = fruits.join();
        if (high_last && last < 31 && last > 10) {
            var spam_len = last;
            if (fruits_join.includes("<@")) {
                message.channel.send("You cant spam a mention more than 10 times");
                return;
            }
            fruits.pop();
        } else if (high_last && last > 30) {
            message.channel.send("Max max spam is 30");
            return;
        } else if (last > 10 && !high_last) {
            message.channel.send("Max spam is 10");
            return;
        } else if (fruits_join.includes("<@") && last > 5 && !high_last) {
            message.channel.send("Max spam with a mention is 5");
        } else if (last > 0) {
            var spam_len = last;
            fruits.pop();
        } else {
            var spam_len = 5;
        }

        if (fruits.length < 1) {
            message.channel.send('Type a string after "spam"');
        }

        else {
            for (var i = 0; i < spam_len; i++) {
                message.channel.send(fruits.join(" ")).then(msg => msg.delete({ timeout: 10000}));
            }
        }


    }

    else if (args[0] == "say" || args[0] == "zeg") {
        var fruits = args2;
        fruits.shift();
        fruits.shift();
        fruits.shift();
        if (fruits.length < 1) {
            message.channel.send('Type a string after "say"');
        } else {

            message.channel.send(fruits.join(" "));
        }


    }
    else if (args.includes("name") || args.includes("naam")) {
        var fs = require("fs");
        var text = fs.readFileSync("./adjectives.txt", "utf-8");
        var textByLine = text.split("\n");
        var rand_adj = textByLine[Math.floor(Math.random() * textByLine.length)];

        

        var fs = require("fs");
        var text2 = fs.readFileSync("./nouns.txt", "utf-8");
        var textByLine2 = text2.split("\n");
        var rand_noun = textByLine2[Math.floor(Math.random() * textByLine2.length)];

        rand_adj = rand_adj.charAt(0).toUpperCase() + rand_adj.slice(1);
        rand_noun = rand_noun.charAt(0).toUpperCase() + rand_noun.slice(1);

        var rand_name = rand_adj + " " + rand_noun;
        message.channel.send(rand_name);
    }
    else if (args.includes("maori") || args.includes("maorische")) {
        var fs = require("fs");
        var text = fs.readFileSync("./maori.txt", "utf-8");
        var textByLine = text.split("\n");
        var rand_zin = textByLine[Math.floor(Math.random() * textByLine.length)];

        message.channel.send(rand_zin.charAt(0).toUpperCase() + rand_zin.slice(1));
    }
    else if (args.includes("age") || args.includes("old") || args.includes("oud")) {
        var random1 = Math.random() * 6;
        if (random1 == 1) {
            var random2 = Math.random() * 1000;
        } else if (random1 < 3) {
            var random2 = Math.random() * 80;
        } else {
            var random2 = Math.random() * 20;
        }
        message.channel.send("Age is " + Math.round(random2));
    }
    else if (args[0] == "dice" || args[0] == "dobbelsteen" || args[0] == "roll") {
        args[0] = "1"
        //message.channel.send("args " + args);
        args_str = args.join(",");
        //message.channel.send("args join " + args_str);
        args_str = args_str.replace(/[^0-9,]/g, '')
        //message.channel.send("args join replaced " + args_str);
        args = args_str.split(",");
        //message.channel.send("args split " + args)
        message.channel.send("Rolling...")
        //message.channel.send("args.length " + args.length)
        //message.channel.send("args[0] " + args[0])
        //message.channel.send("args[1] " + args[1])
        //message.channel.send("args[2] " + args[2])
        setTimeout(() => {
            if (args.length == 2) {
                var max = Number(args[1]);
                var rand_dice = (Math.random() * (max - 1));
                message.channel.send("You rolled: " + Math.round(rand_dice+1));
            } else if (args.length == 3) {
                var min = Number(args[1]);
                var max = Number(args[2]);
                var rand_dice = (Math.random() * (max - min));
                rand_dice = rand_dice + min;
                message.channel.send("You rolled: " + Math.round(rand_dice));
            } else {
                var rand_dice = Math.random() * 5;
                message.channel.send("You rolled: " + Math.round(rand_dice+1));
            }
            
        }, 1000);
    }
    else if (str2.includes("new word") || str2.includes("nieuw woord") || str2.includes("nieuwe woord")) {

        var wordsort = sort[Math.floor(Math.random() * sort.length)];
        var newword = []

        for (var i = 0; i < wordsort.length; i++) {

            if (wordsort.charAt(i) == "c") {
                var temp_letter = cons[Math.floor(Math.random() * cons.length)]
            }

            else if (wordsort.charAt(i) == "y") {
                if (str2.includes("new word")) {
                    var temp_letter = "y"
                }
                else {
                    return
                }
            }

            else if (wordsort.charAt(i) == "b") {
                var temp_letter = cons_b[Math.floor(Math.random() * cons_b.length)]
            }

            else if (wordsort.charAt(i) == "e") {
                var temp_letter = cons_e[Math.floor(Math.random() * cons_e.length)]
            }

            else if (wordsort.charAt(i) == "2") {
                var temp_letter = vowel2[Math.floor(Math.random() * vowel2.length)]
            }

            else {
                var temp_letter = vowel[Math.floor(Math.random() * vowel.length)]
            }
            if (i == 0) {
                temp_letter = temp_letter[0].toUpperCase();
            }
            newword = newword + [temp_letter];
        }
        message.channel.send(newword.toString());
    }

    else if (str2.includes("new sentence") || str2.includes("nieuwe zin")) {

        var senleng = Math.floor((Math.random() * 10) + 2)
        
        var newsen = []

        for (var s = 0; s < senleng; s++) {

            var wordsort = sort[Math.floor(Math.random() * sort.length)];
            var newword = []

            for (var i = 0; i < wordsort.length; i++) {

                if (wordsort.charAt(i) == "c") {
                    var temp_letter = cons[Math.floor(Math.random() * cons.length)]
                }
    
                else if (wordsort.charAt(i) == "y") {
                    if (str2.includes("new sentence")) {
                        var temp_letter = "y"
                    }
                    else {
                        return
                    }
                }
    
                else if (wordsort.charAt(i) == "b") {
                    var temp_letter = cons_b[Math.floor(Math.random() * cons_b.length)]
                }
    
                else if (wordsort.charAt(i) == "e") {
                    var temp_letter = cons_e[Math.floor(Math.random() * cons_e.length)]
                }
    
                else if (wordsort.charAt(i) == "2") {
                    var temp_letter = vowel2[Math.floor(Math.random() * vowel2.length)]
                }
    
                else {
                    var temp_letter = vowel[Math.floor(Math.random() * vowel.length)]
                }
                if (i == 0 && s == 0) {
                    temp_letter = temp_letter[0].toUpperCase();
                }
                newword = newword + [temp_letter];
                //console.log(temp_letter)
                //console.log(newword)
            }
            //console.log(newsen)
            if (s < senleng - 1) {
                newsen = newsen + [newword.toString() + " "];
            }
            else {
                newsen = newsen + [newword.toString()];
            }
        }
        message.channel.send(newsen.toString() + ".");
    }


    else if (args[0] == ("snake") || args[1] == ("snake")) {

        message.channel.send('g!(&(^*!&@#$^*!$#$&*snake').then(msg => msg.delete({ timeout: 1}));
    }

    else if (args.includes("why")) {
        var rand_word = why_list[Math.floor(Math.random() * why_list.length)];
        message.channel.send(rand_word);
    }

    else if (args[0] == "ping") {
        message.channel.send("Pong!");
    }
    else {
        var rand_word = yesno_list[Math.floor(Math.random() * yesno_list.length)];
        message.channel.send(rand_word);
    }

});


client.login(process.env.token);