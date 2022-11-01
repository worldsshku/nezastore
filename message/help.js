const moment = require("moment-timezone");
const fs = require("fs");
const { runtime, sleep } = require("../lib/myfunc");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} @${sender.split('@')[0]} 👋
	
 *INFO BOT*
 👑 Creator : ${setting.ownerName}
 🤖 Bot Name : ${setting.botName}
 📆 Tanggal : ${tanggal}
 ⌚ Jam : ${jam}
 ⏳ Runtime
 ${runtime(process.uptime())}
 
 *INFO USER*
 📝 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 ⏱️ Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 🎮 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 💰 Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
 *RANDOM MENU*
 • ${prefix}runtime
 • ${prefix}speed
 • ${prefix}owner
 • ${prefix}sc
 • ${prefix}donasi
 • ${prefix}thanksto
 • ${prefix}delete
 • ${prefix}kirim
 • ${prefix}cekprem
 • ${prefix}listprem
 • ${prefix}listban
 • ${prefix}listsewa
 • ${prefix}topbalance
 • ${prefix}login
 • ${prefix}listlogin

 *STORE MENU*
 • ${prefix}addlist *key@response*
 • ${prefix}dellist *key*
 • ${prefix}updatelist *key@response*
 • ${prefix}list
 • ${prefix}proses
 • ${prefix}done

 *GAME MENU*
 • ${prefix}susunkata
 • ${prefix}siapakahaku
 • ${prefix}mancing
  
 *PAYMENT & BANK*
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}ceklimit
 • ${prefix}cekbalance
  
 *GROUP MENU*
 • ${prefix}linkgrup
 • ${prefix}setppgrup
 • ${prefix}setnamegc *text*
 • ${prefix}setdesc *text*
 • ${prefix}group *open/close*
 • ${prefix}imgtag *text*
 • ${prefix}mute
 • ${prefix}unmute
 • ${prefix}revoke
 • ${prefix}hidetag *text*
 • ${prefix}tagall *text*
 • ${prefix}add *nomor*
 • ${prefix}kick *nomor*
 • ${prefix}welcome *enable/disable*
 • ${prefix}antilink *enable/disable*
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 • ${prefix}broadcast *text*
 • ${prefix}setppbot
 • ${prefix}setexif *text1 | text2*
 • ${prefix}setowner *nomor*
 • ${prefix}setmenu *type*
 • ${prefix}addlimit
 • ${prefix}addglimit
 • ${prefix}addbalance
 • ${prefix}addprem
 • ${prefix}delprem
 • ${prefix}join *link*
 • ${prefix}leave
 • ${prefix}mode
 • ${prefix}public
 • ${prefix}self
 • ${prefix}ban
 • ${prefix}unban
 • ${prefix}block *nomor*
 • ${prefix}unblock *nomor*
 • ${prefix}sewa *add/del*
 
 *THANKS TO*
 ➢ NEZASTORE
 ➢ ISALSTORE
 ➢ ARJUNASTORE
 ➢ ENDKASTORE
`
}
