import delay from 'delay';
import { Client } from 'discord.js-selfbot-v13';
import fs from 'fs';
import path from 'path';

const token = []

const client = new Client();
//for (let i = 0; i < TOKEN.length ; i++) {
  client.on("ready", async(client) => {
    const channel = await client.channels.fetch("1144633220445523982")
    if (!channel) return
    if (!channel.isText()) return
    //while (true) {
      await channel.send(`
      <@1090645838050627764> <@480801835481825290>
      Tôi là STEAM member vỏn vẹn cũng đã được 20 năm. Sau một vụ nổ lớn server raid hôm qua. Sáng ra đường ăn sáng, mang danh hiệu STEAM member cứ như là vua mang long bào. Đi ra đường ch.ó nhìn sợ không dám s.ủa. Trưa đua vài lệnh chiều xanh tím. Tối ra phố đi bộ các em gái thì tranh nhau xin chụp hình chung. Hội nyc thì đồng loạt đòi nối lại tình xưa. Bạn bè thì nhìn tôi cũng phải cúi đầu nể 10 phần. Về nhà thì gia đình tự hào, hàng xóm thì ganh tỵ vì biết tôi là STEAM member được 20 năm
      https://discord.gg/762FSkusVm
      `)
      //await delay(1000)
    //}
  })

  //if (!client.token) client.token = TOKEN[i];
  
  client.login(token)
//}
