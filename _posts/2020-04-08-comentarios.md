---
layout: post
tags: []
title: "Comentários"
date: 2020-04-08 03:51:40 +0000
excerpt: "Desde quando criei esse blog, no Tumblr até julho de 2017 ele não suportava comentários. Eu não acho que eles sejam muito importantes...."
---

Desde quando criei esse blog, no Tumblr até julho de 2017 ele não suportava comentários. Eu não acho que eles sejam muito importantes. Ficaram me pressionando (na shoutbox) para permitir comentários e ativei o Disqus.

O Disqus é uma das plataformas de comentários mais usadas. Dos sites que eu visito ela só perde para o sistema de comentários nativo do Wordpress, já que ele é um CMS bem popular. O sistema atual do blog é baseado no Staticman, que é parecido com o do Wordpress.

Surgem algumas questões relativas a esses sistemas. Claramente o Disqus é mais popular em plataformas que não suportam comentários nativamente, como o Jekyll e outras, mas por que, em certas ocasiões, certos sites trocam o sistema do Wordpress pelo Disqus e por que eu troquei o Disqus pelo sistema atual?

Ao meu ver a maior diferença entre os dois sistemas é a autenticação: o Disqus oferece apenas uma opção de comentários anônimos, desativada por padrão e bem escondida, e oferece várias opções de login, como e-mail e redes sociais. Isso cria tem alguns benefícios, como redução de spam, mas cria vários problemas, como redução da privacidade dos usuários e promove a censura de certos usuários já que ele permite bloquear contas.

O sistema do Wordpress não usa nenhum tipo de autenticação, o que garante uma certa privacidade e segurança para quem está comentando: o conteúdo que você postar no blog poderá ser editado pelos administradores do site e qualquer um pode postar no seu nome, portanto comentários de blogs não podem ser usados contra alguém.

Imagino que o principal motivo para sites que usam o sistema do Wordpress ou similares migrar para o Disqus é facilitar a censura de conteúdos. Noto isso porque ainda que existam plugins e soluções bem eficientes contra spam (tanto que a quantidade de comentários de spam que eu recebo aqui é praticamente nula) geralmente essas migrações ocorrem após momentos de discussões.

É uma pena.

Por outro lado entendo quem usa porque não encontrou outras opções. Fiz uma pesquisa e, dentre as opções gratuitas, só encontrei o Disqus e Facebook, ambas horríveis pelo ponto de vista da privacidade dos usuários. Havia o Staticman e ele funcionava vem, mas já faz um tempo não está suportando a quantidade de usuários usando ele.

Há a opção de self-host, que o Staticman suporta, mas isso cria uma série de problemas, como ter que administrar mais um servidor ou hospedagem. Se alguém está usando uma plataforma que não suporta comentários (tal como estou usando) é porque tem dificuldades para lidar com esse tipo de situação.

Só que, mesmo com essa dificuldade, preferi escolher essa última opção. Peguei parte do código do Staticman, fiz alguns ajustes e hospedei no Firebase. Até o momento está tudo funcionando sem problemas.

Fiz uma interface de moderação simples:

![](https://i.imgur.com/lpNVuuO.png)

É realmente simples! Ele usa [Sakura.css](https://github.com/oxalorg/sakura) e [Mithril](https://github.com/MithrilJS/mithril.js/): o mínimo de CSS com o mínimo de MVC. Posso ver os avatares, os comentários, editar, responder, há teclas de atalho, é muito bom! Ah, e como ele usa o Gravatar posso usar o meu avatar da Kizuna Ai se eu quiser! Mais um motivo para eu não gostar do Disqus!

Bem, espero que apareça mais comentários por aqui. Geralmente eu gosto de comentar em outros blogs, por outro lado quase nunca olho o site de novo para ver se me responderam: para mim a melhor resposta é quando vejo uma mudança de atitude por parte do pessoal.

Se vocês quiserem saber se foram respondidos posso adicionar uma opção para receberem avisos de respostas por e-mail. Eu ainda tenho que fazer algumas mudanças no sistema mesmo, como implementar suporte à respostas de respostas.

Enfim, até semana que vem!