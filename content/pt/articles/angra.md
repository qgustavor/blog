---
title: Angr(y)a-I
date: '2019-11-20'
excerpt: Na última postagem falei sobre uma charada, hoje é sobre um jogo. Esses dias
  estava olhando o archive.org e vi que publicaram vários jogos...
---



Na última postagem falei sobre uma charada, hoje é sobre um jogo. Esses dias estava olhando o archive.org e vi que publicaram vários jogos antigos da época do MS-DOS. Fiquei curioso porque há vários jogos da minha época de criança que nunca terminei, então resolvi procurar por eles.

Um desses jogos é um point-and-click que não me lembro o nome, Andrômeda ou Astromenda, algo assim. Você tinha que resolver um mistério em um laboratório. No jogo vinha um manual com as datas de todos os eclipses lunares e solares até por volta do ano 2000, eu achava isso muito interessante. Não consegui achar esse jogo.

Mas outro jogo que me interessava era o Angra-I, e esse eu consegui achar. Quando eu joguei ele pela primeira vez eu o encontrei em um CD desses que se vendiam em bancas de revistas com centenas de jogos, a maioria demonstrações baixadas da internet. Naquela época internet era algo caro, então esses CDs eram a principal forma que eu tinha para conseguir jogos.

Esse jogo ainda está disponível na internet em alguns sites de download, então resolvi baixar. Achei que o jogo fosse completo, só para depois ficar sabendo, olhando no site do desenvolvedor pelo archive.org, que esse jogo é apenas uma demonstração da ferramenta de criação de jogos que ele estava desenvolvendo.

Fiquei decepcionado quando descobri isso, porque quando cheguei nesse ponto eu já tinha tentado de tudo para completar a primeira "fase" do jogo. Por partes:

![](https://i.imgur.com/Eu9ehpJ.png)

A tela inicial não fala nada sobre o jogo ser uma demonstração. Vi a demonstração, correspondência (uma continuação da introdução) e as instruções e resolvi jogar.

![](https://i.imgur.com/zNlqEXI.png)

Dá para coletar esses quatro itens: a câmera só serve para tirar prints que podem ser vistos em um terminal, o óculos só deixa a tela escura, o cartão só serve para te prender no elevador se você esquecer ele no terminal e o bilhete não serve para nada. Nessa mesa tem esse texto escrito, que também não serve para nada.

![](https://i.imgur.com/NKGCayg.png)

Nas salas há vários itens que não servem para absolutamente nada: você não pode pegar água no bebedouro, quebrá-lo, removê-lo, é inútil tentar qualquer ação com ele. Não há nada escondido atrás dos quadros ou nas placas.

![](https://i.imgur.com/jFLqq9Z.png)

Na sala do terminal há uma grade de ventilação que, supostamente, deve ser aberta com uma chave-de-fenda. Olhando os arquivos do jogo e analisando ele com o Cheat Engine e o Ghidra vi que programaram no jogo um evento onde essa grade é aberta, além da sala atrás dela, mas aparentemente não programaram a chave-de-fenda.

Não descobri como decodificar corretamente o formato de imagem que usaram: ele se parece com RGB24 mas as cores ficam erradas. A sala atrás da grade é parecida com isso:

![](https://i.imgur.com/9fZHfUz.png)

O terminal é outra perda de tempo: ele é lento e os comandos dele não fazem nada. O comando “fichas” permite pesquisar os dados de um usuário “carlos”. Há um detalhe: não há absolutamente nada no jogo que permitia descobrir o nome desse usuário, olhei tudo e não encontrei nada, só descobri o nome dele usando o Cheat Engine.

![](https://i.imgur.com/nDFhOxY.png)

Há um comando para atualizar dados cadastrais, mas não gaste um segundo com isso, só programaram uma resposta: “senha incorreta”. O comando de “fotos” só mostra os prints tirados com a câmera, que no começo do jogo já começa vazia então não serve como dica. O comando “usina” só mostra um mapa do nível (outros mapas não aparecem no código). O comando “contas”, da mesma forma, não serve para absolutamente nada.

Uma senha “maromba” no código, o “fênix” na mesa, as placas dos carros, o “azarão” nas fichas, tudo isso foram “dicas” que não servem para nada, só me fizeram perder tempo.

**Em resumo** esse é um jogo perfeito para demonstrar como você **não** deve fazer um jogo desse gênero:

* Apesar de ser uma versão de demonstração, não há nada no jogo que diz que é e não é possível completar uma fase sequer do jogo completo na demonstração.
* O jogo contém vários elementos inúteis que só fazem o jogador perder tempo procurando dicas onde não há.
* Uma parte básica do jogo é que ele deveria parar de funcionar quando o relógio atingir 21:40, que é o horário programado para o reator da usina detonar: o jogo continua mesmo assim.
* Os controles do jogo são complicados, usando excessivamente comandos de textos que precisam ser digitados, ainda por cima, com acentuação correta.

Foi triste saber que não há como ganhar esse jogo, mas não é a primeira vez que um jogo da minha época de infância me decepcionou:

“Quem Pode Salvar Júlia” é uma mistura de um point-and-click - onde você tem que sair procurando instrumentos escondidos em vários níveis - e um jogo de ritmo - onde você tem que tocar esses instrumentos e conseguir pontos por isso.

No YouTube há alguns vídeos que mostram como ganhar a parte de point-and-click do jogo: é a parte mais fácil do jogo. A parte de ritmo, por outro lado, é praticamente impossível: o jogo é antigo, então ele foi criado para computadores lentos, em computadores rápidos os níveis ficam rápidos demais o que os deixa quase impossíveis de serem completados.

Mesmo assim aceitei o desafio e consegui terminar o jogo 100% ― [https://youtu.be/gf5ezc9TDn8?t=241](https://youtu.be/gf5ezc9TDn8?t=241) ― só para então descobrir que **não há nenhum final especial**  nessa situação. Pelo jeito o jogo não deu certo, nenhuma sequência dele foi lançada, então não deu tempo para prepararem um final especial.

Foi ― muito ― decepcionante. Pensei que era só um problema na versão em português mas na em inglês também acontecia a mesma coisa. Acabei postando o vídeo no YouTube de qualquer jeito, sem o áudio , com pressa para poder esquecer esse jogo.