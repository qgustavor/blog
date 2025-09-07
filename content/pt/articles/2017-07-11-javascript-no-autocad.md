---
tags: []
title: "JavaScript no AutoCAD"
date: 2017-07-11 03:51:39 +0000
excerpt: "Fiquei sabendo que o AutoCAD começou a dar suporte a scripting usando JavaScript. A linguagem mais usada para scripting nele é o LISP,..."
---

Fiquei sabendo que o AutoCAD começou a dar suporte a scripting usando JavaScript. A linguagem mais usada para scripting nele é o LISP, porém resolvi aproveitar a linguagem que já estou acostumado.

Para começar eu dei uma olhada na documentação e tentei seguir os exemplos. Um problema: a documentação não inclui uma referência da API, ela simplesmente dá meros seis exemplos. Por outro lado tentei descobrir como o sistema funciona e descobri uma coisa: o AutoCAD simplesmente roda o código em uma versão do Chrome!

É estranho, mas por outro lado é bom: ele roda ES6 (sem precisar de ferramentas como o Babel) e dá para usar ferramentas de desenvolvedor do Chrome. Então resolvi experimentar, pensei "vou fazer algum desenho que é fácil fazer com código mas é difícil de desenhar manualmente", então peguei um código para geração de fractais e fiz isso:

![inline image](https://res.cloudinary.com/qgustavor/image/upload/v1499745099/midmm9m8celzwsyukd0b.png)

Consegui desenhar alguma coisa, ótimo! Só que não é isso o que eu quero, o que eu quero é criar uma ferramenta para facilitar o meu trabalho como projetista. Isso é, mesmo se eu não continuar exercendo essa função acho que ainda poderei aproveitar essa ferramenta para outros usos.

Logo me deparei com outro problema: a documentação cria uma falsa expectativa quando fala que a API funcione usando Promises, pois elas não seguem a especificação de Promises A+. sendo mais parecidas com as do jQuery antigo. Simplificando, para quem não sabe a diferença: é uma dor de cabeça, principalmente ao lidar com erros. Por sorte só preciso usar um Promise.resolve() e esse problema é resolvido.

Depois de quebrar a cabeça pensei: será que o problema está na versão do AutoCAD que estou usando. Peguei uma versão mais antiga: não tem ES6, não tem promises, mas os comandos funcionam. Hora de colocar o Babel para funcionar: peguei o babel-standalone e o babel-polyfill e fui programar. Usei async/await para tudo, quanto a sintaxe ficou ótimo!

Por outro lado a API não é não bonitinha, ela não tem muitas funções. Para alterar o desenho você só tem uma opção: executar comandos do próprio AutoCAD. Aliás, existem algumas funções específicas para zoom e pan, mas no final das contas não usei nenhuma delas.

Porém do que adianta apenas alterar o desenho? Dá para desenhar fractais, atratores, fazer arte procedural, mas isso é muito pouco em relação ao que eu pretendia fazer com a API. Eu quero manipular os elementos existentes, criar novas ferramentas, fazer coisas mais complexas.

Só que não há nenhum “jQuery” nessa API, não tem como você rodar uma função que retorna todos os elementos, filtra eles e retorna suas propriedades e métodos para trabalhar com esses objetos. As únicas funções apresentadas são as que fazem perguntas para o usuário. Você pode pedir um inteiro, um número qualquer, um texto, coordenadas, uma distância e… uma seleção de objetos.

Achei um truque para lidar com os elementos: filtro e seleciono o que eu quero com os comandos que existem e depois peço ao usuário uma seleção de objetos. Como ocorre normalmente no AutoCAD quando uma seleção é pedida e objetos já estão selecionados esses automaticamente são escolhidos para serem usados no comando.

Vou terminar minha postagem por aqui, se não ela ficará longa demais, depois eu continuo ela falando o que mais descobri e os truques que fui descobrindo.