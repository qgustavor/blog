---
title: Standard
date: '2016-08-02'
excerpt: 'O que é isso? Um conjunto de regras de estilo de programação para JavaScript.
  Por que "padrão"? Pois não há configurações: aceite as regras...'
---



O que é isso? Um conjunto de regras de estilo de programação para JavaScript. Por que "padrão"? Pois não há configurações: aceite as regras e seja feliz. Por que estou postando sobre isso? Por que gostei da ideia, mas tenho minhas dúvidas.

Ele não é tão diferente dos estilos que já existiam, por exemplo define que devem haver espaços em determinados lugares, o que melhora a legibilidade. Acontece que tem uma regra bem diferente do comum: não usar ponto e vírgula, exceto quando necessário (no *for* e antes de (, [, ‘, " e ` quando estiverem no início da linha).

Acontece que várias linguagens usam esse caractere para separar comandos, como PHP e Perl, que exigem o uso delas. JavaScript por outro lado permite que a separação seja feita separando se comandos em linhas diferentes.

Como já haviam muitas linguagens separando por ponto e vírgula o normal foi continuar usando. Por causa disso muita gente não gostou dessa regra. Os argumentos foram desde o "não vou me acostumar com isso" até os de que pensaram que isao acabaria causando bugs, desconhecendo a capacidade da linguagem.

Por mim ocorreu o oposto: essa limitação fez com o que eu escrevesse ficasse mais fácil de entender, reduzindo bugs. Vi que vários projetos também adotaram esse estilo. Só que é algo meio hipster, meio "olha mãe! sem os ponto e vírgula!". As vezes uso ele, as vezes não… bem, na maioria das vezes não.