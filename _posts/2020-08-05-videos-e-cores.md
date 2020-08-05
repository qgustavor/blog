---
layout: post
tags: []
title: "Vídeos e cores"
date: 2020-08-05 03:06:24 +0000
excerpt: "Processar e distribuir vídeos não é algo fácil: existem dezenas de codecs, um monte de configurações..."
image: https://i.imgur.com/4Lcd0Cb.jpg
---

Processar e distribuir vídeos não é algo fácil: existem dezenas de codecs, um monte de configurações e problemas de compatibilidade. Hoje eu estava comparando umas screenshots e notei que os players da Crunchyroll tem vários problemas com cores. *Claro,* isso não significa que isso seja um problema exclusivo da CR, é extremamente comum.

Mas voltando ao assunto eu estava comparando uma imagem de Tower of God que tirei usando o player para Android e outra que tirei no Firefox e notei que as cores mudavam muito. Resolvi pesquisar mais sobre o assunto e para ter uma referência melhor procurei uma imagem que tinha várias cores e escolhi uma do encerramento de Tatami-chan.

Eis a forma que a cena é renderizada no Firefox, Chrome e Android respectivamente:

![](https://i.imgur.com/MiQg8oL.png)

![](https://i.imgur.com/fdftymT.png)

![](https://i.imgur.com/ejmbYDX.png)

Se você não consegue ver nenhuma diferença entre as imagens, tudo bem, isso é normal. Para ficar mais fácil de notar as diferenças abra cada uma das imagens em uma guia separada e troque uma com a outra, fica mais fácil ver assim.

A diferença mais fácil de ser notada é a cor das cadeiras: na terceira imagem, do Android, o verde é bem mais claro que nas duas imagens. É quase como se no Android elas fossem radioativas de tão verde que fica. A outra diferença é no fundo ao lado das cadeiras: na segunda imagem, do Chrome, ele é mais escuro.

O que pode estar causando essas mudanças? Vamos assumir que o processo de encode é igual para os três players (porque é mais fácil usar um único processo, não é?) então as diferenças devem ocorrer nos players.

Provavelmente essas diferenças devem ocorrer porque cada player usa uma fórmula diferença para converter o formato de cores usado no vídeo, [YCbCr](https://en.wikipedia.org/wiki/YCbCr), para o formato usado pelos monitores, RGB. [Parece ridículo](https://xkcd.com/927/), mas existem pelo menos quatro padrões que definem fórmulas de conversão de cores! Eles podem resolver esse problema? Não sei. Sei que há um bug no Firefox que faz com o que a fórmula fique errada caso a aceleração de hardware estiver ligada ou não.

Talvez esse problema varie também com o hardware. Claro, se usarem um player que não usa aceleração de hardware esse problema fica mais fácil de ser resolvido, por outro lado é uma péssima solução: eu não gastei horas fazendo um script que converte vídeos para um formato que pode ser reproduzido com aceleração de hardware por nada! Lembram? Era poder assistir vídeos sem o player travar a cada dez segundos sem precisar de trocar meu celular velho.

O que eu acho mais estranho dessa situação é que o formato de legendas que a CR usa, que é um dos melhores formatos que existe, tem uma propriedade para lidar com essa situação, "YCbCr Matrix", mas como a CR não usa essa propriedade ele tenta usar a fórmula mais antiga e isso causa problemas com as cores das legendas ficarem diferentes das cores da imagem. Na verdade até mesmo essa propriedade é ruim, pois é uma gambiarra, o ideal seria que as cores nas legendas fossem definidas usando o mesmo formato usado nos vídeos.

No fim das contas isso é uma bagunça. Claro, a CR poderia melhorar o encode deles, sim, mas como isso é uma bagunça é difícil para profissionais encontrarem um equilíbrio entre compatibilidade, performance e qualidade, pior ainda é para os que não são profissionais, que geralmente preferem sacrificar compatibilidade e performance por qualidade. Claro, vários tentam fazer isso pensando “eles são profissionais e não conseguem fazer direito: eu consigo fazer melhor”, cometem erros absurdos e acabam piorando tudo, principalmente a qualidade.

Se alguém tentar criar mais um padrão para resolver isso vai acabar apenas repetindo a história. Talvez a melhor forma de evitar esses problemas é juntar os grandes produtores de vídeos e trabalhar todo mundo junto, mas quem conseguiria fazer isso? É um absurdo! Se não conseguem chegar em um acordo sobre um formato de vídeo pior ainda um formato de legendas!

Até semana que vem!