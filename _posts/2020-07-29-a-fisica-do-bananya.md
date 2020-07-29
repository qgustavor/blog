---
layout: post
tags: []
title: "A física do Bananya"
date: 2020-07-29 09:36:32 +0000
excerpt: "Já escrevi uma vez sobre Bananya aqui, mas hoje o meu foco é outro: no momento estou terminando de..."
image: https://i.imgur.com/1aUG1xm.png
---

Já escrevi uma vez sobre Bananya aqui, mas hoje o meu foco é outro: no momento estou terminando de ver a segunda temporada e fiquei intrigado pensando como que os bananyas se movimentam.

Para começar vamos tentar entender o que é um bananya: de forma bem simples eles são como gatos dentro de bananas. Eles não têm patas traseiras (se têm, elas ficam dentro da banana), por isso eles se movimentam pulando.

Um modelo simplificado de um bananya:

![](https://i.imgur.com/O9QINlz.png)

O cubóide de baixo representa o corpo imóvel e o cubóide de cima representa a cabeça, que é móvel. As duas partes são ligadas por molas que representam o pescoço do bananya. Finalmente as patas dianteiras são ignoradas já que a massa delas é pequena demais.

Um problema claro desse modelo é que a ponta do bananya é pequena demais, o que significa que o bananya precisa sempre ficar se equilibrando, o que deve ser horrível, e esse detalhe não é representado nesse modelo. Por outro lado essa foi uma decisão tomada para simplificar a análise.

Tentei fazer uma demonstração simples do movimento do bananya usando o Matter.js considerando que o bananya só pode se mover movimentando o pescoço (isso é, apenas alterando o comportamento das molas. No fim das contas não consegui fazer ele sair do lugar!

Será que o movimento dos bananyas é possível na vida real? Não, claro que não. Por outro lado é possível conseguir alguma coisa similar dentro das regras acima? Talvez.

Se eu usar um algoritmo evolucionário será que eu consigo fazer esse modelo funcionar? Se você sabe a resposta poste aqui nos comentários! Se não sabe quem sabe um dia eu resolva pegar esse projeto e terminar um dia. Até semana que vem!