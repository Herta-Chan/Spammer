import delay from "delay";
import { Client } from "discord.js-selfbot-v13";
import fs from "fs"
import path from "path";

const token = []
const text = []

const client = new Client()
client.on("ready", async(client)=>{
  const channel = await client.channels.fetch(data.spamChannel)
  if (!channel ) return 
  if (!channel.isText()) return
  while ( true ){
    await channel.send(text)
    await delay(1000)
  }
})


client.login(token)
