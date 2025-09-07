---
title: Otimizando fontes
date: '2021-05-04'
excerpt: Se você for legendar um vídeo, seja como fã, seja profissionalmente, e se
  preocupa com a qualidade do...
header:
  image: https://i.imgur.com/CPtBHn0.png
---



Se você for legendar um vídeo, seja como fã, seja profissionalmente, e se preocupa com a qualidade do seu produto, uma das coisas que você precisa se preocupar é com as fontes que você usa. Além de se preocupar se a aparência da fonte é apropriada com o conteúdo é importante levar em consideração a forma que o vídeo é distribuído.

# Por quê?

A menos que você esteja lutando contra o sistema, como alguns tradutores da Crunchyroll estão fazendo, é importante entender as limitações da forma que você trabalha. Se você distribui vídeos usando arquivos MKV, por exemplo, é recomendado que você evite usar fontes pesadas (está no fim [desta página](https://unanimated.github.io/ts/ts-styles.htm)): não faz sentido você aumentar o tamanho do vídeo em 10MB só porque precisa de mostrar um kanji em uma nota de tradução, certo? Por outro lado, limitações como essa limitam a capacidade dos tradutores, o que não é bom.

# Como?

Haveriam soluções melhores? Proponho uma: reduzir o tamanho das fontes eliminando os caracteres que não foram usados na legenda. Não é algo difícil de ser executado pois há várias ferramentas criadas para esse propósito, basta procurar por "font subsetting". Para aplicar esse conceito com legendas, fiz um script que recebe uma legenda e uma pasta com fontes e otimiza elas removendo os caracteres não usados. Só usar o ass-parser e o fontkit, simples.

Mas não me contentei em apenas reduzir as fontes, resolvi unir todas as fontes em um arquivo só, assim a quantidade de metadados e outras informações redundantes entre as fontes é reduzida. Isso também tem o benefício de evitar que alguém extraia as fontes do MKV (usando o [mkv-extract](https://qgustavor.github.io/mkv-extract/) talvez) e instale no sistema.

# Pontos positivos e negativos

Há dois grandes pontos positivos para esse conceito:

1. Ele permite que tradutores possam usar quantas fontes acharem que for necessário sem se preocupar com o tamanho das fontes. Querem colocar um kanji em uma nota de tradução? Não tem problema. Querem usar dezenas de fontes para fazer algum efeito? Ótimo!
2. Ele permite reduzir o tamanho dos vídeos sem reduzir a qualidade do vídeo e de forma mais eficaz e inteligente do que outras técnicas que certos grupos usam, como compactar o vídeo usando rar ou 7z e dividir aberturas e encerramentos em arquivos separados (o que reduz a compatibilidade, o que não é inteligente).

Há um ponto que pode ser positivo ou negativo, dependendo das suas prioridades: a legenda fica ilegível se unir as fontes em uma só e elas não forem carregadas, isso é bom pois garante que ninguém vai ver uma legenda com fontes padrões erradas, mas isso pode ser ruim para os que preferem uma legenda ruim do que nenhuma.

Ainda há três pontos negativos: complexidade adicional, dificuldade para editar a legenda distribuída e problemas de licenciamento já que as licenças de certas fontes não permitem que elas sejam editadas dessa maneira. Esse último problema não afeta fansubs pois quase todas[^1] usam fontes sem ter permissão de redistribuição. Fansubbers que me falaram “a gente só usa fontes gratuitas”, por favor, [leiam isso](https://docs.microsoft.com/pt-br/typography/fonts/font-faq) e aprendam que Arial não é uma fonte gratuita.

# Na prática

Testei esse conceito com um episódio de Kobayashi-san. Como disse semana passada eu tinha trabalhado nesse anime para ver a versão dublada, logo eu já tinha o karaokê que eu traduzi para português e o vídeo do BD, bastou adicionar a tradução das falas as quais peguei da fansub Aenianos. Como apenas traduzi o karaokê da DameDesuYo!, que é um que usa várias fontes, o arquivo final ficou com mais de 35 fontes, o que é perfeito para o teste.

Postei o arquivo final em uma hospedagem e perguntei para o pessoal da UO se eles conseguiam abrir o arquivo, se estava funcionando corretamente, qual era o player que usaram e o que acharam que eu tinha alterado no vídeo. Os resultados:

![](https://i.imgur.com/AblNeY1.png)

Como podem ver, a maioria conseguiu abrir sem problemas, mas 28% das vezes o player não carregou a fonte, deixando a legenda ilegível. Praticamente todos os players populares aparecem entre os que apresentaram problemas, como MPV, MPC-HC e VLC. Por outro lado esses players também apareceram entre os que o vídeo funcionou, então não é que o problema esteja nos players, mas na forma que eles foram configurados.

Esse dado é interessante para fansubs, pois provavelmente essas pessoas estão vendo animes com os players mal-configurados de forma que as fontes não são carregadas. Isso não é só ruim porque elas estão vendo uma tradução pior do que a que foi distribuída, mas também representa que várias pessoas nem notam o problema e acham que vários grupos usam Arial por escolha própria e não porque elas que configuraram o player delas de forma errada.

Uma ideia que ainda não coloquei em prática, mas que acho que seria boa, seria deixar no início da legenda um aviso grande de que as fontes não foram carregadas usando uma fonte que aparece nada no lugar dos caracteres (algo como [essa fonte](https://github.com/christiannaths/redacted-font), mas com espaços no lugar de retângulos), assim se as fontes não forem carregadas o aviso aparece, se elas forem carregadas.

Essa ideia não aumenta muito o tamanho do arquivo já que a fonte adicional só precisa ter os caracteres necessários para ocultar o aviso e pode ser aplicada em qualquer legenda existente caso algum grupo queira avisar quem está vendo o vídeo de que o player dele não está configurado corretamente e, por isso, ele não estará vendo o vídeo da forma que ele foi criado.

# Alternativas

Embora o teste tenha sido com as legendas reduzidas e unidas, as fontes podem ser apenas reduzidas. Dessa forma as legendas podem funcionar mesmo com as fontes erradas, caso alguém prefira isso. A redução final não vai ser tão eficiente, mas ainda é muito boa. O problema de pessoas extraindo fontes faltando caracteres e instalando no sistema pode ser mitigado renomeando as fontes.

Alguns lendo essa postagem serão rápidos para pensar que hardsub é uma solução, mas quem leu a postagem da semana passada sabe que editar um formato comprimido causa perda de qualidade, e todos os formatos usados para distribuir vídeos são comprimidos, logo usar hardsub não é uma opção para quem se preocupa com qualidade. Repito: quem usa hardsub não se preocupa com qualidade. Ponto final.

Talvez a alternativa mais inteligente e simples é usar streaming: como a distribuição de fontes via streaming ocorre separadamente do vídeo, o tamanho delas não acumula e o problema de um arquivo de 500MB virar um de 600MB simplesmente não existe. Além disso, a redução na performance é mínima pois elas podem ficar em cache.

# Conclusão!

O resultado do experimento foi bem interessante. Se algum grupo não estiver preocupado se o pessoal estiver usando os players de forma errada poderia muito bem usar um script como esse para reduzir o tamanho dos vídeos.

Posso disponibilizar ele se alguém quiser. Não sei se os comentários do blog ainda estão funcionando, acho que a função que lida com ele estava marcada para parar de funcionar por causa de uma atualização no servidor e a única forma que resolver esse problema seria pagando, o que eu não vou fazer.

Se quiserem podem me enviar uma mensagem no Discord, no Twitter, os dois são igualmente bugados e não recebo notificações dos dois. Tenho conta no Signal e no Keybase, são criptografados, mas acho que ninguém usa nenhum dos dois, né? [É complicado.](https://xkcd.com/2365/)

Eu tinha dito que daria um prêmio para quem adivinhasse qual era o objetivo do experimento e ninguém acertou, mas alguém tinha que ganhar um prêmio e esse foi o henmarcelino, que chutou que era a escolha de fontes. Não era bem a escolha das fontes, era uma forma de reduzir o tamanho delas. Os outros chutes disseram que a qualidade do vídeo era melhor, o que entendo pois a qualidade do vídeo da Aenianos é inferior pois usaram hardsub na tradução das músicas. Aparentemente o pessoal inconscientemente nota que a qualidade de quem usa hardsub é inferior.

Voltando ao assunto das fontes, acho estranho que o pessoal da Crunchyroll se recuse a usar as fontes que eles licenciaram. São 60 fontes (incluindo variações) mas parece que só querem ficar usando 15 dessas variações, desperdiçam 75% do que licenciaram! Há vários animes onde aparece texto monoespaçado e, ao invés de usarem Courier New, Andale Mono ou DejaVu LGC Sans Mono, eles usam Arial, que não é apropriada para essa situação. Embora seja um problema que eles só tenham licenciado uma única fonte cursiva, Comic Sans MS, por que desperdiçam tantas fontes por nada? É estranho, mas tenho boas notícias: não licenciaram Papyrus. Ainda bem!

Acho que há dois problemas lá, em primeiro lugar como muita gente que trabalha lá era de fansubs eles ainda têm a mentalidade de fansubbers e acham que adicionar muitas fontes é algo ruim, em segundo lugar há um grupo rebelde que não lê os memorandos e usa qualquer fonte que dá na telha. Aliás, para mim esse grupo rebelde não é um problema, é uma benção já que no último mês eu arrumei o meu player para carregar essas fontes.

Espero que o futuro seja melhor, tanto para fãs, quanto para profissionais e para quem está no meio dos dois grupos. Ainda que demore anos para o projeto sair e mais ainda para os players implementarem, acho que propostas [como essa](https://github.com/libass/libass/wiki/ASS-v5.0) deveriam ser revistas e melhoradas por pessoas dos dois lados. Muito do que já foi proposto é ótimo, mas sempre há espaço para melhorias, como definir o estilo ao invés de definir o tipo do evento por linha e mover o tipo de evento para ser uma propriedade do estilo, o que seria mais conciso. Mas para que essas melhorias ocorram é necessário que haja participação de várias pessoas envolvidas com a produção de legendas.

Quinta vou publicar uma postagem sobre um anime muito bom que me recomendaram quando eu estava na faculdade e que é muito educativo. Até mais!

# Atualizações

Descobri duas coisas após a publicação desta postagem:

1. A Crunchyroll está usando mais fontes, só não é muito comum. Em um episódio que vi faz algumas horas eles usaram oito fontes diferentes (excluindo variantes), inclusive Courier New. Espero que as equipes estejam sendo melhor informadas de quais fontes elas podem ou não usar.
2. Há algumas fansubs que usam fontes otimizadas, como a Commie, mas até agora não encontrei ninguém que tenha feito um script ou programa que automaticamente pega as fontes de uma legenda e otimiza as fontes conforme os caracteres usados. Além disso, mesmo no exemplo que encontrei da Commie, em Nagatoro-san, só otimizaram uma fonte de 4 MB para 46 KB, o que indica que devem ter feito isso manualmente. A automatização desse processo pode ser o que faltava para que isso se popularize.

[^1]:  Se encontrar uma que só usa fontes com licenças open-source, deve ser minha.
