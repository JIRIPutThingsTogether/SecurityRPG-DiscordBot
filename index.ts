import * as DiscordJS from 'discord.js' //Vérifier que l'on ne prend que le nécessaire
import { Intents } from 'discord.js'

import * as dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('OPERATIONNEL');
})
client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})
client.login(process.env.TOKEN)