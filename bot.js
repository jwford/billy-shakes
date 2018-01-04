const { AkairoClient } = require('discord-akairo');

const bot = new AkairoClient({
  ownerID: '273707798670344192',
  prefix: '!',
  commandDirectory: 'commands',
  defaultPrompt: {
    retries: 10,
    timeout: msg => `${msg.author}, time hath expired for this command.`,
    ended: msg => `${msg.author}, thou has't hath reached the maximum number of retries.`,
    cancel: msg => `${msg.author}, the command hath been canceled.`
  }
});

bot.on('ready', () => {
  console.log(`${bot.user.tag} is ready!`);
});

bot.login('Mzc3OTkxNDg1NDUyMTg5Njk3.DShjTg.WFucylTmX1NtLhjh1u531VnHtO0');