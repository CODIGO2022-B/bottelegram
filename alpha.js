require("./settings")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    simple
} = require("./lib/myfunc")
const fs = require('fs')
const os = require('os')
const speed = require('performance-now')

if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log(lang.noToken)
}
const express = require('express')
const app = express();
app.get('/', (req, res) => {
  res.end("Mi bot está en línea")
})
app.listen(3000, () => {
  console.log("El bot está en línea")
})

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

const bot = new Telegraf(BOT_TOKEN)
async function startalpha() {
    bot.on('callback_query', async (alpha) => {
        //console.log(alpha)
        action = alpha.callbackQuery.data.split(' ')
        args = action
        user_id = Number(action[1])
        if (alpha.callbackQuery.from.id != user_id) return alpha.answerCbQuery('Uppss... this button not for you!', {
            show_alert: true
        })
        const timestampi = speed();
        const latensii = speed() - timestampi
        const user = simple.getUserName(alpha.callbackQuery.from)
        const {
            isUrl,
            fetchJson
        } = simple
        const pushname = user.full_name;
        const username = user.username ? user.username : "zeeone_ofc";
        const isCreator = [alpha.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(user.username ? user.username : "-")
        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await alpha.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        try {
            switch (action[0]) {
                case "menucmd": {
                    let hit_total;
                    try {
                        hit_total = await simple.fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
                    } catch {
                        hit_total = {
                            value: "-"
                        }
                    }
                    hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
                    let dnew = new Date(new Date + 3600000)
                    let week = dnew.toLocaleDateString('en', {
                        weekday: 'long'
                    })
                    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
                    let date = dnew.toLocaleDateString('en', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                    let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    }).format(dnew)
                    lang.menu(alpha, THUMBNAIL, pushname, OWNER_NAME, OWNER, "/", hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user.id.toString())
                }
                break
                case "animecmd": {
                    lang.animecmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "asupancmd": {
                    lang.asupancmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "cecancmd": {
                    lang.cecancmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "cogancmd": {
                    lang.cogancmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "downloadcmd": {
                    lang.downloadcmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "ephotocmd": {
                    lang.ephotocmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "ephotocmd2": {
                    lang.ephotocmd2(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "logocmd": {
                    lang.logocmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "logocmd2": {
                    lang.logocmd2(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "islamcmd": {
                    lang.islamcmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "nsfwcmd": {
                    lang.nsfwcmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "photooxycmd": {
                    lang.photooxycmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "textprocmd": {
                    lang.textprocmd(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "textprocmd2": {
                    lang.textprocmd2(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "textprocmd3": {
                    lang.textprocmd3(alpha, THUMBNAIL, user_id.toString())
                }
                break
                case "owner": {
                    await alpha.sendContact(OWNER_NUMBER, OWNER_NAME)
                    reply(`My lord [${OWNER_NAME}](${OWNER[0]}) 👑`)
                }
                break
                case "ytmp3": {
                if (!args[2]) return reply(`*Putting URL YouTube*`)
                if (!isUrl(args[2])) return reply(`Invalid URL\n\nMungkin kamu salah memasukkan url atau memberikan spasi saat menggunakan fitur ini\n\nUsahakan tidak ada spasi.\nContoh: ${prefix+command} url`)
                if (!args[2].includes('youtu.be') && !args[2].includes('youtube.com')) return reply(`*Invalid URL*\n\nMungkin kamu salah memasukkan url atau memberikan spasi saat menggunakan fitur ini\n\nUsahakan tidak ada spasi.\nContoh: ${prefix+command} url`)
                await itsuka.deleteMessage()
                let res = await fetch(`https://pnggilajacn.my.id/api/download/ytmp3?url=`+args[2])
                var result = await res.json()
                var {
                    id,
                    thumbnail,
                    title,
                    size,
                    download
                } = result.result
                let key = "「 YOUTUBE AUDIO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Quality: 128kbps\n`
                key += `• Size: ${size}\n\n`
                key += `Audio in progress, please wait...`
                if (size > 20000) return reply(`Ukuran file melebihi batas, silahkan download sendiri ☠️\n\nDownload: https://ytdl.pnggilajacn.my.id/?url=`+id+`&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`)
                    await itsuka.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                    await itsuka.replyWithAudio({
                        url: download,
                        filename: title
                    })
                    }
                break
                case "ytmp4": {
                if (!args[2]) return reply(`*Putting URL YouTube*`)
                if (!isUrl(args[2])) return reply(`Invalid URL\n\nMungkin kamu salah memasukkan url atau memberikan spasi saat menggunakan fitur ini\n\nUsahakan tidak ada spasi.\nContoh: ${prefix+command} url`)
                if (!args[2].includes('youtu.be') && !args[2].includes('youtube.com')) return reply(`*Invalid URL*\n\nMungkin kamu salah memasukkan url atau memberikan spasi saat menggunakan fitur ini\n\nUsahakan tidak ada spasi.\nContoh: ${prefix+command} url`)
                await itsuka.deleteMessage()
                let res = await fetch(`https://pnggilajacn.my.id/api/download/ytmp4?url=`+args[2])
                var result = await res.json()
                var {
                    id,
                    thumbnail,
                    title,
                    size,
                    download
                } = result.result
                let key = "「 YOUTUBE VIDEO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Quality: 360p\n`
                key += `• Size: ${size}\n\n`
                key += `Video In progress, please wait...`
                if (size > 20000) return reply(`Ukuran file melebihi batas, silahkan download sendiri ☠️\n\nDownload: https://ytdl.pnggilajacn.my.id/?url=`+id+`&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`)
                    await itsuka.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                    await itsuka.replyWithVideo({
                        url: download
                    }, {
                        caption: lang.ok
                    })
                    }
                break
            }
        } catch (e) {
            console.log(e)
        }
    })
    bot.command('help', async (alpha) => {
        user = simple.getUserName(alpha.message.from)
        await alpha.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Script',
                        url: "https://github.com/zeeoneofficial/telebot"
                    }, {
                        text: 'Owner',
                        url: OWNER[0]
                    }]
                ]
            }
        })
    })

    bot.command('start', async (alpha) => {
        let user = simple.getUserName(alpha.message.from)
        await alpha.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Script',
                        url: "https://github.com/zeeoneofficial/telebot"
                    }, {
                        text: 'Owner',
                        url: OWNER[0]
                    }]
                ]
            }
        })
    })
    bot.on('message', async (alpha) => {
        require("./index")(alpha, bot)
    })

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/"
        })
    })
}
startalpha()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))