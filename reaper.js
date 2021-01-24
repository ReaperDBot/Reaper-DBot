const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

//const config = require('./config.json')

client.on('ready', () => {
    console.log('Ready to kill as ' + client.user.tag)
});

client.login(process.env.DJS_TOKEN)