const tmi = require('./tmi');

// Define configuration options
const opts = {
    identity: {
        username: 'your_bot_username',
        password: 'oauth:YOUR_OAUTH_TOKEN'
    },
    channels: [
        'channel_name_to_join'
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', require('./onMessageHandler'));
client.on('connected', require('./onConnectedHandler'));

// Connect to Twitch:
client.connect();
