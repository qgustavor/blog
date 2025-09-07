---
title: Choo
date: '2017-01-10'
excerpt: O Choo é mais uma biblioteca de MMVC para JavaScript. Seus grandes diferenciais
  são oferecer views em um formato fácil de entender porém...
---



O Choo é mais uma biblioteca de MMVC para JavaScript. Seus grandes diferenciais são oferecer views em um formato fácil de entender porém usando só JavaScript (nada de JSX ou templates), controllers baseados em reduxers, auxílios com XHR, é extremamente modular e ainda por cima ocupa nada de espaço.

De princÍpio gostei da ideia, principalmente por que dá para usá-lo sem precisar de um transpiler (que não gosto por que se não configurar direito, o que é fácil, ficam lentos demais), desde que o navegador suporte ES6.

Só que mesmo com essa modernidade toda ele peca em vários pontos: primeiro ele usa CommonJS e não módulos ES6. Depois eles recomendam usar o vovô Browserify. E em terceiro lugar a implementação de DOM diff dele não é otimizada para várias situações.

Tentei usá-lo em um site que fiz: ficou tão bagunçado que pensando agora talvez fosse melhor ter usado React, Vue ou até mesmo o jQuery. Eu teria menos dores de cabeça tentando resolver alguns bugs.