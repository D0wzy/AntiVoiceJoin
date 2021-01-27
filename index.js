const { Client } = require('discord.js');
const client = new Client();
const { Events } = require("discord-addons");

new Events(client);

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
