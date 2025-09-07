---
title: Jogo de Aniversário da UniOtaku
date: '2020-01-08'
excerpt: Mês passado fiz um jogo para o quinto aniversário da UO. Como é impressionante
  que ele ainda esteja online mesmo sendo algo ultrapassado...
---



Mês passado fiz um jogo para o quinto aniversário da UO. Como é impressionante que ele ainda esteja online mesmo sendo algo ultrapassado resolvi ajudar na comemoração.

No aniversário de três anos eu tinha tentado criar uma visual novel para a comemoração, tentei [escrever um roteiro](https://i.imgur.com/KsYdRNV.png) e desenhar umas cenas, mas não deu certo. Não sou bom para escrever histórias e muito menos para desenhar.

Neste ano tentei esse plano novamente, mas para evitar os problemas da outra vez resolvi criar algumas restrições, como focar apenas no texto e tentar criar uma história mais simples. O roteiro final do jogo [é esse](https://docs.google.com/document/d/1MCI8FRQ-bLVpLZuuoyuRhrTdGjzbuLKNsRMVSAD0L7o/edit) e o coloquei o código do jogo [aqui](https://github.com/qgustavor/chat-game/).

Implementei a interface do jogo para simular um chat. Usei o Mithril: ele é duas vezes menor do que o Vue, quase quatro vezes menor do que o React, não precisa de um compilador como o Svelte, é fácil de trabalhar usando módulos e já vem com um router, um polyfill de Promises e uma função de XHR (que parece com o fetch).

![](https://i.imgur.com/X2DThiH.png)

O banco de dados do jogo ficou no Firebase. No princípio eu tinha tentado usar o Firestore, só para descobrir que a performance dele não é tão boa (pelo menos na forma que eu estava usando) e a API REST dele é complicada demais. Quando o jogo já tinha sido publicado aconteceu um problema e precisei migrar para o Realtime Database correndo. Acho que gastei menos de uma hora, mas mesmo assim foi complicado.

A lógica do jogo ficou no Now. A plataforma até que não é ruim: as funções serverless são rápidas e funcionam bem e o CLI dele permite testar tudo localmente, então desenvolver é muito fácil. Ainda há a opção de compilar tudo no servidor, o problema é que no meio do jogo essa função parou de funcionar justamente quando achei um bug na função de sincronização do jogo. Como eu pensei que eu iria conseguir resolver esse problema sozinho não reportei para o suporte, mas no fim das contas eu precisei, e eles demoraram um dia para arrumar isso. Só que aí já era tarde demais e acabei ficando sem as informações do progresso dos jogadores.

Ainda que a ideia do jogo é que o foco ficasse apenas no texto tentei colocar algumas imagens. A maior parte delas foram montagens que fiz no Photoshop, mas também fiz algumas plantas no Revit e umas renderizações no Blender.

![](https://i.imgur.com/U4ER88m.png)

Ainda estou usando o Blender antigo: o novo não funciona no meu computador. E esqueci de modelar o encaixe para abrir a caixa da bomba no lado direito da tampa... o jogo já acabou então não vou corrigir isso, isso não é uma legenda que é absurdamente fácil de ser corrigida, demora horas e horas para renderizar. ¯\\\_(ツ)_/¯

[Essa foto](https://i.imgur.com/OAkDXdC.jpg) é de um boneco do Excalibur que eu tentei fazer. Não deu muito certo - o bico ficou amassado e ele ficou sujo - acabei dando ele para a minha irmã. [Essa foto](https://i.imgur.com/fx5jKaC.jpg) editei para virar [essa aqui](https://i.imgur.com/trFJoNE.jpg), praticamente só joguei uma textura por cima e fiz uma correção de cores para parecer que ela é em um lugar completamente fechado (e não o corredor da faculdade).

Acho que é só isso que eu tinha que falar sobre isso. Até mais na semana que vem.