---
layout: post
tags: []
title: O caso do SDK do MEGA
modified: 2014-10-30 20:04:00 +0000
redirect_from: /post/101359699084/o-caso-do-sdk-do-mega/,/post/101359699084/
excerpt: "Pelo <a href=\"https://xkcd.com/1205/\" title=\"Is It Worth the Time?\">XKCD 1025</a> eu poderia ter gasto no máximo 12~24 horas para resolver um problema que gasto 30~60 segundos para fazer uma vez por dia."
---

O caso do SDK do MEGA
=====================

Pelo [XKCD 1025](https://xkcd.com/1205/ "Is It Worth the Time?") eu
poderia ter gasto no máximo 12\~24 horas para resolver um problema que
gasto 30\~60 segundos para fazer uma vez por dia.

O problema: alguns arquivos que baixo no [MEGA](https://mega.co.nz) vem
com a extensão errada. A solução que eu pensei foi criar um script que
renomeasse esses arquivos antes mesmo de eu baixá-los. Embora essa tenha
sido uma ideia prática e vi que era possível manualmente não pude
implementá-la usando a SDK.

Me pergunto: por que eles lançaram uma SDK em C++ se a maior
implementação deles é em JavaScript? Vai entender.

Então fui procurar no GitHub se alguém desenvolveu uma aplicação CLI ou
uma biblioteca em qualquer língua que eu saiba e descobri um fato sobre
o MEGA: se nem seus desenvolvedores estão trabalhando tanto no
aplicativo muito menos outros estão desenvolvendo algo para ele.

Eu até podia reclamar aqui da redundância do secureboot.js mas isso só
farei isso quando eu implementar um e mostrar por que no meu caso eu
precisaria de fazer validação de arquivos em JavaScript e por que o MEGA
não precisa.

Porém hoje me manterei em reclamar dessa SDK que simplesmente não
consigo trabalhar e das bibliotecas que ora não existem, se existem não
funcionam, se funcionam não copilam na minha máquina.

*TL;DR:* não dá para usar ela.

