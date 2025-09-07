---
title: Princípios de organização
date: '2019-10-02'
excerpt: 'Eu organizo os animes que assistindo usando algo parecido com um diagrama
  de Gantt:  ![](https://i.imgur.com/r1r92Uy.png)  Esse é o...'
---



Eu organizo os animes que assistindo usando algo parecido com um diagrama de Gantt:

![](https://i.imgur.com/r1r92Uy.png)

Esse é o resultado de várias interações de tentativas de organização:

* Usando arquivos .txt (~2014)
* Usando planilhas offline (~2014)
* Usando planilhas no Google com automatização (2014-2016)
* Usando um arquivo .txt com automatização (2016-2017)
* Usando uma sequência de sequências cíclicas (2017)
![](https://i.imgur.com/JjQWTyg.png)
* Usando diagramas de Gantt (2017~hoje)

A primeira interação do diagrama de Gantt é muito similar a um diagrama normal, onde em cada linha há uma tarefa apenas:

![](https://i.imgur.com/Za0bANH.png)

Depois de alguns anos isso estava ficando bagunçado, então reescrevi o código para permitir mais de uma tarefa (nesse caso, um anime) em uma única linha:

![](https://i.imgur.com/kFRQzNM.png)

Demorei um tempo até organizar esse diagrama. Situações como essa, onde a organização mais parece uma bagunça, eram comuns:

![](https://i.imgur.com/i3gcO92.png)

Tentei organizar posicionando os animes em filas e alinhando a numeração dos episódios:

![](https://i.imgur.com/Hp4Hr85.png)

Depois de alguns meses notei um problema: assistir episódios alinhados é cansativo. Como termino e começo quatro animes de uma vez, é muita informação nova ao mesmo tempo. Para evitar esse problema tentei desalinhar os episódios e adicionar OVAs e filmes em pontos monótonos:

![](https://i.imgur.com/EJdIgFW.png)

Outra mudança que eu fiz foi tentar criar padrões para cada fila: as mais acima são reservadas para filmes e curtas e as últimas para animes longos.

Um problema é que isso só funciona comigo: quem não sabe como os scripts funcionam teria muita dificuldade de instalar e usar eles.

Queria fazer uma versão mais simples - do ponto de vista de usabilidade - e que fosse mais ampla. Poderia ser um programa ou até mesmo um plugin do Taiga, talvez. Seria mais o menos assim:

1. Baixe o programa ou plugin.
2. Faça login em algum site como o AniList ou AniDB.
3. A lista de planejamento pode ser organizada como um diagrama de Gantt.
4. O diagrama pode ser exportado e publicado como HTML, PNG ou o que for possível.
5. Conforme você vai assistindo ele avisa qual é o próximo episódio que você agendou.
6. Seria possível integrar o sistema com players (online ou offline). Ele pode gerar uma playlist automaticamente.
7. Seria possível incluir animes que estão indo ao ar ainda que a quantidade de episódios deles não tenha sido divulgada.

Só há um problema: não tenho tempo para fazer isso.