const {Telegraf} = require('telegraf')
const bot = new Telegraf("5945258317:AAEzaAxh7MIPPQk5uWoUetNozHxKYcfiFLo");



bot.command('start', ctx=>{
    console.log(ctx.form);
    bot.telegram.sendMessage(ctx.chat.id, 'Hello and thank you for using the telegram videodownloader made by @engnrobad')
})



bot.launch();


console.log ("last line")