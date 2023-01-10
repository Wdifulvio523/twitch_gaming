require('dotenv').config();
const tmi = require('tmi.js');

const opts = {
    identity: {
        username: 'paid4hire',
        password: 'oauth:v32h133sjdlikg5ux1e19clfct9nfj'
    },
    channels: [
        'channel_name_to_join'
    ]
};

const client = new tmi.Client(opts);

client.on('error', (err) => {
    console.error(`Error: ${err}`);
});

try {
    client.connect()
        .then(() => {
            console.log('connected!');
        }).catch(err => {
            console.error(`Error: ${err}`);
        });
} catch (err) {
    console.error(`Error: ${err}`);
}