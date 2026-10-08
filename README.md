# Aspect Player

App de streaming para Xtream Codes (TV ao vivo, filmes e séries) com visual em tons neutros,
adaptado para celular, desktop e TV, com suporte a controle remoto, controle de Xbox e botões
de navegação do Android.

## Como gerar o APK (GitHub)
1. Envie todos os arquivos deste projeto para um repositório no GitHub (branch `main`).
2. Abra a aba **Actions** e aguarde o workflow **Gerar APK** terminar (cerca de 6 a 10 minutos).
3. Baixe o `aspect-player.apk` na aba **Releases** (lado direito da página do repositório).

Para alterar o app depois, edite `www/index.html` no próprio GitHub e salve (commit):
um novo APK é gerado automaticamente.

## Estrutura
- `www/index.html` — o app inteiro (interface, API Xtream, player, navegação por controle)
- `capacitor.config.json` — configuração do Capacitor (appId `com.aspect.player`)
- `scripts/prepare.js` — copia o hls.js (necessário para TV ao vivo)
- `scripts/patch-android.js` — ajusta o AndroidManifest para Android TV, gamepad e http
- `.github/workflows/build-apk.yml` — receita que compila o APK na nuvem

## Controles
- Controle remoto / teclado: setas, OK (Enter), Voltar (Esc/Backspace)
- Xbox: direcional ou analógico esquerdo, A = selecionar, B = voltar, Y = buscar,
  LB/RB = trocar de aba (no player: canal/episódio anterior e próximo), Menu = pausar
- Player: ◀ ▶ voltam/avançam 10 s (segurando acelera até 60 s); ▲ ▼ trocam de canal ao vivo
- Celular: barra inferior, toques e botão Voltar do Android
