
require('dotenv').config();
const fs = require('fs')
const ytdl = require('ytdl-core');
const {Telegraf} = require('telegraf');
const { url } = require('inspector');
const { notDeepEqual } = require('assert');
const bot = new Telegraf(process.env.BOT_TOKEN);



bot.command('start', ctx=>{
  
    bot.telegram.sendMessage(ctx.chat.id, 'Hello and thank you for using the telegram videodownloader made by @engnrobad, if youw would like to contribute to this project here is a link to the github page:https://github.com/obaddabo/youtube-video-downloader-telegram-bot and also  if you would like to donate to the delopers please do that here : buymeacoffee.com/engnrobad')
    bot.telegram.sendMessage(ctx.chat.id, "enter /download")
})










bot.launch();


console.log ("last line")