---
tags: []
title: "Criptografia como um serviço"
date: 2020-04-29 03:51:39 +0000
excerpt: "Eu uso dois serviços que vendem a ideia de que são seguros por usarem criptografia: MEGA e Keybase. A impressão que eu tenho de ambos:..."
---

Eu uso dois serviços que vendem a ideia de que são seguros por usarem criptografia: MEGA e Keybase. A impressão que eu tenho de ambos: melhor desconfiar.

Acho interessante os dois pois a forma que eles começaram e como se desenvolveram é semelhante:

* Ambos começaram com uma ideia relativamente válida, como um serviço de hospedagem de arquivos com criptografia e um serviço de organização de chaves criptográficas usando redes sociais como garantia de segurança.
* Ambos tornam o parte do código público na tentativa de garantir que não estão fazendo nada estranho.
* Passado um tempo ambos começaram investir muito em extensões e aplicativos instaláveis (seja em dispositivos portáteis ou computadores).
* Ambos deixaram as ideias originais e começaram a focar em questões menos importantes, como a criação de um chat.

É impressionante que os dois serviços tiveram a mesma ideia de implementar um chat no serviço deles. Já não basta tantos sistemas e eles resolveram criar mais?!

![](https://i.imgur.com/RJmwk57.png)

E o que é pior: acha que dá para confiar neles?

Eu mantenho [uma biblioteca do MEGA para JavaScript](https://github.com/qgustavor/mega/) e a impressão que eu tenho é que não dá para confiar no MEGA. A biblioteca só suporta as funções de arquivos, porém com base no que eu já vi a segurança deles é no mínimo questionável, envolvendo desde operações usando AES-ECB, autenticação via *prefix-then-encrypt* , uso de RSA de forma não usual e operações de PBKDF também não usuais. Será que a implementação do chat do MEGA é seguro? Possivelmente não, mas antes vamos falar do Keybase.

O Keybase não suporta *forward secrecy * por padrão. Sério. **Até o WhatsApp faz isso melhor do que eles!** Eles argumentam que a única forma de suportar é não armazenando os registros do chat e, por isso, só permitem usar *forward secrecy * nas mensagens auto-explosivas. Por causa disso a primeira coisa que eu configuro no chat do Keybase é forçar ele a explodir as mensagens.

Não quero que ele fique assinando minhas mensagens! Prefiro perder o histórico de mensagens do que ter um registro assinado digitalmente das minhas mensagens. Para quê eu vou querer um registro das mensagens enviadas em um chat "supostamente seguro e privado", ainda por cima assinado! Claro, a única conversa que eu tenho no Keybase é entre mim e o meu bot. Quem mais usaria um serviço desses?! Spammers? Provavelmente.

A implementação do chat dos dois deve ter o mesmo problema: ambos devem implementar apenas uma criptografia simples só para inglês ver, mas deixam de considerar uma quantidade enorme de questões, diferente de protocolos melhores, como o Signal. Não é raro esses problemas acontecerem: [o LINE](https://linecorp.com/en/security/encryption/2019h1) por exemplo tem o mesmo problema, suporta criptografia ponta-a-ponta mas só suporta forward secrecy na comunicação com o servidor e não entre usuários.

E o que mais me incomoda é ver o quanto eles estão se esforçando para baixar os clientes deles: a página inicial do Keybase tem **oito botões de download** !

Por que estão fazendo isso? Como esses clientes conseguem ter acesso a bem mais informações e recursos que navegadores geralmente não suportam isso permite que eles possam fazer o que eles bem quiserem. Um dia o Keybase reiniciou o meu computador sem dar nenhum aviso! **É pior do que o Windows!** E isso (provavelmente) foi um bug: pensa o que pode ocorrer se eles resolverem ir para o lado negro da força?

Para o MEGA há clientes abertos criados de forma independente e, sendo mais simples que o cliente oficial, são mais fáceis de serem verificados para garantir que não tenham backdoors. Já para o Keybase é mais complicado, pois nem as bibliotecas fornecidas por eles próprios suportam funções básicas como [assinar mensagens](https://github.com/keybase/node-saltpack/issues/5), um problema que não foi resolvido desde 2017 até hoje.

Fica a dica: desconfiem!

