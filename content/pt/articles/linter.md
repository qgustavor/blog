---
title: Linter para legendas
date: '2020-03-11'
excerpt: Ano passado resolvi trabalhar em um linter para legendas. Embora não desisti
  completamente desse projeto, no momento ele está na gaveta....
---



Ano passado resolvi trabalhar em um linter para legendas. Embora não desisti completamente desse projeto, no momento ele está na gaveta. Como na última postagem falei sobre o patcher hoje vou falar sobre o linter.

*Mas antes, o que é um linter?*

Não tem na Wikipédia em português (alguém bem que poderia criar um artigo lá), então vou tentar explicar: é um programa que procura alguns erros e problemas em código. Uso muito esses tipos de programas para encontrar erros que acabo deixando passar e para manter a organização do meu código no modo que eu gosto.

Desse modo a minha ideia era criar um programa que pudesse encontrar erros e problemas em legendas. Um programa como esses poderia...

* Identificar erros de digitação e revisão, usando ferramentas como LanguageTool;
* Identificar problemas de estilização como textos ocultos ou borrados não-intencionalmente;
* Identificar problemas envolvendo fontes, como quando algum caractere não é suportado pela fonte ou quando alguma fonte usada apresenta algum tipo de limitação ou problema;
* Identificar problemas de timing;
* Alertar o uso de expressões incomuns, palavras pouco usadas e traduções literais como "estava me sentido", “marulha” e “nado grátis”;
* Verificar se comentários não são usados - útil caso alguém use algum sistema separado para revisar as legendas - e se nenhuma formatação inválida foi usada.

---


Já havia um tempo que eu queria fazer esse programa e, por uma certa influência da HIDIVE, resolvi colocar essa ideia em prática. Primeiro fiz um módulo e uma interface de linha de comando e, usando essa interface, fui ajustando o funcionamento dele.

Com o tempo notei que seria bom também fazer uma interface gráfica para simplificar o uso. Usei, novamente, o Mithril, o que me ajudou muito. Também peguei uma biblioteca de CSS, o Spectre, e deixei praticamente tudo o que veio delas nos padrões.

![](https://i.imgur.com/gqTT19D.png)

Como dá para ver ela está em inglês, mas funciona em português. O objetivo era que o mesmo código servisse para qualquer língua e, como a maioria dos projetos open-source que conheço é em inglês, comecei escrevendo tudo em inglês mesmo.

Como podem ver, no caso desse exemplo, ele só encontrou problemas usando o LanguageTool. Ele lista todos os problemas encontrados e, como mostrado acima, é possível ver em detalhes onde o problema ocorre se clicar no erro. Erros de digitação são agrupados para simplificar a separação de nomes próprios de erros, assim como identificar quando um nome próprio é digitado de forma errada.

Assim com um linter para código ela **não** substitui uma boa revisão manual, mas ajuda identificar problemas comuns que acabam passando por falha humana.

---


O desenvolvimento dessa ferramenta está parado já faz alguns meses, por vários motivos, mas principalmente porque não tenho muito tempo livre. Por outro lado imagino que uma ferramenta como essa poderia ser usada por empresas que trabalham com legendas, como a Crunchyroll, e não duvido que a Netflix já tenha desenvolvido algo parecido para ela. Tenho esperanças de que um dia essa ferramenta será útil.

Nos vemos semana que vem!