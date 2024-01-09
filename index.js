const Discord = require("discord.js-selfbot-v13") // npm i discord.js-selfbot-v13 (required)
const client = new Discord.Client({checkUpdate: false})
const sphinx = require("sphinx-self");

new sphinx.Core(client).leveling({ channel: "Channel ID" }) //hover for options

client.login("Your Discord Token") //Not saved.
