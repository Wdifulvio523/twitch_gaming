// require('dotenv').config();
// const tmi = require('tmi.js');

// const opts = {
//     identity: {
//         // username: 'your_bot_username',
//         // password: 'oauth:YOUR_OAUTH_TOKEN'
//         username: 'paid4hire',
//         password: 'oauth:uob9ay4yr2l4ib491wxnq52b37r09f'
//     },
//     channels: [
//         // 'channel_name_to_join'
//         'paid4hire'

//     ]
// };

// const client = new tmi.Client(opts);

// client.on('error', (err) => {
//     console.error(`Error: ${err}`);
// });

// try {
//     client.connect()
//         .then(() => {
//             console.log('connected!');
//         }).catch(err => {
//             console.error(`Error: ${err}`);
//         });
// } catch (err) {
//     console.error(`Error: ${err}`);
// }

require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		USERNAME: process.env.USERNAME + Math.floor(Math.random()*100000),
		PASSWORD: process.env.OAUTH_TOKEN
	},
});

client.connect();

client.on('connected', (addr, port) => {
    console.log(`Connected to ${addr}:${port}`);
});

client.on('message', (channel, tags, message, self) => {
    // Ignore echoed messages.
    if(self) return;

    if(message.toLowerCase() === '!hello') {
        // "@alca, heya!"
        client.say(channel, `@${tags.username}, heya!`);
    }
});

client.on('disconnected', (reason) => {
    console.log('Disconnected due to: '+ reason);
});

client.connect();