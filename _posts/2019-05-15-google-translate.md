---
tags: []
title: "Google Translate"
date: 2019-05-15 03:51:41 +0000
excerpt: "Resolvi fazer um experimento estranho: usar o Google Translate para traduzir legendas.  Eu não diria que isso é inovador, muito pelo..."
---

Resolvi fazer um experimento estranho: usar o Google Translate para traduzir legendas.

Eu não diria que isso é inovador, muito pelo contrário, é muita gente fala que um ou outro grupo usa essa ferramenta para traduzir legendas. Embora geralmente isso seja apenas uma crítica barata, não que literalmente usem o Google, por causa disso achei que fosse fácil usá-lo.

Mas antes de explicar o que eu fiz, o contexto: estava querendo assistir Gakuen Babysitters e não achei nenhuma tradução boa das músicas nem em inglês, nem em português, mas achei em italiano. Por mais que italiano seja de longe parecido com português eu não entendo bem, logo pensando naquelas críticas decidi dar uma chance para o Google.

O curioso é que descobri que não é nada fácil usá-lo para isso. Uma opção simples é remover toda a formatação e traduzir como texto. Não duvido que, se realmente alguém usa essa ferramenta para traduzir legendas, essa pessoa deve fazer dessa forma.

Mas, diferente de milhares de brasileiros, eu não me contento com legendas sem formatação: eu quero as minhas com formatação que nem qualquer pessoa de bem.

Então o que eu fiz foi: converti as legendas para HTML, substituindo a formatação do ASS por tags, traduzi a página no Google e converti de volta para ASS.

Fazendo isso consegui resultados interessantes, mas não foi suficiente. Notei rapidamente que o Google não consegue detectar e traduzir marcas de fala, em especial repetição de letras para representar gagueira ou nervosismo. Algo como "Y-Yes..." virava algo como “Y-Sim...”. Para lidar com isso adicionei etapas de pré e pós processamento.

Além disso precisei de criar uma blacklist de estilos que não eram para ser traduzidos, assim a letra das músicas em romaji não era afetada

Após esses ajustes os resultados ficaram até bons: embora às vezes a gramática ficava em um nível Tarzan era possível entender o que estava sendo dito e não aparecia muitos erros de tradução.

Algumas imagens:

![inline image](https://i.imgur.com/gK8PDKU.png)

![inline image](https://i.imgur.com/cwRwS0h.png)

Depois desse anime ainda não apareceu outro que eu pudesse aplicar isso de novo, mas se um dia aparecer mais um já tenho planos para algumas otimizações e melhorias.

Ah, esse anime está disponível na Crunchyroll, então assisti a tradução deles. Só as músicas que assisti pelo Google. Por outro lado, para simplificar, coloquei ele para traduzir o episódio inteiro. Achei impressionante que praticamente toda vez que a CR cometia algum erro a Google não cometia.

Fiquei pensando nesse detalhe e cheguei aos seguintes pontos: considerando que as falas que a CR errou eram falas complicadas e que eles traduziram do inglês (já que eu não conheço nenhum tradutor de japonês, exceto se o anime for Fate) o Google teve um trabalho mais fácil já que português é mais parecido com italiano do que com inglês.