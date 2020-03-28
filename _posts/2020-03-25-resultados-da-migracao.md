---
layout: post
tags: []
title: "Resultados da migração"
date: 2020-03-25 03:51:39 +0000
excerpt: "Já faz um tempo que postei que eu precisava migrar o meu computador para o Windows 10. [Foi em novembro.](https://qgustavor.tk/migracao/)..."
---

Já faz um tempo que postei que eu precisava migrar o meu computador para o Windows 10. [Foi em novembro.](https://qgustavor.tk/migracao/) Eis os resultados da migração.

O primeiro problema que eu falei foi me acostumar com o menu iniciar. Eu ainda tenho mania de procurar aplicativos na parte superior esquerda da tela, mas já estou acostumando. Muita gente reclama das atualizações mas eu gosto delas, o seguro morreu de velho.

Migrar os scripts foi fácil: mantive as letras das unidades, então só precisei fazer ajustes simples causados pela atualização do Node, Apache e outros aplicativos, e migrar o banco de dados do MariaDB, o que é absurdamente fácil.

Por outro lado o meu plano de largar o Deluge não deu muito certo. Eu tinha planejado usar o qBitTorrent: instalei, configurei ele, integrei ele aos meus scripts usando a API dele (que é boa) e achei que estava tudo dando certo.

Passaram-se alguns dias e começaram aparecer problemas nos scripts: diferente do Deluge o qBitTorrent foi criado achando que arquivos marcados para não ser baixados devem ser removidos da pasta (ainda que já tenham sido baixados, totalmente ou parcialmente). [Esse problema já foi reportado](https://github.com/qbittorrent/qBittorrent/issues/9960), mas já se passaram dois anos e ele não foi resolvido. Decidi escolher outro cliente.

No momento estou usando o Transmission: a API dele não é tão simples quanto a do qBitTorrent, mas é mais simples que a do Deluge. Além disso ele tem menos bugs que o qBitTorrent e é mais estável que o Deluge.

Ele não é perfeito: nos últimos dias ele está travando muito, ainda que ele esteja instalado no modo daemon. Também não sou perfeito: ao invés de investigar a causa do problema só estou reiniciando ele. Tenho que largar de preguiça e descobrir o que está acontecendo. Tenho uma suspeita que seja um dos meus scripts interferindo nele, já que ele trava logo quando os scripts estão configurando os torrents, mas não sei bem o que está causando o problema.

**Atualização:** achei o problema. Um bug no meu script estava colocando índices duplicados no `priority-normal` do `torrent-set`. Assim que resolvi esse bug o Transmission parou de dar problemas. Pensando bem até agora não reportei isso para os desenvolvedores desse cliente...

Aproveitei e arrumei o meu script de organização de animes que estão indo ao ar. Ele não funciona corretamente desde quando a API do MyAnimeList parou de funcionar. Os primeiros animes que configurei nele foram Madoka e Eizouken. Estou gostando de ambos, o pessoal está fazendo *um bom trabalho* !

Implementei melhorias no meu outro script de organização de animes. Agora é possível adicionar notas na timeline e aparece uma nota mostrando qual é o mês (ou ano, se for o mês for janeiro) eu assisti os animes. Olhe essas cores geradas usando um algoritmo estranho e alegre:

![](https://i.imgur.com/vPaYLRS.png)

Até semana que vem!
