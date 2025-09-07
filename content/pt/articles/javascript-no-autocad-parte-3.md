---
title: JavaScript no AutoCAD - Parte 3
date: '2017-08-15'
excerpt: 'Vou encerrar essa série de postagens. Bem, eu já devia ter encerrado. Resumindo:
  não perca tempo mexendo com JavaScript no AutoCAD, aprenda...'
---



Vou encerrar essa série de postagens. Bem, eu já devia ter encerrado. Resumindo: não perca tempo mexendo com JavaScript no AutoCAD, aprenda Lisp.

O que aconteceu da última postagem até agora: terminei de implementar a função que eu queria no AutoCAD. Com ela deu para economizar um bom tempo arrumando os projetos, o que é bom. Por outro lado como a API é bem ruim, principalmente se comparada a do LISP, não vale a pena gastar tempo com isso. Se eu for listar as vantagens de usar JavaScript só há três, uma quanto ao aprendizado, outra quanto a compatibilidade e quanto a funcionalidade.

Quanto ao aprendizado usar JavaScript é mais fácil para quem está acostumado com a linguagem é bem melhor do que aprender outra. Também é fácil de encontrar cursos. E, claro, como o JavaScript é a linguagem suportada pelos navegadores para uso nos sites é normal que muita gente conheça ela.

Quanto a compatibilidade dá para usar o Babel e o WebPack e usar os módulos do NPM, não que não seja possível usar bibliotecas de Lisp porém que há uma quantidade bem maior de bibliotecas JavaScript e usá-las e é bem mais fácil. É possível usar HTML e CSS para criar paletas, que servem como uma interface gráfica. Existem também várias ferramentas que compilam outras linguagens (inclusive Lisp) para JavaScript (já o contrário é bem difícil de achar).

E finalmente quanto à funcionalidade o código de JavaScript roda no contexto global do AutoCAD, isso pois ele roda em uma versão embutida do Chrome, e assim ele pode executar funções em diferentes desenhos. Já o Lisp roda no contexto do desenho e assim não tem essa capacidade.

Porém são só essas as vantagens, no resto fazer praticamente qualquer coisa precisa de muita gambiarra, a maioria delas envolvendo Lisp. Então ao invés de ficar mexendo com gambiarra é mais fácil aprender Lisp de uma vez e simplificar a vida.