const { Client } = require('discord.js');
const logs = require('discord-logs');
const client = new Client();
logs(client);

const config = {
    guildID: "Guild ID",
    channelsID: [
        "",
        "",
        "",
        ""
    ]
};

client.on("ready", () => {
    console.log(`${client.user.tag} is ready !`);
});

client.on("voiceChannelJoin", (member, channel) => {
    if (!config.channelsID.includes(channel.id)) return;
    member.voice.kick();
});

client.login("token");