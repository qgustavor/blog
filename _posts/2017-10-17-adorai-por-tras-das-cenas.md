---
layout: post
tags: []
title: "adorai por trás das cenas"
date: 2017-10-17 02:51:37 +0000
redirect_from:
  - /adorai-por-trás-das-cenas/
excerpt: "O adorai é um dos projetos que estou desenvolvendo por mais tempo: a versão que está online em produção já dei como completa e no momento..."
---

O adorai é um dos projetos que estou desenvolvendo por mais tempo: a versão que está online em produção já dei como completa e no momento estou só dando manutenção nela, enquanto isso já fiz meia dúzia de outras versões e mesmo assim aquela acaba sendo melhor. Por causa disso vou escrever um pouco sobre ela.

Tudo começou, como já escrevi em outra postagem, com um projeto chamado "Harpa e Bíblia". Pulando um pouco a história eu estava tendo problemas com a pesquisa e resolvi usar a da Google. Porém do jeito que estava não daria muito certo, eles não estavam indexando o site, então resolvi mudar o nome do projeto e investigar no que eu sabia de “SEO”.

Claro, o domínio não ajuda, como ele é de graça é difícil conseguir “SEO” com ele, então tive que investir em outros pontos. Foi nisso que resolvi fazer de tudo para deixar o site o mais rápido o que eu conseguisse fazer. Para isso eu usei algumas técnicas:

* O site inteiro é estático: não tem nenhum PHP ou algo do tipo no servidor.
* Todas as páginas são minificadas e até o </p> foi removido.
* O site foi feito para funcionar mesmo se o JavaScript não carregar - aliás - pelo menos a funcionalidade principal dele.
* Na página inicial há um estilo no próprio HTML para fazer ela carregar sem precisar de carregar outros arquivos.
* Nas outras páginas primeiro um CSS pequeno é carregado e depois o JavaScript carrega os outros estilos;
* O número dos versículos e estrofes não ficam em nenhum elemento do HTML: ele é adicionado via CSS;
* O código é organizado em módulos para que só sejam carregadas as partes necessárias do site conforme cada situação;
* Eu mesmo criei o loader utilizado para os módulos com base no require.js, porém gastando menos de 2KB.
* O código do site foi minificado usando o Closure Compiler no modo avançado.

Ainda por cima usei sitemaps, HTTPS, servidores *supostamente* brasileiros, tudo para tentar ajudar a ficar mais rápido. Por outro lado o site usa jQuery, que é bem pesado, mas usa até mais do que está documentado.

Estou tentando fazer uma versão nova que não use jQuery, já tentei React, Inferno, Vue, enfim, um monte de coisas, e até agora o site que fiz com ele continua de pé. Tudo bem que o servidor não está aguentando o tranco, mas isso é outra questão...

Ah, estou planejando postar sobre anime na semana que vem. Espero que tudo dê certo...