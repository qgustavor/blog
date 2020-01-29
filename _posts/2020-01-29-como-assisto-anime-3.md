---
layout: post
tags: []
title: "Como assisto anime - Parte 3"
date: 2020-01-29 03:51:37 +0000
excerpt: "Já apresentei os pontos fortes do sistema que organiza animes para mim, permite que eu tenha flexibilidade na escolha dos vídeos e legendas..."
---

Já apresentei os pontos fortes do sistema que organiza animes para mim, permite que eu tenha flexibilidade na escolha dos vídeos e legendas e ainda é muito prático automatizando boa parte das tarefas chatas. Mas há alguns problemas:

O primeiro problema que surge é o timing: traduções diferentes ajustam os tempos das suas legendas conforme o vídeo que elas escolhem e geralmente os tempos variam, correto?

Nem tanto. Na maioria dos casos os ajustes são simples e podem ser corrigidos diretamente no player, uma função que praticamente todo player suporta. Alguns exemplos: em Haiyore, Kiznaiver, Oresuki e Zero no Tsukaima consigo assistir sem precisar fazer nenhum ajuste no tempo; em Gintama o tempo das legendas, na maioria dos episódios, só precisa ser ajustado em 10 segundos após o fim da música de abertura; Karakai precisa de um ajuste de 11 segundos; Wakaba Girl e Gabriel Dropout precisam de um ajuste de um segundo.

Os casos mais complexos que já encontrei foram WWW.Working!!, que precisa de um ajuste em uma cena adicional no meio de cada episódio que varia com o tamanho dessa cena (com prática fica fácil arrumar) e Net-juu no Susume, que tem várias cenas adicionais em cada episódio (como mostrado [neste gráfico](https://i.imgur.com/5Mfie48.png)).

O segundo problema é como os scripts lidam com animes indo ao ar. É complicado: na verdade eu cheguei a fazer um segundo script que lida apenas com eles, mas ele parou de funcionar depois que a API do MyAnimeList parou de funcionar. O que geralmente faço é esperar alguns episódios saírem, configurar eles no sistema e repetir esse processo até terminar.

**Mas** o maior problema é que esses scripts funcionam bem apenas comigo, porque eu quem os fiz. Embora eles sejam práticos e eu considere que eles são fáceis de ser configurados, no fim, eles precisam de muitos ajustes para se tornar uma ferramenta fácil para qualquer um usar. Imagine o seguinte: se muita gente tem dificuldade para configurar os catálogos do Tachiyomi (que é só para mangá) imagina se eu fosse arrumar esses scripts para ter um catálogo de vídeos e outro de legendas?

O programa mais parecido com isso seria o [FlexGet](https://flexget.com/), mas ele tem vários problemas: a configuração dele usa YAML e não uma GUI que nem o meu script; e o suporte à fontes de anime ainda precisa ser melhorado. Como esse é um projeto aberto estes pontos até podem ser implementados com plugins.

Por outro lado, como ele não tem nenhuma integração com players, os benefícios dele são bem reduzidos. Se houvesse ele poderia fazer gerenciamento automático de downloads por demanda. Um exemplo: não há necessidade de baixar todos os 150 episódios de uma série (e, como consequência, acabar com o espaço do HD) então, com um gerenciamento por demanda, ele poderia baixar na ordem que os episódios forem baixados e estimar quantos episódios precisam ser adiantados usando informações dos players e dos downloads anteriores.

*Quais seriam as alternativas?*

Como escrevi há três postagens eu considero que trackers privados são ultrapassados e com isso quero dizer que eles, para mim, não são uma boa alternativa. Por quê? Pois embora os grupos que participem deles tentem facilitar para quem assiste, gerando praticidade, não há flexibilidade.

É extremamente raro que um torrent seja removido para garantir que ele tenha seeders e não morra. Mesmo em trackers com boa reputação há vários torrents repletos de erros que não são removidos porque os grupos são completamente inflexíveis. Esses são uma prova da falta de capacidade desses grupos. São uma coletânea de erros e falhas e, por mais absurdo que seja, eles não querem se livrar delas.

Streaming então seria uma alternativa? É melhor, mas ainda há vários problemas. O principal benefício: diferente de trackers, onde os arquivos são imutáveis, e várias outras formas de distribuição de vídeos (como discos e sites de hospedagem) em streamings corrigir uma legenda é simples: só corrigir e fazer upload.

No caso de streamings ilegais erros nunca são corrigidos e a qualidade das legendas e do vídeo é horrível, mas no caso de streamings legais a situação é melhor, muito melhor: algumas vezes eles atualizam os vídeos com versões corrigidas ("BD" como a CR chama, “home-video” como a HIDIVE chame). O problema é que essa é uma situação tão rara que deve ocorrer em menos de 1% dos animes da CR.

*O que eu espero para o futuro então?*

1. Que ocorra um milagre e a HIDIVE se recupere: a CR precisa de alguma concorrência boa (porque parece que os outros concorrentes dela não se esforçam).
2. Que a CR consiga mais clientes: sem dinheiro é difícil melhorar e não dá para dizer que é a situação da CR é fácil, só olhar o que o mercado latino-americano fez com a HIDIVE.
3. Que a CR melhore o player dela para funcionar no meu celular, com legendas de qualidade e, principalmente, sem precisar de internet. Até onde eu sei a Netflix suporta esta função.
4. Que a CR melhore a qualidade dos vídeos (lancem BDs, principalmente de Rewrite porque a versão que está no site no momento é horrível) e das legendas (traduzam as músicas, se possível com a mesma qualidade de Ahiru no Sora).

Mas como ficam os grupos então? Alguns grupos acham que o único trabalho deles é traduzir, revisar e colocar karaokê e que, se a CR fazer isso, eles não terão o que fazer. Bem, se algum grupo realmente acha que tudo que eles podem fazer é apenas isso então podem desistir, melhor que eles deixem essa tarefa para a CR mesmo. 

Mas não acredito que não haverá trabalho sobrando para os grupos: não esperem de de um dia para o outro a CR vai começar a traduzir todos os animes com a mesma qualidade de Ahiru no Sora ou que vão parar de cometer erros que nem ocorreu em Fate/Babylonia ou que vão lançar o BD de todos os animes que nem fizeram com Toradora.

É bom que ainda existam grupos que focam em qualidade para criar uma cultura de qualidade. Além disso, pelo o que eu sei, diferente do que muita gente pensa, na verdade a Crunchyroll gosta muito desses grupos. É óbvio! Quem participa deles é uma mão de obra experiente, preparada e qualificada para trabalhar no campo profissional. Não é atoa que a CR alemã é tão boa: as fansubs de lá são boas. Também não é atoa que a CR brasileira não seja tão boa... entende, né?

Como eu espero que ainda existam grupos traduzindo seria ótimo se estes **também** melhorassem a qualidade: larguem o medo de lançar V2, V3, V4, V5 - a HIDIVE lança V12 e ninguém vê. Seu grupo tem streaming? Que ótimo! Faça que nem a CR e coloque a legenda separada para você não passar a vergonha de falar que “corrigir a legenda é difícil”. Seu grupo tem torrent? Está com medo de perder seeders? Lance patches. Use [o meu patcher](https://github.com/qgustavor/patcher): ele é fácil de usar e não usa nenhum .bat ou .exe que podem causar medo em quem já pegou vírus alguma vez na vida.

Já eu continuarei listando os erros da CR no site e cobrando correções. Espero que a CR melhore e se torne o padrão de qualidade para todos os que assistem anime. Espero que todos melhorem no futuro e assim esse meio cresça cada vez mais e tenhamos cada mais animes para assistir.