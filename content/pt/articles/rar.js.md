---
title: rar.js
date: '2017-10-10'
excerpt: Como já postei anteriormente há um povo que insiste em usar aquela ferramenta
  que parece uma piada, o WinRAR. Por causa disso resolvi...
---



Como já postei anteriormente há um povo que insiste em usar aquela ferramenta que parece uma piada, o WinRAR. Por causa disso resolvi trabalhar em uma biblioteca de JavaScript para lidar com RAR.

Peguei a biblioteca rar.js e fui arrumá-la para se adequar melhor ao que eu estava precisando. O maior problema dela é que ela lida com operações de I/O, ou seja, a maior parte dela é dedicada a apenas ler arquivos e não abrir o RAR.

Então fui arrumando:

* Primeiro apaguei todo o código que fazia a leitura de arquivos;
* Depois passei o código para o estilo Standard;
* Então converti as classes usando `prototype` em classes ES6;
* Só que percebi que as classes não eram necessárias e reescrevi para não usá-las;
* Coloquei para exportar duas funções: uma que lê o RAR e retorna uma lista de arquivos e outra que extrai um arquivo;
* E coloquei para aceitar buffers ou streams como forma de entrada.

Com essas mudanças melhorei a performance da biblioteca e deixei ela mais rápida pois sem as classes o gasto de memória é reduzido, e utilizando as streams não é necessário carregar o arquivo todo na memória.

Como sempre o código-fonte dela está no repositório: https://github.com/qgustavor/rar.js

Por outro lado desde que terminei de fazer essas alterações não utilizei a biblioteca já que eu prefiro evitar o povo que usar RAR do que ficar aguentando eles.

