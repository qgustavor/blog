---
title: Sincronizador de vídeos
date: '2020-03-18'
excerpt: Continuando o tema de ferramentas que estive desenvolvendo nos últimos anos
  uma das que eu mais trabalhei foi um sincronizador de vídeos. A...
---



Continuando o tema de ferramentas que estive desenvolvendo nos últimos anos uma das que eu mais trabalhei foi um sincronizador de vídeos. A ideia é simples: pegue um vídeo de uma fonte A, um vídeo de uma fonte B e o programa sincroniza os dois.

Um exemplo: um grupo[^1] poderia pegar seus conteúdos HDTV, sejam legendados ou dublados, ajustá-los automaticamente em uma fonte melhor, como BD, reduzindo custos com pessoal, que precisaria apenas fazer os ajustes finos.

Já existem programas que conseguem fazer isso, ou pelo menos, algo parecido. O [PluralEyes](https://www.redgiant.com/products/shooter-pluraleyes/), por exemplo, consegue sincronizar diversos vídeos rapidamente usando apenas o áudio deles como referência. O problema: ele custa quase 300 dólares.

Tenho dois fortes motivos para não usar ele: em primeiro lugar, eu não tenho tanto dinheiro, em segundo, eu queria uma ferramenta que trabalhasse automaticamente. Então como tive que colocar a mão na massa tive que começar fazendo algumas considerações:

* Considerei que todas as diferenças entre versões podem ser representadas por mapeamentos lineares, o que permite representar, adição e remoção de cenas, e alterações constantes de framerate.
* Sendo assim as diferenças entre dois vídeos podem ser representadas por meio de um gráfico "tempo" versus “diferença entre os tempos“.
* Considerei que uma quantidade considerável de frames ou áudio entre as versões é consideravelmente similar.

Fiz a primeira versão do sistema em uma semana: aproveitei um recesso do serviço e lutei para terminar pelo menos uma versão funcional. Essa versão usa imagens dos vídeos e, de todas as versões que eu criei, é a mais estável.

Já testei a ferramenta em centenas de vídeos e os resultados foram muito bons, mesmo em situações onde houveram mudanças significativas entre as versões sincronizadas, como adição de textos, adição e remoção de cenas.

Fiz duas versões que se baseavam no áudio dos vídeos, porém essas versões são muito inconsistentes. O maior problema de se usar o áudio é que ele permite imprecisões maiores do que as permitidas pelo vídeo. Quero dizer, uma diferença de um ou dois frames é, em várias situações, fácil de ser notada, mas uma diferença de 40 ms é mais difícil de ser notada.

No momento o programa apresenta problemas quando ele não consegue detectar os pontos comuns entre os vídeos, por exemplo, quando a diferença entre os vídeos ocorre em transições suaves. Alguns animes onde isso acontece são Nichijou e Net-juu no Susume. Imagino que seja possível resolver esse problema adotando um método híbrido de sincronização, ou seja, baseado em imagens e áudio.

Falando em Net-juu no Susume, quero assistir ele na versão Director’s Cut. Eu ficaria muito feliz se a CR usasse essa ferramenta para disponibilizar essa versão no serviço deles: até hoje não assisti esse anime por esse motivo apenas.

Quem já acompanha o blog sabe que eu sou exigente com os animes que eu assisto. Não quero assistir uma versão HDTV velha. Uma das coisas que gosto na HIDIVE é justamente o fato deles disponibilizarem versões novas no serviço deles ― não que outros serviços não façam o mesmo ― mas pelo menos dentre os serviços que se especializam em animes eles são um dos que se destacam nesse aspecto.

Até a postagem da semana que vem!

[^1]:  Poderia ser uma fansub, mas como estou decepcionado com a maior parte delas vou ser politicamente correto e dizer que é uma empresa.