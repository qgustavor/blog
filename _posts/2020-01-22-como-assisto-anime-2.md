---
layout: post
tags: []
title: "Como assisto anime - Parte 2"
date: 2020-01-22 03:51:37 +0000
excerpt: "Na primeira postagem falei do meu primeiro script de organização de animes e o que fez ele ser daquela forma. Hoje vou escrever o que fez..."
---

Na primeira postagem falei do meu primeiro script de organização de animes e o que fez ele ser daquela forma. Hoje vou escrever o que fez com que eu parasse de usar ele, como isso mudou a forma que eu assisto animes e o que isso me influencia hoje.

Caso não viram ainda [essa postagem](https://qgustavor.tk/principios-de-organizacao/) e [essa aqui](https://qgustavor.tk/estat%C3%ADsticas/) a principal mudança que ocorreu nessa transição em 2016 foi usar um arquivo .txt com uma lista de arquivos (ou scripts que geram essa lista).

O que eu não expliquei nas outras postagens é o motivo dessa mudança: com ela passei todas as etapas de download para o meu computador, onde posso automatizar usando RSS e outras ferramentas, e passei a sincronizar automaticamente arquivos com o meu celular.

Em outras palavras: **foi para economizar tempo.**

E como eu queria economizar tempo implementei ele da forma mais simples que eu sabia: em 60 linhas de batch. Ele roda um "for" que chama o adb e pega o último arquivo enviado no celular, depois roda um “for“ no .txt, pega o caminho do próximo arquivo dela e envia para o celular. Repete até acabar o espaço no celular.

Isso foi em março de 2016. Em novembro notei que eu poderia fazer melhor: já que eu estava usando o computador para organizar eu poderia reencodar os animes e resolver [aquele problema da bateria](https://i.imgur.com/2IE032f.png) (e a dor de cabeça).

Com essa mudança reescrevi o .bat para fazer apenas a tarefa “enquanto houver arquivos na pasta A e houver espaço no celular: enviar os arquivos e mover para a pasta B” e o script do Node para “pegue o último arquivo na pasta B, procure ele no .txt, selecione os próximos arquivos, reencode se for necessário, copie se não, coloque eles na pasta A e finalmente apague os arquivos da pasta B”.

É assim que o script funciona até hoje (e é por isso que migrar ele é uma dor de cabeça).

Em abril de 2017 notei algo: posso melhorar esse script criando configurações. Então criei duas configurações: uma para download, que permite que arquivos possam ser baixados automaticamente pelo script quando necessário, e outra para configurar como os arquivos serão reencodados e legendas.

Como o script (geralmente) consegue determinar a forma mais simples de encodar um vídeo que funcione no meu celular e com qualidade raramente usei essas configurações para isso. Por outro lado usei elas muito para configurar legendas. Assim eu posso baixar vídeos sem me preocupar com a legenda que vem neles - como raws, vídeos em inglês, em francês, em chinês, etc - e colocar as legendas que eu quiser por cima. Em agosto ainda implementei uma função para o script adicionar as fontes automaticamente.

Em 2017 só configurei três animes, o primeiro sendo Hikaru no Go: eu tinha encontrado raws e legendas (era uma tradução JA -> ZN -> EN (╯°□°）╯︵ ┻━┻), mas não os dois juntos, então implementei essa funcionalidade por causa dele. Com os outros animes aconteceram situações similares.

Em 2018 melhorei ela e, dessa forma, usei ela com mais animes e esse número subiu para 24. Já em 2019 notei que eu poderia usar ela para assistir animes com legendas da CR e conseguir legendas atualizadas e revisadas ao longo de anos, e ainda ter um vídeo com boa qualidade, e assim esse número decolou para **108 animes** !

Hoje essa é a principal forma que assisto animes pois combina flexibilidade - posso escolher entre [uma variedade enorme de fontes](https://qgustavor.tk/problemas-com-masamune/) e colocar a tradução que eu quiser por cima - e praticidade - a configuração é fácil e simples. Posso colocar quantas legendas eu quiser, posso [fazer testes absurdos](https://qgustavor.tk/google-translate/), habilitar [notas de tradução](https://qgustavor.tk/notas-de-traducao/) e ainda colocar legendas de fansubs - quase sempre gringas - que geralmente uso para acompanhar as músicas.

Na próxima postagem vou falar quais são os problemas desse meu sistema, quais alternativas eu poderia usar, quais são os problemas delas e, finalmente, o que eu espero para o futuro. Nos vemos semana que vem.