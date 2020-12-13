const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'hey gamer';

client.once('ready', () => {
    console.log('Gamer Assistant is online!');
    
});


const yesno_list = ["Yes",       "No",               "Maybe...",
                    "Sure!",     "Obviously not", "Perhaps...",
                    "Hell yeah", "Hell no",
                    "Absolutely", "Absolutely not",
                    "Off course", "Nope",
                    "Why not",    "That's not a good idea"]

const is_list = ["is", "was", "am", "are", "were", "did", "does", "has", "have", "had"]



client.on('message', message => {
    client.once('ready', () => {
        message.channel.send("Gamer Assistant is online!");

    });

    var str = message.content;
    var res = str.toLowerCase().replace(/[^A-Za-z0-9\s<>@:]/g, '');


    if (!res.startsWith(prefix) || message.author.bot ) return;
    //message.channel.send('mc: ' + message.content);
    //message.channel.send('res: ' + res);


    const args = res.slice(prefix.length).split(/ +/);
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

    //var ping = args.includes("ping");
    //var spam = args.includes("spam");
    //var is = args.some(r => is_list.indexOf(r) >= 0);
    else if (args == "help") {
        message.channel.send("Commands:\n**Help** = List of all the commands.\n**... ping ...** = Pong.\n**Spam \"Word/Sentence\"** = Spams that word or sentence.\n**Say \"Word/Sentence\"** = Says that word or sentence.\n**... name ...** = Generates a random name.\n**Anything else** = Yes or No awnser.");
    }

    else if (args[0] == "spam") {
        var fruits = args2;
        fruits.shift();
        fruits.shift();
        fruits.shift();
        if (fruits.length < 1) {
            fruits = ["Spam"];
        }
        var last = fruits[fruits.length - 1].replace(/[^0-9@]/g, '');

        if (last.charAt(0) == "@") {
            last = last.substring(1);
            var high_last = true;
        } else if (last.includes("@")) {
            message.channel.send("Number is invalid");
            return;
        } else {
            last = Number(last);
            var high_last = false;
        }

        if (high_last && last < 31) {
            var spam_len = last;
            fruits.pop();
        } else if (high_last && last > 30) {
            message.channel.send("Max max spam is 30");
            return;
        } else if (last > 10 && !high_last) {
            message.channel.send("Max spam is 10");
            return;
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
                message.channel.send(fruits.join(" "));
            }
        }


    }

    else if (args[0] == "say") {
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
    else if (args.includes("name")) {
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

        var rand_name = rand_adj + rand_noun;
        message.channel.send(rand_name);
    }
    else if (args.includes("ping")) {
        message.channel.send('Pong!');

    }






    else {
        var rand_word = yesno_list[Math.floor(Math.random() * yesno_list.length)];
        message.channel.send(rand_word);
    }
});




client.login(process.env.token);