// Filename: scheduledMessages.js

const { Client, Intents, TextChannel } = require('discord.js');
const { scheduledMessages } = require('../botConfig/scheduledMessages');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Scheduled Messages Bot is ready!');
});

client.on('messageCreate', async (message) => {
  if (message.content === '!scheduleMessage') {
    const channel = message.channel;
    const scheduledMessage = scheduledMessages.find((msg) => msg.channelId === channel.id);
    
    if (!scheduledMessage) {
      return message.reply('No scheduled message found for this channel.');
    }

    const { content, time } = scheduledMessage;
    
    setTimeout(() => {
      channel.send(content);
    }, time);
  }
});

client.login('your-bot-token');