---
title: Videos e Cores 2
date: '2020-08-12'
excerpt: Continuando a postagem anterior me lembrei que há um anime com uma cena criada
  justamente para testar...
header:
  image: https://i.imgur.com/rNsotyc.jpg
---



Continuando a postagem anterior me lembrei que há um anime com uma cena criada justamente para testar cores: em Kizumonogatari III Reiketsu-hen há uma cena que aparece [o padrão de testes da SMPTE](https://en.wikipedia.org/wiki/SMPTE_color_bars), em especial, o padrão SMPTE RP 219:2002 criado para testar o sinal de imagens HDTV. Esse padrão é interessante pois ele permite identificar várias características das imagens, em especial, as que foram mostradas na postagem anterior.

E o assunto da postagem de hoje vai ser comparar o encode de quatro grupos usando essa imagem como referência! Esse anime foi bem popular, hein?!

Bem, não vou falar o nome dos quatro grupos porque não estou com vontade de fazer propaganda de nenhum grupo. Se quiserem saber só pesquisar na internet. Vou chamar os grupos de A, B, C e D. Tirei uma captura de tela do frame em questão de cada vídeo usando o ffmpeg configurado no modo PNG em 32 bits. Aqui está uma tabela para facilitar:


| **#                 **|** Tamanho do vídeo  **|** Tamanho da imagem **|** Dimensões**          |
|-----------------------|-----------------------|-----------------------|------------------------|
| A                     | 986 MiB               | 475 KiB               | 1280x720               |
| B                     | 1,32 GiB              | 395 KiB               | 1920x816               |
| C                     | 1,29 GiB              | 203 KiB               | 1920x816               |
| D                     | 2,13 GiB              | 176 KiB               | 1920x1080              |


Para mais informações sobre os vídeos publiquei o resultado do MediaInfo de cada um dos arquivos [nesse gist](https://gist.github.com/qgustavor/96dffd688e092622cbd8334cefd15919).

Como podem notar eu organizei os arquivos com base no tamanho da imagem, isso porque considerei que o PNG seria maior quanto mais informações ele tivesse para armazenar e ter mais informações é um indício forte de qualidade.

Notem que a imagem maior é, surpreendentemente, da fonte com a menor resolução e o menor tamanho do arquivo. Parece estranho? Não é: provavelmente o grupo A é o que menos modificou o conteúdo do vídeo, possibilitando que ele pudesse ser melhor comprimido como vídeo sem perder informações. Por outro lado o grupo D é o grupo que mais perdeu informações, ainda que o tamanho do vídeo seja tão grande. Isso ocorreu porque o grupo usou o nojento hardsub e, assim, precisou diminuir a qualidade do vídeo.

Claro, uma comparação de encode sem imagens não faz sentido, então aqui está as imagens dos grupos, de A até D:

![](https://i.imgur.com/lloL5BC.png)

![](https://i.imgur.com/CH8RpMa.png)

![](https://i.imgur.com/3VUXbGf.png)

![](https://i.imgur.com/WQWTJ4I.png)

Novamente, assim como na postagem anterior, é mais fácil comparar as imagens abrindo elas em guias separadas e trocando uma pela outra para facilitar a comparação.

Vamos começar a análise das imagens pelo ponto favorito que o pessoal gosta de ficar reclamando: banding. É fácil de notar que o gradiente nesse padrão de testes foi criado justamente para testar isso.

* O grupo A apresenta pouco banding pois no gradiente há um dithering que reduz esse efeito. Esse dithering provavelmente foi o que fez com que o tamanho da imagem aumentasse tanto. Mesmo assim o efeito não foi completamente eliminado.
* O grupo B foi o único que usou 10 bit e por isso é o que menos apresenta banding. Por outro lado como poucos programas suportam PNGs de 32 bit (e o imgur com certeza não suporta) provavelmente no seu navegador a imagem esse grupo apresenta mais banding que o grupo A.
* O grupo C também apresenta um banding mais forte que os grupos A e B, mas não tão forte quanto o do grupo D.

Apesar da popularidade esse ponto para mim não é tão importante já que minha tela é limitada a 8 bits por canal mesmo. Como podemos ver acima caso um programa não suporta 10 bit, ou caso esteja mal configurado, é possível que uma imagem em 10 bit tenha mais banding que uma em 8 bit com dithering.

Agora vamos falar de um ponto mais importante: as cores. O verde dos grupos A e D é mais forte, em torno de #1EFF0B em RGB, já nos grupos B e C o verde fica em torno de #0EDF03. O esperado seria algo como #00BF00. Provavelmente os grupos A e D cometeram o erro de configurar a imagem usando a matriz 601, um padrão mais antigo, quando deveria ser 701. Provavelmente esses grupos usam configurações de encode antigas e não dão a mínima importância em se atualizar e usar padrões mais novos.

Finalmente vamos testar a intensidade das cores. Os valores estão no mesmo formato antigo usado em CSS, isso é RGB 8 bit em hexadecimal:

* Valores esperados: preto é #000000, 4% de cinza é #0A0A0A, 15% de cinza é #262626, 40% de cinza é #666666, 75% de cinza é #C0C0C0 e branco é #FFFFFF;
* Grupo A: preto é #000000, 4% de cinza é #000000, 15% de cinza é #262626, 40% de cinza é #666666, 75% de cinza é #BDBDBD e branco é #FEFEFE;
* Grupo B: preto é #010101, 4% de cinza é #010101, 15% de cinza é #262626, 40% de cinza é #666666, 75% de cinza é #BEBEBE e branco é #FFFFFF;
* Grupo C: preto é #000000, 4% de cinza é #000000, 15% de cinza é #252525, 40% de cinza é #656565, 75% de cinza é #BDBDBD e branco é #FEFEFE;
* Grupo D: preto é #000000, 4% de cinza é #000000, 15% de cinza é #252525, 40% de cinza é #656565, 75% de cinza é #BDBDBD e branco é #FDFDFD;

Provavelmente o 4% de cinza não apareceu pois a produção do anime deve ter esquecido de colocar ele na imagem. Ou todo mundo errou o encode! Apesar disso parece que nenhum dos grupos teve problemas para configurar os níveis do vídeo.

No fim das contas para mim o grupo B é o que se saiu melhor, não apenas porque usou 10 bit evitando o problema de banding mas também porque não errou a configuração de cor. Eu pedi para a Crunchyroll traduzir esse anime: se eles fizerem isso vou repetir o teste com eles.

E é só isso por hoje. Se vocês tiverem dúvidas e comentários deixe eles abaixo. Se gostou desta postagem acompanhe o bug. E tenha um bom dia!