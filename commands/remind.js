const { Command } = require('discord-akairo');
const { oneLine } = require('common-tags');
const ms = require('ms');

module.exports = class RemindCommand extends Command {
  constructor() {
    super('remind', {
      aliases: ['remind'],
      args: [{
        id: 'reminder',
        prompt: {
          start: msg => `${msg.author}, please telleth me what thee would like to beest reminded of.`
        }
      },
      {
        id: 'time',
        type: time => {
          try {
            return ms(time);
          } catch(e) {
            console.log(e);
            return null;
          }
        },
        prompt: {
          start: msg => `${msg.author}, please telleth me how long thee wanteth me to wait ere reminding thee.`,

          retry: msg => `${msg.author}, that's not a valid time. Please try again.`
        }
      }]
    });
  }

  exec(msg, args) {
    msg.channel.send(oneLine`${msg.author}, I wilt remind thee about \`${args.reminder}\` in
    \`${ms(args.time, {long: true})}\`!`);

    setTimeout(() => {
      msg.channel.send(`${msg.author} I hast a reminder for you! \`${args.reminder}\`!`);
    }, args.time);

    return;
  }
};