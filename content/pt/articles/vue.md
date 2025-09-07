---
title: Vue
date: '2017-01-31'
excerpt: O Vue é mais outra biblioteca para JavaScript que testei. Um dos diferenciais
  dela é ser fácil de usar para quem já usou outra biblioteca...
---



O Vue é mais outra biblioteca para JavaScript que testei. Um dos diferenciais dela é ser fácil de usar para quem já usou outra biblioteca similar, já que ela aceita vários tipos diferentes de *templating* , desde os que a lógica fica em algo parecido com HTML (tipo o Angular) ou a lógica fica sendo JavaScript mesmo (tipo React).

Usei ela em alguns aplicativos que eu fiz: o 2D ou 3D, que irei falar em outra postagem; o rank do chat do tracker que modero, e uma frontend para um sistema de machine learning assistido (que não foi para a frente).

Ah, outro aspecto importante é que é fácil trabalhar com ela sem precisar de instalar alguma ferramenta tipo o Webpack, o (idoso) Browserify ou o Rollup: só pegar um build pronto para ser jogado em um <script> e seguir em frente.

Claro que nem tudo são flores: sendo vários formatos diferentes virar bagunça é fácil, logo se alguém for trabalhar com ele, principalmente se for uma equipe, escolha um formato a ser utilizado logo no início. Recomendo o estilo onde a lógica fica no HTML por que a sintaxe parece ser mais fácil do que aquela onde a lógica fica no JavaScript, uma vez que, ao contrário do React, algumas coisas ficam mais complicadas. Espero que isso tenha sido corrigido.

Só que tem um lado ruim nesse estilo: você tem que aprender os comandos. Não é difícil, principalmente se já usou Angular alguma vez na vida. Alguns comandos são ultra-simples, como v-if e v-for, outros são aprendidos com o tempo. Aliás, foi estudando como funciona esse estilo do Vue que ganhei uma citação no 2ality.com, não que tenha sido muita coisa, mas... ei, fui citado em um grande blog de JavaScript, whoa!

Outra coisa que gostei muito no Vue foi o suporte a transições: no React elas eram muito difíceis de serem feitas, já no Vue é uma função própria da biblioteca! Tudo bem que transições não são feitas para serem exageradas, mas elas tem a sua beleza.

Bem, vou para por aqui, se não exagero demais. Até a próxima.