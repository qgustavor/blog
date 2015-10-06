---
layout: post
tags: []
title: "Pesquisa Reversa de Animes"
date: 2015-10-08 12:00:00 -0300
excerpt: "Desde ano passado estou desenvolvendo um projeto onde procuro criar um script especializado em pesquisa reversa de animes."
---

Desde ano passado estou desenvolvendo um projeto onde procuro criar um script especializado em pesquisa reversa de animes. Se formos comparar seria o mesmo que o Google Images ou o TinEye exceto que só animes são indexados nele. Os bancos de dados, tanto MySQL quando SQLite, já acumulam informações de forma e cor de centenas de animes e mais de oito milhares de imagens, pesquisando imagens com performance razoável.

A ideia de fazer uma ferramenta assim originou no clássico jogo de fóruns de anime onde o objetivo é identificar um anime baseado em uma imagem. Como esses jogos permitem usar essas ferramentas (aprendi isso pela forma ruim) por que eu não poderia fazer isso? Houve também outro motivo: uma imagem que encontrei na internet estava legendada como sendo de um determinado anime porém eu nunca me lembrava quando ela aparecia, fiz essa ferramenta para também resolver esse problema.

Como eu escrevo JavaScript praticamente todos os dias desde que saí do fundamental claro que eu escolhi essa linguagem. Li alguns artigos, teses e coisas sobre esse assunto e implementei a pesquisa. Não somente isso: embora partes necessárias para o desenvolvimento dessa ferramenta, como por exemplo para o cálculo da fingerprint (ou hash perceptual, o que preferir) da imagem, já tivessem sido implementadas busquei melhorá-las para o meu objetivo, como adaptando-as para funcionar para vídeos em alta performance.

Praticamente todos os animes que assisti no último ano são indexados por essa ferramenta e ela já me ajudou algumas vezes nesses jogos. Claro que não é um sistema perfeito com um número considerável de falsos positivos (imagens de forma semelhante, como um rosto e uma bola por exemplo) e falsos negativos (como cenas com muita animação), muito menos dá emoção ou graça ao jogo, mas é um desafio quanto a programá-lo e resolver esses problemas que acabo de mostrar (além de me ajudar quando a memória falha).

Estou postando isso na quarta e não na terça (como seria o planejado) por vários motivos (volta as aulas, serviço, etc). Se houver interesse pelo código-fonte da ferramenta é possível que eu o torne público, porém duvido que alguém se interessaria por isso.
