---
tags: []
title: "Primeiro de abril na UniOtaku"
date: 2021-04-02 03:51:38 +0000
excerpt: "Geralmente nesta data eu acabo fazendo alguma coisa, então nesse ano não seria diferente!  Ano passado foi o sistema de propagandas,..."
---

Geralmente nesta data eu acabo fazendo alguma coisa, então nesse ano não seria diferente!

Ano passado foi o sistema de propagandas, copiando o MangaDex que fez exatamente a mesma coisa: implementou um sistema de propagandas como uma piada e um tempo depois oficializou ele[^1]. Dessa vez resolvi copiar uma ideia pronta de novo, [um meme de pelo menos quatro anos atrás](https://imgur.com/y2ALcZw): um "captcha" de anime.

Não é o tema mais engraçado, mas é melhor que as outras ideias que eu tinha pensado. Considerando o tema do meme, “traps”, resolvi colocar três perguntas sobre assuntos questionáveis:

* **O que o pessoal considera ser “anime”?** Um terço das opções eram animes, um terço eram animações ocidentais, inspiradas por animes, e o outro terço eram desenhos que não lembram animes.
* **Quais personagens o pessoal lembra de ter visto em animes?** Um terço das opções eram personagens de animes, um terço eram personagens que apareceram somente em mangás, e o outro terço era mais diverso, como o Cory (já que dizem que Cory in the House é um anime), personagens de jogos, personagens de cartoons e a Gawr Gura (já que pelo o que fiquei sabendo ela não apareceu ainda em Holo no Graffiti);
* **Quais traps o pessoal reconhece?** Essa pergunta foi só para manter o espírito do meme original. Um terço das respostas eram traps, um terço eram personagens andrógenos ou com gênero desconhecido ou não-binário, e o outro terço eram as waifus mais populares.

As imagens foram classificadas de acordo com dados do Kitsu - ele lista e classifica animes e animações ocidentais inspiradas por animes, MyAnimeList - para determinar se um personagem apareceu em um anime ou apenas em um mangá - e o AniDB - que tem uma função de classificação de waifus e uma categoria para [traps](https://anidb.net/tag/618/chartb)[^2].

Como é primeiro de abril, [dessa vez](https://qgustavor.tk/captcha/) não fiz um captcha real: *não há nenhuma verificação se acertou ou não* (só verifica se escolheu pelo menos uma imagem) e mesmo se houvesse é trivial escrever um bot que consegue responder essas perguntas.

Por outro lado, **e essa é a parte divertida** (para mim, pelo menos), o código envia as respostas para um servidor, então aqui está um resumo de como o pessoal votou:

![](https://i.imgur.com/1lyz77c.png)

![](https://i.imgur.com/8dULa2x.png)

## Conclusão

O pessoal conhece muitos animes e personagens de anime,   mas a maioria caiu na armadilha de achar que o personagem de um mangá é um personagem de um anime. A Yotsuba, marcada 66% das vezes como personagem de anime, apareceu em Nyanbo e nem aparece na lista de personagens do MyAnimeList. Por outro lado, é mais provável que o pessoal tenha se confundido do que tenha visto esse anime.

Muita gente considera que pseudo-animes como RWBY são animes. Seriam os pseudo-animes mais aceitos do que se parece? Talvez não: mais pessoas preferiam marcar que Os Simpsons é anime do que Hora de Aventura. Mesmo sendo primeiro de abril, o Cory só foi marcado 7% das vezes. Será que o meme dele está definitivamente morto?

Eu poderia ter feito algumas melhorias, por exemplo, ao invés de pedir para selecionar traps eu poderia ter colocado para selecionar garotas, assim eu poderia colocar o dobro de traps! Poderia ter liberado para não marcar nenhuma imagem como trap e adicionado mais algumas pegadinhas. Por exemplo, eu poderia colocar a Hime da CR nas opções de personagens de anime e muita gente iria achar que não é só porque é a Hime, mas seria uma pegadinha, ela é sim um personagem de anime: apareceu várias vezes em Wooser, em um episódio ela até parece uma gringa que vai para o Japão e fica chamando atenção pois não sabe falar japonês.

O logotipo poderia ter ficado melhor também. Mesmo para um design rápido poderia ter ficado melhor: não dá para colocar ele em nenhum fundo sem dar problema de contraste!

De qualquer forma foi um ótimo experimento. Acabou animando o chat, consegui um monte de informações, foi legal. Fiz tudo em algumas poucas horas usando as ferramentas que estou acostumado: o Mithril para o MVC, o TweetNaCl para a criptografia, o esbuild para gerar os bundles. A única coisa que usei que não tenho muito costume foi JSX, algo que não uso faz vários anos, desde que comecei a trabalhar com o Vue. Se alguém se interessar no porquê de usar criptografia só comentar e farei uma outra postagem explicando alguns pontos técnicos desse experimento.

Enfim, até a próxima!



[^1]:  Na UO você troca pontos de upload por tempo de propaganda, assim uploaders, que geralmente têm muitos pontos, podem divulgar seus trabalhos; no MD parece que não é bem assim.
[^2]:  Aparentemente algumas pessoas confundiram “trap” com “[homossexual](https://anidb.net/tag/2089)”. É apenas a forma que o AniDB categoriza os personagens.