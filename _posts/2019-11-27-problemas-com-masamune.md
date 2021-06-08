---
tags: []
title: "Problemas com Masamune"
date: 2019-11-27 03:51:44 +0000
excerpt: "Desde que conheci a CR e descobri que ela é bem melhor do que é dito dela venho assistindo vários animes deles. Embora eles tenham..."
---

Desde que conheci a CR e descobri que ela é bem melhor do que é dito dela venho assistindo vários animes deles. Embora eles tenham problemas com a qualidade do vídeo e o player, eu tento contornar esses problemas do meu jeito "dando um jeito" no vídeo e reportando erros.

Resolvi assistir Masamune-kun no Revenge. No momento que escrevo ainda não assisti nenhum episódio mas já ouvi falar que ele é bem clichê. Não acho isso ruim, pelo contrário, isso é bom para descansar um pouco dos animes complexos.

Enquanto eu dava o meu jeito no vídeo apareceu um pessoal na minha vida falando que eu estava tomando decisões erradas, argumentando que:

* De acordo com um site qualquer esse anime não foi produzido em 1080p.
* A fonte que escolhi não é confiável.
* Não tenho conhecimento suficiente para falar disso.
* E, finalmente, que eu não estava conseguindo me comunicar com eles corretamente (não notaram que o site estava com problemas e ainda me culparam por isso).

Depois desse último argumento se cansaram e me tiraram da conversa.

Notei que, pelos argumentos acima, esse pessoal não sabe conferir qualidade por si só e depende de sites e em fontes para determinar a qualidade de um vídeo. Não acho isso correto: alguém que diz ter experiência nessa área tinha que saber determinar isso sem depender de terceiros ou da reputação de uma fonte.

**Por isso decidi pesquisar sobre o assunto.**

Fui atrás de todas as fontes que eu consegui encontrar para esse anime e encontrei seis fontes diferentes. Para simplificar nessa postagem chamarei elas de A até F: A é a Crunchyroll, B é a fonte que eles me recomendaram, C é a que eu escolhi, D até F são outras fontes.

Fiz uma pesquisa sobre a origem das fontes. A fonte C foi originada [desse Blu-ray BOX](http://masamune-tv.com/blu_ray_dvd/%E6%94%BF%E5%AE%97%E3%81%8F%E3%82%93%E3%81%AE%E3%83%AA%E3%83%99%E3%83%B3%E3%82%B8-blu-raybox-%E3%80%90oad%E5%8F%8E%E9%8C%B2%E3%80%91) que começou a ser vendido em 31/07/2019. A maioria das outras fontes foi originada [desse Blu-ray](http://masamune-tv.com/blu_ray_dvd/1) que começou a ser vendido em 22/03/2017.

Com base nas informações acima a fonte C tem pontos positivos e negativos:

* Como cada disco contém seis episódios e não dois é possível que a qualidade do vídeo tenha sido reduzida uma vez que a capacidade de um disco Blu-ray [é limitada até 300 GB](https://en.wikipedia.org/wiki/Blu-ray).
* Por outro lado nada impede que os discos lançados anteriormente não ocupassem todo o espaço disponível pelo disco e, por isso, a qualidade da imagem tenha sido mantida no disco novo.
* Há uma chance alta do Blu-ray novo possuir uma qualidade superior justamente por ser mais novo, dando dois anos para a produção do anime melhorar a qualidade do vídeo e corrigir defeitos.

O próximo passo foi determinar a qualidade com base nos vídeos que eu obti. Pesquisei ferramentas criadas para determinar a qualidade de um vídeo e encontrei essas duas:

* [resdet](https://github.com/0x09/resdet): detecta a resolução original de imagens ampliadas.
* [spec](https://github.com/0x09/dspfun/tree/master/spec): gera espectros de frequência DCT, que podem ser usados para determinar a resolução original de imagens ampliadas.

Para cada uma das fontes escolhi sete imagens no primeiro episódio, priorizando imagens complexas e/ou com detalhes que não apareceriam em resoluções baixas:

![](https://i.imgur.com/NKKmrvj.png)

As resoluções originais estimadas pelo resdet foram as seguintes:


|           | A         | B         | C         | D         | E         | F          |
|-----------|-----------|-----------|-----------|-----------|-----------|------------|
| 1         | 1440x1080 | 99x622    | 1920x1080 | 99x25     | 99x25     | 99x720     |
| 2         | 1920x810  | 25x622    | 1920x810  | 25x720    | 1920x1080 | 1220x720   |
| 3         | 12x810    | 12x622    | 1440x810  | 12x720    | 12x1080   | 12x720     |
| 4         | 37x22     | 37x22     | 37x22     | 37x22     | 37x22     | 37x22      |
| 5         | 13x13     | 13x13     | 13x13     | 13x15     | 35x540    | 13x13      |
| 6         | 1440x810  | 1106x622  | 1440x810  | 1280x720  | 1920x1080 | 1120x720   |
| 7         | 1440x810  | 1106x622  | 1440x810  | 1280x720  | 1920x1080 | 1280x720   |


É fácil notar o resdet é bem impreciso, principalmente com a imagem 5 que tinha menos informações. Por outro lado, como o erro dele sempre é para menos, podemos considerar a resolução máxima encontrada para cada fonte. Com essa consideração temos que as fontes C e E são 1920x1080.

Depois de realizar os testes com o resdet usei o spec. Aqui está os espectros das frequências para cada imagem que ele gerou:

![](https://i.imgur.com/ZfT8Tjm.png)

Nas espectros das fontes A e E notei um padrão estranho na coordenada 960x540 que não apareceu em nenhuma das outras fontes:

![](https://i.imgur.com/omp0feD.png)

Concluíndo, mantive a minha escolha e vou usar a fonte C pelos seguintes motivos:

* A resolução máxima detectada pelo resdet é 1920x1080, ou seja, ao contrário do que me disseram, a imagem não foi ampliada.
* É possível que o resdet tenha errado quando estimou a resolução da fonte C sendo 1920x1080 e acertado quando estimou 1440x810. Neste caso a fonte E seria melhor. Por outro lado a fonte C não possui o padrão estranho encontrado nas fontes A e E.
* Finalmente, como a fonte C é baseada em um disco mais novo, é provável que erros dos discos antigos tenham sido corrigidos e qualidade da imagem tenha sido melhorada.

Se meus planos não mudarem quando essa postagem for publicada eu já terei assistido esse anime. Conforme eu for assistindo vou prestar atenção nos detalhes da imagem. Se eu notar que há algo errado com a fonte que escolhi farei mais testes e atualizarei essa postagem.