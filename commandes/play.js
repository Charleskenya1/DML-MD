const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const conf = require(__dirname + "/../set");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault ("Africa/nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   ╭━━━《 *𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃* 》━━━┈⊷
┃❍╭──────────────
┃❍│▸  *ᴅᴀᴛᴇ*: ${date}
┃❍│▸  *ᴛɪᴍᴇ ɴᴏᴡ*: ${temps}
┃❍│▸  *ᴘʀᴇғɪx* : [  ${s.PREFIXE}  ]
┃❍┃▸  *ᴍᴏᴅᴇ* :  ${mode} mode
┃❍┃▸  *ᴘʟᴜɢɪɴs* : ${cm.length}
┃❍┃▸  *ʀᴀᴍ* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃❍│▸  *ʀᴜɴɴɪɴɢ ᴏɴ* : ${os.platform()}
┃❍│▸  *ᴏᴡɴᴇʀ* :  ${s.OWNER_NAME}
┃❍│▸  *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : Cₕₐᵣₗₑₛₖₑ 
┃❍│▸  *ᴛɪᴍᴇᴢᴏɴᴇ* : ${s.TZ}
┃❍╰───────────────
╰━━━━━━━━━━━━━━━┈⊷

> 𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃\n${readmore}`;
    
    
let menuMsg = `

 *𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*`;

    for (const cat in coms) {
        menuMsg += ` ╭──────✣ *${cat}* ✣─────︎⊷⊷`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│❍│ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ Cₕₐᵣₗₑₛₖₑ ₓₘD ᴛᴇᴄʜ
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363302677217436@newsletter',
              newsletterName: '𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/p6uxq0.png",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363351653122969@newsletter',
              newsletterName: '𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝐓𝐇𝐄 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/p6uxq0.png",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
      }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363351653122969@newsletter',
              newsletterName: '𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝐂𝐇𝐀𝐑𝐋𝐄𝐒𝐊𝐄 𝐗𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄",
          body: "Follow my channel for more updates",
          thumbnailUrl: ".    ",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true


        }
      }
    }, { quoted: ms });
    
}

});