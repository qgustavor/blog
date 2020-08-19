---
layout: post
tags: []
title: "Capturas em massa"
date: 2020-08-19 03:06:14 +0000
excerpt: "Vamos supor que, por algum motivo, você precisa tirar milhares de capturas de vídeos em tempos..."
image: https://i.imgur.com/VNw4X7h.png
---

Vamos supor que, por algum motivo, você precisa tirar milhares de capturas de vídeos em tempos específicos, como você faria isso? Pesquisar no StackOverflow e pegar a primeira resposta que sair parece tentador, mas podemos fazer melhor!

A maioria das respostas irá sugerir para usar o ffmpeg. Na maioria dos casos ele é realmente a melhor opção por ser simples de usar: "ffmpeg -ss tempo -i fonte.mp4 -vframes 1 destino.png", repetir isso a quantidade de vezes que for necessária e o problema está resolvido. Por outro lado esse método tem certos problemas:

* Você precisa de iniciar uma instância do ffmpeg para cada imagem, o que torna o processo muito lento, mesmo se você usar várias instâncias em paralelo;
* As legendas não aparecem nas capturas por padrão; você pode usar um filtro para isso, mas nem sempre é fácil já que é complicado configurar as fontes para funcionar com esse filtro;
* O ffmpeg não suporta [certos MKVs](https://qgustavor.keybase.pub/padoru%20(10%20hours).mkv) (que são raros... exceto se você estiver trabalhando com animes);
* As capturas ficarão erradas para vídeos em que o aspect ratio mostrado (DAR) é diferente do codificado (SAR);
* Alguns vídeos podem ter problemas de compatibilidade (use “-x264_build 150” para esses casos).

Um método alternativo que eu achei bem mais interessante é usar o MPV para isso. Ele é mais complexo e consiste dos seguintes passos:

1. Abra o vídeo no MPV usando “--vo=null” para não abrir uma janela, “--audio=no” para não processar o áudio, “--pause” para pausar o vídeo (bem na lata, né?), e o argumento mais importante, “--input-ipc-server=/tmp/node-mpv.sock”;
2. Conecte ao MPV usando o IPC acima e aguarde pelo evento “playback-restart”;
3. Para cada imagem que você precisar tirar use o comando “seek [tempo] absolute+exact”, espere pelo evento “playback-restart” e então use o comando “screenshot-to-file [arquivo]”;
4. Por padrão as legendas aparecem nas capturas (o que é ótimo!). Se quiser desativar isso só adicionar “video” depois do nome do arquivo nesse último comando.

Assim como com o ffmpeg é possível usar várias instâncias em paralelo (geralmente uso uma para cada vídeo) e, apesar de toda a dificuldade envolvendo a comunicação via IPC, os resultados são surpreendentes: todos os problemas que listei acima são resolvidos e claro, é BEM mais rápido.

*Só não me perguntem por que tenho tantas capturas no meu computador...*