let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Partyan Dulu ygy*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/eabb6696cf296336effba.jpg',
        }
       } 
     }
conn.sendAudio(m.chat, 'https://file.io/1BZKHiUuKXgL', hyzer, { packname: "sticker by", author: "JarotOfc" })
}

handler.customPrefix = /^(Tes)$/i
handler.command = new RegExp

module.exports = handler
