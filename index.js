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

const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'paid4hire',
		password: 'oauth:f482qpbbzmcor9qcgnt486gnlsqfc7'
	},
	channels: [ 'paid4hire' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});
	