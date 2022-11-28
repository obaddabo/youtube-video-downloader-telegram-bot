const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);



bot.command('start', ctx=>{
    console.log(ctx.form);
    bot.telegram.sendMessage(ctx.chat.id, 'Hello and thank you for using the telegram videodownloader made by @engnrobad, if youw would like to contribute to this project here is a link to the github page:https://github.com/obaddabo/youtube-video-downloader-telegram-bot and also  if you would like to donate to the delopers please do that here : buymeacoffee.com/engnrobad')4
})

bot.hears('hi', (ctx)=> ctx.reply('hello'))

bot.launch();


console.log ("last line")