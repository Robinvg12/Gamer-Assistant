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
    if (args == "help") {
        message.channel.send("Commands:\n**Help** = List of all the commands.\n**... ping ...** = Pong.\n**Spam \"Word/Sentence\"** = Spams that word or sentence.\n**Say \"Word/Sentence\"** = Says that word or sentence.\n**Broadcast \"Word/Sentence\"** = Says that word or sentence and deletes your message.\n**... name ...** = Generates a random name.\n**... old/age ...** = Generates random age.\n**Dice/Roll \"number\"** = Rolls dice for a number between 1 and that number.\nor **Dice/Roll \"min number\" \"max number\"** = Rolls dice for a number between the min. and max.\n**Anything else** = Yes or No awnser.");
    }
    else if (args[0] == "help" && args[1] == "nl") {
        message.channel.send("Commands:\n**Help** = Lijst met alle commando's.\n**... ping ...** = Pong.\n**Spam \"Woord/Zin\"** = Spamt dat woord of die zin.\n**Zeg \"Woord/Zin\"** = Zegt dat woord of die zin.\n**Broadcast \"Woord/Zin\"** = Zegt dat woord of die zin en verwijderd jouw bericht.\n**... naam ...** = Genereert een willekeurige naam.\n**... oud ...** = Genereert een willekeurige leeftijd.\n**Dobbelsteen/Roll \"nummer\"** = Rolt dobbelsteen voor een nummer tussen 1 en dat nummer.\nor **Dobbelsteen/Roll \"min nummer\" \"max nummer\"** = Rolt dobbelsteen voor een nummer tussen min. en max.\n**Al het andere** = Engelse Ja of Nee antwoord.");

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
        var last = fruits[fruits.length - 1].replace(/[^0-9@]/g, '');
        
        if (number) {
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
        } else {
            var high_last = false;
        }
        

        if (high_last && last < 31 && last > 10) {
            var spam_len = last;
            fruits_join = fruits.join();
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
        message.channel.send("Rolling...")
        message.channel.send("args.length " + args.length)
        message.channel.send("args[0] " + args[0])
        message.channel.send("args[1] " + args[1])
        message.channel.send("args[2] " + args[2])
        setTimeout(() => {
            if (args.length == 2) {
                var max = args[1].replace(/[^0-9]/g, '')
                var rand_dice = (Math.random() * (max - 1)) + 1;
            } else if (args.length == 3) {
                var min = args[1].replace(/[^0-9]/g, '')
                var max = args[2].replace(/[^0-9]/g, '')
                var rand_dice = (Math.random() * (max - min)) + min;
            } else {
                var rand_dice = Math.random() * 5 + 1;
            }
            message.channel.send("You rolled: " + Math.round(rand_dice));
        }, 1000);
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