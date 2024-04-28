const fs = require("fs");
const {
   indonesia
} = require("./language");

//Global ramdon
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]

// Sitio web API (no lo cambies para evitar errores)
// Tus claves API
const apiKeys = ['XIoJ4JmUWKp99Nk', 'Kqfxy8ZIyhKWzrS', 'WvW3ataJ53Ly86O', 'Lgw6634wFbolLpt', '4uRSPBJTwM3r7xq', '3Uz5ENUgnKyj2Wv', 'TPOMXgVf', 'ckDBroUFu7lTNv8', 'ElUhm8NNLE'];

// Selecciona una clave API al azar
const randomApiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id',
   can: 'https://pnggilajacn.my.id',
   lol: 'https://api.lolhuman.xyz',
   rose: 'https://api.itsrose.site',
   zenzapis: 'https://api.zahwazein.xyz',
   ApiEmpire: 'https://api-ash.zipponodes.xyz'
}

global.APIKeys = {
   'https://api.zahwazein.xyz': `${keysxxx}`,
   'https://api.zeeoneofc.my.id': randomApiKey, // La clave API se selecciona al azar
   'https://pnggilajacn.my.id': 'ItsukaChan',
   'https://api.lolhuman.xyz': 'GataDios',
   'https://api.itsrose.site': 'Rs-Zeltoria'
}

// Idioma
global.language = indonesia // Cambia a english si no comprendes el idioma utilizado por el bot

global.BOT_TOKEN = "6223074716:AAEZYFlRVBq-MGCqk-f2ieAh0skmS8uRouI" // Crea tu bot aquí https://t.me/BotFather y obtén el token del bot
global.BOT_NAME = "Alphabot-Mdོ" // Nombre de tu bot
global.OWNER_NAME = "ᴹᴿ᭄ Misael ×፝֟͜×" // Tu nombre
global.OWNER_NUMBER = "916738232" // Tu número de Telegram
global.OWNER = ["https://t.me/Misael_qm_16", "https://t.me/Misael_qm_16"] // Asegúrate de que el nombre de usuario sea correcto para que las funciones especiales del propietario puedan usarse
global.THUMBNAIL = "./image/lol.jpg" // lol.jpg es el nombre de la foto en la carpeta de imágenes, utilizada como foto del bot
global.DONASI = "./image/donasi.jpg" // Foto de donación en la carpeta de imágenes
global.lang = language // No cambies