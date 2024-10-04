export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Bot, webhookCallback } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const bot = new Bot(token);

bot.on("message:text", async (ctx) => {
	if (ctx.message.text === "/start") {
		await bot.api.setChatMenuButton({
			menu_button: {
				type: "web_app",
				text: "Wallet",
				web_app: {
					url: "https://t.me/wallet_hoang12zx_bot/wusdtest",
				},
			},
		});
		await ctx.reply("Your Wallet is set and ready.\nYou can start using crypto in Telegram.", {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "Open Wallet",
							url: "https://t.me/wallet_hoang12zx_bot/wusdtest",
						},
					],
				],
			},
		});
	} else {
		await ctx.reply("");
	}
});

export const POST = webhookCallback(bot, "std/http");
