---
title: Compressão de pastas de imagens
date: '2017-09-12'
excerpt: Resolvi ler os mangás que eu estava acumulando vários sem ler. Nessa jornada
  para terminar logo essas histórias vi o povo que disponibiliza...
---



Resolvi ler os mangás que eu estava acumulando vários sem ler. Nessa jornada para terminar logo essas histórias vi o povo que disponibiliza mangás usa vários formatos, alguns bons, outros ruins, então eu fiquei com uma dúvida: qual desses formatos é o melhor?

Aí que está: melhor para quê? O que comprime melhor? O que roda em mais sistemas? O mais fácil de trabalhar? Bem, considerando que muita gente usa o RAR, que é velho, não é de graça mas comprime melhor que o mais velho ainda ZIP suponho que querem comprimir melhor…

… ou será que essa comparação não está certa? Por isso resolvi fazer alguns testes.

Peguei um volume completo de um mangá que eu estava lendo, Oyasumi Punpun (que aliás é muito bom e recomendo que leiam), e comprimi usando vários métodos e comparei eles...

Mas antes de mostrar os números temos que pensar em um detalhe: mangás são, em essência, um monte de imagens. Isso porque o povo que faz esses lançamentos prefere algo mais prático do que editável. Eles poderiam usar algum formato que fosse editável ou selecionável (como SVG ou PDF), mas preferem usar imagens por serem mais fáceis de serem abertas: SVG não abre direito na maioria dos sistemas, já vários sistemas abrem PDF, até mesmo celulares, mas não tantos quanto os que abrem imagens.

Mesmo com essa restrição ainda há vários formatos de imagens disponíveis: se escolhermos apenas os formatos que tem maior suporte ficaremos com JPEG (famoso por fotos, compacta bem mas perde a qualidade dos detalhes), BMP (que armazena o conteúdo da imagem exatamente como no original, mas não compacta) e PNG (que faz o mesmo, porém compactando). Como o BMP não tem compactação nunca vi ele ser usado para mangás mas considerei ele também.

Ainda temos que pensar em formas de compactar vários arquivos: já falei de ZIP e RAR, que são formatos bem antigos porém bem utilizados para distribuir mangás. Resolvi incluir também o 7Z, por ser um formato que é aberto e tem uma boa performance. Eu poderia ter considerado o uso de TAR.GZ porém como ele é mais difícil de ser aberto em alguns sistemas preferi testar ZIP de ZIP, que é incomum mas comprime melhor que ZIP.

Então já que enrolei mundo, os resultados:

![inline image](https://i.imgur.com/X05S7K9.png)

Como podem em geral o formato 7Z supera todos os outros, o que já era esperado. Achei curioso que o WinRAR, mesmo sendo pago, saiu perdendo. Ele mostrou resultados no mínimo 4% maiores que o 7-Zip, e que ele praticamente empatou com o ZIP, que mesmo sendo um formato velho mostrou a sua força. O que eu achei impressionante mesmo é que o 7-Zip comprimiu melhor vários BMP do que vários PNG, enquanto os outros formatos não conseguiram.

O motivo para isso é simples: como falei em uma postagem anterior comprimir informação é simplesmente arrumar uma forma mais simples de dizer essa informação. Consideremos que o que o BMP faz é falar algo como "AAAAAAAAAA" enquanto o que PNG faz é falar “tem 10 A”. Se você pegar 10 dessas duas mensagens e quiser simplificar como ficaria? Não seria algo como “tem 100 A” e “tem ‘tem 10 A’ 10 vezes”? Sendo assim é possível ver que é mais difícil compactar uma informação que já tinha sido compactada anteriormente.

Resumindo: parem de usar WinRAR para compactar pastas de imagens… aliás, para compactar qualquer coisa. Se a única coisa que RAR comprime melhor que ZIP é BMP então ou comprimam o BMP com o 7-Zip ou usem PNG ou JPEG de uma vez.

Se amam tanto WinRAR [dê uma licença de presente para o seu namorado ou namorada](https://redd.it/3x4y46), mas não fiquem compactando arquivos com ele.