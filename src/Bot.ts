import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import auth from "./auth.json";
import interactionCreate from "./listeners/interactionCreate";

const token = auth.DISCORD_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);

console.log(client);