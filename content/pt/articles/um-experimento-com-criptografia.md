---
title: Um experimento com criptografia ![](https://i.imgur.com/meHW1xa.jpg)
date: '2020-09-02'
excerpt: Já fiz vários experimentos com criptografia, como tentar fazer um site que
  detecta quando uma atualização chega, verifica a assinatura do...
---



Já fiz vários experimentos com criptografia, como tentar fazer um site que detecta quando uma atualização chega, verifica a assinatura do conteúdo e avisa o usuário quando a assinatura não é válida e [implementar o Speck da NSA](https://github.com/qgustavor/generic-speck).

O último experimento que eu fiz foi pegar o TweetNaCl.js e fazer uma versão dele que pode ser simplificada automaticamente dependendo das funções usadas: [https://github.com/qgustavor/tweetnacl-js](https://github.com/qgustavor/tweetnacl-js)

Tive essa ideia pois eu estava desenvolvendo um projeto usando o Vite e notei que no código havia algumas funções do TweetNaCl que eu não estava usando, então resolvi reescrever parte do código que lida como as funções são exportadas e o resultado foi o código acima.

O interessante é que isso não só permite que as funções não usadas (pelo menos a maior parte delas) sejam eliminadas mas também permite que as funções sejam renomeadas, o que eu acho interessante já que.

Em termos de segurança não sei se isso é mais seguro ou não. Deve ser, mas não posso confirmar nada. É um experimento interessante, de qualquer forma.