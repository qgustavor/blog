---
layout: post
tags: []
title: "Traduzindo textos com qualidade de primeiro mundo"
date: 2021-06-08 03:14:30 +0000
excerpt: "Algumas pessoas podem achar que é normal..."
image: https://res.cloudinary.com/qgustavor/image/upload/v1623122047/srla4xwxhbqc0g3epmmv.png
---

Algumas pessoas podem achar que é normal traduzir textos em animes usando qualquer fonte, principalmente fontes que já vêm instaladas nos sistemas. Alguns usam Comic Sans por acharem que não há uma opção melhor, mas há:

A ideia desta postagem é baseada na tradução da Crunchyroll Alemã de Nagatoro-san: diferente de outras equipes que usaram apenas fontes instaladas no Windows e Office, essa equipe procurou se diferenciar das outras com uma escolha de fontes mais variada:

![](https://res.cloudinary.com/qgustavor/image/upload/v1623122047/srla4xwxhbqc0g3epmmv.png)

Conseguiram usar fontes que o sistema da Crunchyroll não suporta usando um truque simples: converteram os textos para desenhos vetoriais.

**Vamos fazer a mesma coisa!** Para o exemplo desta postagem vamos pegar o texto em 12:19 no primeiro episódio de Koikimo:

![](https://i.imgur.com/4ZZBMar.png)

A imagem da esquerda é a estilização que o tradutor originalmente queria ter usado, a da direita é a correção que foi feita porque a fonte usada não é compatível com o sistema. Como podemos resolver essa situação sem precisar de uma fonte feia como a Comic Sans?

**Passo 1:** copiar a imagem para um editor de imagens que suporta SVG.

![](https://res.cloudinary.com/qgustavor/image/upload/v1623122052/cfytojalavnqrxrhg1di.png)

![](https://i.imgur.com/MzYHEwX.png)

Pode copiar com a legenda para usar a estilização antiga como um guia de posicionamento. Estou usando o Photopea pois dá para acessar de graça sem instalar nenhum programa além de um navegador (funciona usando propagandas e contas premium, que nem a CR). Você pode usar outro editor se quiser, como o Inkscape, o importante é que ele tenha uma opção de salvar um arquivo SVG.

**Passo 2:** faça a estilização no editor de imagens.

![](https://i.imgur.com/ala1PtH.png)

O Photopea suporta uma variedade enorme de fontes, mas para respeitar o tradutor do anime usei a mesma fonte que ele tinha escolhido originalmente.

**Passo 5:** mude a resolução da imagem para a resolução da legenda.

![](https://res.cloudinary.com/qgustavor/image/upload/v1623122056/cfga4lxhw09polgnelyj.png)

A resolução das legendas da Crunchyroll geralmente é 640x360. Isso não é um problema já que as legendas consistem de textos e vetores, então é possível aumentar a resolução sem perder a qualidade.

**Passo 4:** salve o resultado em SVG nas configurações abaixo.

![](https://res.cloudinary.com/qgustavor/image/upload/v1623122057/vudxnxutcrjuo0fpodrj.png)

É importante marcar o "vectorize text" (ou rodar um comando similar em outro editor), senão o texto não vai funcionar corretamente na legenda.

**Passo 5:** converta o SVG para SSA/ASS.

![](https://i.imgur.com/QqW7t0G.png)

Você pode usar o [svg2ass](https://github.com/irrwahn/svg2ass), ou o [site acima](https://qgustavor.github.io/svg2ass-gui/pt-br.html) que é baseado no svg2ass, ou o [svg2ssa](https://github.com/8day/svg2ssa) que tem uma opção de download para Windows, ou o [AI2ASS](https://github.com/TypesettingTools/AI2ASS) que depende do Illustrator.

**Passo 6:** oculte o texto original e cole o resultado no Aegisub.

![](https://res.cloudinary.com/qgustavor/image/upload/v1623122065/hpjaohnl6zxr1bkoqp2n.png)

**Passo 7:** ajuste a origem do texto para 0,0.

![](https://i.imgur.com/G0i8wW7.png)

Só tirar a margem do estilo usado ou usar \pos(0,0) e assim a origem do desenho irá ficar em 0,0. Depois copie o efeito de transição – \fad(488,1) – no texto novo.

**E pronto!** Em poucos minutos você consegue uma legenda compatível com o sistema da Crunchyroll e com uma qualidade de primeiro mundo.

Além disso, como deixei claro acima, só usei essa fonte, Forte, pois foi a que foi escolhida pelo tradutor originalmente. Eu escolheria Caveat Brush ou Mogra, as duas disponíveis no Google Fonts e no Photopea. O importante é que a técnica mostrada acima permite uma liberdade melhor na escolha de fontes, o que eleva muito a qualidade das legendas.