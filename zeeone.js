const { spawn } = require('child_process');
const path = require('path');

function start() {
   // Construye los argumentos para el proceso secundario, incluyendo la ruta a 'alpha.js' y cualquier argumento adicional
   let args = [path.join(__dirname, 'alpha.js'), ...process.argv.slice(2)];

   // Registra el comando que se ejecutará
   console.log([process.argv[0], ...args].join('\n'));

   // Genera un nuevo proceso
   let p = spawn(process.argv[0], args, {
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   })
   .on('message', data => {
      // Maneja los mensajes enviados desde el proceso secundario
      if (data == 'reset') {
         console.log('Reiniciando el Bot...');
         p.kill(); // Termina el proceso secundario actual
         start();  // Reinicia el script
         delete p; // Elimina la referencia al proceso secundario (puede no ser necesario)
      }
   })
   .on('exit', code => {
      // Maneja la salida del proceso secundario
      console.error('Salida con código:', code);
      // Reinicia el script si el código de salida es null, '.', o 1
      if (code == null || code == '.' || code == 1) start();
   });
}

// Inicia el proceso inicial
start();