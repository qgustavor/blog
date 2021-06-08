---
tags: []
title: "Frameworks"
date: 2019-09-25 03:51:37 +0000
excerpt: "Quem trabalha com front end tem que trabalhar com frameworks de JavaScript. Uma piada diz que todo ano há uma framework nova saindo… o que,..."
---

Quem trabalha com front end tem que trabalhar com frameworks de JavaScript. Uma piada diz que todo ano há uma framework nova saindo… o que, apesar de ser exagerado, faz sentido.

Já trabalhei um pouco com Angular, mas não deu muito certo: nunca gostei muito da forma que as coisas funcionam nele. Os dois únicos projetos usando ele no meu computador datam de 2016: resolvi testar ele, mas não deu certo.

O React é uma das frameworks que mais usei, já que a versão atual do adorai foi escrita usando ele. O adorai, claro, é um projeto enorme e, porque fui desorganizado, complicado. Perdi o código-fonte dele e hoje tenho que dar manutenção no código dele editando o código compilado pelo Webpack. Mesmo assim consegui tirar o React do meio daquela bagunça e coloquei o Inferno naquele lugar.

Isso mesmo, coloquei o Inferno em um site para leitura e apresentação da Bíblia e da Harpa. Isso é o de menos: como o aplicativo permite editar qualquer parte do site quem usa essa função do site pode estar sujeito a seguinte maldição:

E, se alguma pessoa tirar alguma coisa das palavras proféticas deste livro, Deus tirará dela as bênçãos descritas neste livro, isto é, a sua parte da fruta da árvore da vida e também a sua parte da Cidade Santa.― Apocalipse 22:19

(O site permite edição principalmente porque o site está repleto de erros de OCR na harpa. Já faz pelo menos cinco anos que estou desenvolvendo isso, hoje noto que seria mais fácil se eu tivesse revisado cada hino manualmente.)

Por causa dessa bagunça pensei em reescrever o site usando a minha framework favorita para projetos onde estou com pressa para ter resultados: Vue.

O Vue é interessante porque, diferente do React, achei ele mais organizado: o sistema de componentes dele permite organizar o o conteúdo, o código e o estilo de cada componente em um arquivo separado. Além disso há várias ferramentas que aceleram o desenvolvimento, principalmente componentes prontos, como o Vuetify, que fornece vários componentes em estilo Material Design.

Eu até tentei implementar o site no Vue, mas não deu certo. Notei que eu preciso parar, pensar e me organizar. Nisso aparece uma outra opção: Mithril.

O Mithril, embora seja mais velho que o Vue, não é popular, mas tem um diferencial: é extremamente simples. Hoje ele é a minha opção para projetos onde a minha prioridade é organização e eficiência.

Usei ele para desenvolver alguns sites e ferramentas ao longo do último ano e estou gostando muito dele. Uma das ferramentas que eu desenvolvi com ele foi a interface gráfica de linter para legendas: o código ficou simples, bem organizado e eficiente. Diferente do Vue não há uma função nativa dele para lidar com a estilização, por outro lado não senti falta disso.

Em uma outra postagem eu falo desse linter de legendas: é uma ideia interessante que eu tive e, embora os resultados não foram bem o que eu esperava, acho que posso fazer ajustes e melhorá-lo no futuro. Até a próxima.