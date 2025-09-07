---
tags: []
title: "Apps Script, Segurança & Outras Desilusões!"
date: 2015-08-19 18:17:16 +0000
redirect_from:
  - /post/127091548959/apps-script-segurança-outras-desilusões/
  - /post/127091548959/
  - /apps-script-segurança-outras-desilusões/
excerpt: "Desde ano passado estou escrevendo scripts no apps script e estou sendo um doido fanático por segurança. Aliás, eu já fazia um pouco antes, mas foi mais ou menos nesse intervalo que a situação ficou séria."
---

Desde ano passado estou escrevendo scripts no apps script e estou sendo
um doido fanático por segurança. Aliás, eu já fazia um pouco antes, mas
foi mais ou menos nesse intervalo que a situação ficou séria.

![](https://41.media.tumblr.com/6919c8ba7e9e9efc1d5bb43b6265aa6d/tumblr_inline_ntccfjqOhN1qju32f_540.jpg)

Acontece que ano passado eu tentei largar meu passado negro ~~de
Chuunibyou~~ e procurar encontrar algo melhor para fazer. Decidi ir
assistir animes, já que eu já estava acumulando um monte baixado e que
eu não tinha assistido, além de alguns que meus amigos me recomendaram.

Por influência do passado, continuei programando e decidi automatizar os
animes. Claro que já há ferramentas para isso, como o MyAnimeList, só
que eu queria mais. Acabei fazendo uma planilha que me avisa de quando
saem novos episódios, guarda estatísticas do que assisto e tem mais
outras 108 funções.

Usei o Apps Script, que seria o equivalente aos macros do Excel porém
usando JavaScript ao invés de VB e funcionando nos <del>lentos</del>
computadores da Google a qualquer momento sempre na hora programada.
Assim como já ocorreu no passado considerei essa experiência como um
desafio, já o sistema é um pouco ultrapassado: ele lembra o Internet
Explorer 8.

Com tanto tempo mexendo nele pensei que eu conseguiria implementar um
modelo de segurança melhor com ele, logo um dia decidi implementar o
protocolo Secure Remote Password. Descobri uma coisa: não dá. A questão
do SRP é que é baseado em criptografia público-privada, que tem um
problema: é lenta. Ah, já disse que normalmente o Apps Script é lento?

![](https://41.media.tumblr.com/5f30bcb816c57b2b6745184ac76c2a0b/tumblr_inline_ntccx4sX1u1qju32f_540.jpg)

Agora voltando aos animes e na minha planilha: semana passada
implementei uma outra forma que a planilha pode saber se saiu episódios
novos, usando o MEGA. Para quem não sabe o MEGA é um site que foi feito
para os donos não levarem a culpa de nada que os usuários postam, por
isso tudo é automaticamente criptografado de forma que não é fácil
culpar eles.

Agora a questão é segurança: se eu consegui implementar um sistema que
me avisa episódios novos monitorando pastas compartilhadas usando um
sistema lento como eu fiz isso? Para começar: nem de criptografia eu
precisava, só o nome do arquivo e o conteúdo deles que é criptografado.
Dados como o tamanho dos arquivos e quantos arquivos há em cada pasta
não passam pela criptografia.

Mesmo assim decidi colocar a criptografia em jogo (ainda mais por que
sem o nome do arquivo eu só saberia que um arquivo foi adicionado, mas
não qual): procurei uma biblioteca antiga que fosse compatível com o IE8
e apliquei-a no script. Está funcionando e é rápido, cheguei até a
pensar: vou fazer o mesmo com SRP. Problema: não consegui arrumar
nenhuma biblioteca que pudesse permitir isso de forma simples. A que eu
usei para o MEGA só suporta criptografia simétrica.

Agora uma questão: onde acha que eu vou usar SRP? Em nenhum lugar, no
máximo em uma demonstração ou em algum lugar com baixo risco. A menos
que você use isso em algo que seja possível de ser auditado e que o
usuário controle as atualizações não há segurança: há sempre o risco de
uma atualização automática revelar a senha.

Mas estou trabalhando em uma forma de resolver esse problema,
formalmente o projeto ficou sendo o <https://wshp.tk/> embora eu não
atualize ele faz tempo. Por que? Tentei fazer a interface dele ser
material design, me perdi no meio desse processo e até agora não saiu
nada. Também devo ter pegado um pouco do sono da Kumin.

Acho que isso resume um pouco dos meus *side projects*, fico por aqui
(já que também tenho que trabalhar, resolver essas coisas)…

![](https://31.media.tumblr.com/e068e43321de55fb169abe579214bd3f/tumblr_inline_ntcdenqdgt1qju32f_500.gif)

*Nota: o Tumblr não deixa controlar o tamanho das imagens, devem estar
saindo todas grandes.*


