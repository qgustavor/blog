---
layout: post
tags: []
title: "Projetos sem fim"
date: 2016-06-14 03:19:02 +0000
excerpt: "Por definição um projeto seria algo que tem um início, um desenvolvimento e um fim. Ultimamente parece que não consigo lidar bem com isso:..."
---

Por definição um projeto seria algo que tem um início, um desenvolvimento e um fim. Ultimamente parece que não consigo lidar bem com isso: vários projetos que começo não parecem que terão um fim. Vou pegar o adorai como exemplo:

No site a versão que aparece é a 0.2.6, só que essa numeração começou assim que eu comecei uma versão baseada em módulos AMD. Acontece que da primeira versão antes de começar essa numeração ainda houveram duas versões! A primeira era assim: duas páginas, uma para a Harpa e outra para a Bíblia, com uma caixa de texto no meio tipo o Google. Era complicado ficar passando de uma página para a outra, então na segunda versão unindo as duas. Eu tinha planejado de chamar ele de "Culto Online", mas eu perdi o domínio que eu tinha registrado (alguém de site de streaming de vídeos de cultos pegou ele). Então, *com muita criatividade,* chamei essa versão de “Harpa e Bíblia”. Ainda tenho um *mockup* que fiz enquanto fazia ele:

![inline image](http://i.imgur.com/QZsPWfi.png)

Eu perdi os arquivos da primeira versão, mas ainda tenho os da segunda versão: eles são de 2013. Essa versão teve essa pesquisa movida para uma barra superior, quando o site perdeu uma página inicial, que foi substituida por Chuvas de Graça. Depois a barra superior virou uma lateral e a página inicial foi recuperada, ainda que só um uma introdução sobre o que é o site. Essa versão foi a primeira que funcionou offline, permitiu baixar conteúdos para serem lidos offline. Era possível abrir duas guias e simular um modo de apresentação, igual acontece com slides. Também tinha música, comentários, histórico e favoritos:

![inline image](https://i.imgur.com/nTdQWkd.png)

A versão que está online é de 2014. Foi criada para organizar melhor o código, separando em módulos. Foi nessa atualização que o site mudou de nome, com o objetivo de ter um nome mais único e ao mesmo tempo fácil de lembrar. Embora o objetivo disso fosse melhorar os resultados do site nos sites de pesquisa não adiantou nada, por causa do conteúdo. É a única versão que conta com sincronização via Firebase (i.e. WebSockets). A última atualização foi esse ano, onde Service Workers foram adicionados e houve a correção de alguns bugs que foram surgindo por causa de alterações nos navegadores assim como serviços que o site dependia e fecharam. Um *screenshot* , para a posteridade:

![inline image](https://i.imgur.com/fNBOm3B.png)

Em 2015 resolvi fazer mais uma versão, dessa vez baseada no React. Meu objetivo nessa versão era criar um sistema que funcionasse com todo o código funcionando no cliente com o mínimo de confiança em qualquer servidor, possibilitando assim o site funcionar em cima de uma estrutura descentralizada e de certa forma resolvendo o grande problema do site: os custos do servidor, já que a Harpa tem 640 hinos e cada versão da Bíblia tem 1189 capítulos, ou seja, é muita coisa para colocar no plano gratuíto de alguma hospedagem. Acontece que por querer algo tão complicado o código ficou enorme e bem bagunçado, então depois de quatro meses desisti.

![inline image](https://i.imgur.com/hVj1Jvm.png?1)

Acontece que no início desse ano o site que está online começou a dar problemas: usávamos o site offline então o o computador que usávamos ficou sem espaço no disco e o Chrome simplesmente apagou tudo. Me vi em um dilema: eu poderia restaurar esses dados sem eliminar o risco de perdê-los, ou pensar em outra solução. Foi nisso que eu peguei a versão do React, eliminei a parte de criptografia que tinha deixado o código complicado e *fiz mais outra versão do site! * Dessa vez ao invés ao invés do aplicativo funcionar como um site e sofrer as limitações de um fiz ele funcionar no Electron, o que elimina o risco dos dados serem apagados automaticamente.

![inline image](http://i.imgur.com/FV96sMw.png)

Então um projeto que começou antes de 2013 até hoje está sendo desenvolvido. Não sei se eu sou péssimo com projetos ou posso considerar que são vários projetos diferentes. Acho que essa segunda opção é ao mesmo tempo válida porém uma desculpa. Acontece que não é só esse site que sofre com esse problema, porém até projetos da área de engenharia que se deixar logo estarão completando um ano desde que começaram e nada de terminar.

*Nota:* com essa postagem quero ver se o script que faz o upload das postagens consegue lidar com as imagens. Eu não testei nenhuma linha dessa parte do código mas espero que dê certo.  
*Edição:* as imagens não funcionaram, algum problema na hora de implementar a API do imgur no código. Além disso imagens  cortadas no Google Docs não aparecem cortadas na postagem.
