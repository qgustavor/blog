---
tags: []
title: O problema do React
date: 2015-03-14 12:00:30 +0000
redirect_from:
  - /post/113590529830/o-problema-do-react/
  - /post/113590529830/
excerpt: "Muita gente reclama do React, e não reclama pouco, desde os que querem tudo na bandeja, “ele é só o view do MVC”, até os que ignoram o que ele faz, “ele é gigante/pesado/etc”."
---

Muita gente reclama do React, e não reclama pouco, desde os que querem
tudo na bandeja, “ele é só o view do MVC”, até os que ignoram o que ele
faz, “ele é gigante/pesado/etc”.

Eu nem sou aquele que quer tudo na bandeja: quero que ele faça
exatamente o que ele faz, o mínimo possível para organizar o meu
aplicativo. Nem sou aquele que ignora o que ele faz: uma biblioteca com
centenas de submódulos deve fazer algo, não?

E faz, tanto que fui checar [a complexidade do
código](https://docs.google.com/spreadsheets/d/1UtDcrCXGUxXqz8iiFMlRVOez9UGgN93_JIWK_Na5m2U/edit)
(baseado no build do browserify, usando o jscomplexity, módulos
renomeados pela numeração). Das 10 complexas funções do React 8 são de
renderização, uma de debug e a maior é de eventos (dependendo como for
analisado os resultados, claro).

Porém, por isso mesmo, esse é o problema do React: mesmo que ele seja
especializado na view ele ainda faz muito. Por mim eu preferiria uma
biblioteca para os elementos e outra para os eventos. Que existem outras
do tipo existem, mas não que sigam os mesmos princípios ou que tenham a
mesma performance.

Exemplos? O Angular é lento e deixa a lógica a a views bagunçados. O
Mithril é bem simples e rápido, mas tem seus problemas. O Riot segue a
mesma ideia do React, sendo até um pouco mais organizado e menor, porém
simplifica demais, não tendo os mesmos recursos

Por fim, vou tentar simplificar o React, se não der será o Mithril
mesmo.


