// Ajusta o AndroidManifest para: Android TV (leanback), controle/gamepad,
// sem exigir tela de toque e com trafego http liberado (servidores IPTV).
const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');

if (!x.includes('android.software.leanback')) {
  x = x.replace(
    '<application',
    '<uses-feature android:name="android.software.leanback" android:required="false" />\n' +
    '    <uses-feature android:name="android.hardware.touchscreen" android:required="false" />\n' +
    '    <uses-feature android:name="android.hardware.gamepad" android:required="false" />\n\n' +
    '    <application'
  );
  x = x.replace(
    '<application',
    '<application android:usesCleartextTraffic="true" android:banner="@mipmap/ic_launcher"'
  );
  x = x.replace(
    /(<category android:name="android.intent.category.LAUNCHER"\s*\/>)/,
    '$1\n                <category android:name="android.intent.category.LEANBACK_LAUNCHER" />'
  );
  fs.writeFileSync(p, x);
  console.log('AndroidManifest.xml ajustado para TV, gamepad e http.');
} else {
  console.log('AndroidManifest.xml ja estava ajustado.');
}
