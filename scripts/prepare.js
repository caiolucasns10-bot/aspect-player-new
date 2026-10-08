// Copia o hls.js (player de streams .m3u8) para dentro da pasta www
const fs = require('fs');
fs.copyFileSync('node_modules/hls.js/dist/hls.min.js', 'www/hls.min.js');
console.log('hls.min.js copiado para www/');
