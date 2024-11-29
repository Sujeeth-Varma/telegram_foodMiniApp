import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const web_link = "https://rad-vacherin-d814d9.netlify.app/";

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [[{ text: "Web App", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
