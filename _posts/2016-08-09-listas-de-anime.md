---
layout: post
tags: []
title: "Listas de anime"
date: 2016-08-09 03:09:03 +0000
excerpt: "Por questão de organização existem as listas, que podem ser de séries, filmes, coisas a se fazer, qualquer coisa. Já falei de como o Keep..."
---

Por questão de organização existem as listas, que podem ser de séries, filmes, coisas a se fazer, qualquer coisa. Já falei de como o Keep ajuda a eu me organizar e agora vou falar de como organizo os animes que vou assistir. Organizar animes em listas é igual programar em JavaScript tentando seguir as últimas tendências: você tem várias opções e passa mais tempo tentando descobrir qual é a melhor opção do que fazendo o que pretendia fazer.

Tem o site mais tradicional, que todo mundo usa, que teve a liderança e tudo mais, mas tem um estilo ultrapassado e não está conseguindo acompanhar as mudanças.Recentemente tentou dar uma melhorada mas parece que só está piorando, isso é, os únicos que gostaram das mudanças são empresas que traduzem anime sem qualidade e os que não ligam para qualidade. Nunca teve aplicativo oficial, não tem suporte a HTTPS e mesmo nessa melhora ainda mantiveram uma API velha baseada em XML que não permite nem o básico de funcionalidade esperada para ela. Por ser a que tem mais usuários também é a mais atualizada. É a melhor opção para quem quer organizar as listas sem se preocupar com animes raros faltando, para quem buscar clientes e ferramentas para auxiliar, e também caso optar por um lado mais social, mostrando sua lista para os amigos.

Há outro de certa forma também tradicional, porém que não está indo para o mal caminho. Ele também tem um estilo de site antigo, embora haja a possibilidade do usuário poder personalizar ele. Em questão de segurança ele está na frente do anterior: suporta HTTPS. Um quesito importante sobre ele é que o desenvolvimento dele é baseado na ideia de "que tudo seja o mais barato o possível", ou seja, eles não esperam ficar dando bola para empresas e assim tirar recursos que elas não gostam, por outro lado não vão colocar nada que irá gerar custos para eles. Concluindo: um dos grandes problemas desse site é a API, baseada em UDP, por que dizem que assim fica mais barato. Só tem um problema: por causa dessa limitação (até onde vi) não há clientes para esse site, e implementar é muito dificultoso. É a melhor opção para quem quiser ficar longe da ideologia “os EUA são o centro do mundo e o Japão tinha é que aprender a falar a língua superior, inglês, e passar a usar ela para tudo”, assim como ter acesso a mais informações dos animes, como dados detalhados dos personagens, episódios, além poder usar uma bela pesquisa.

Existem também sites novos, que procuram seguir um estilo mais *Facebook* com perfis personalizáveis (isso é, dá para colocar uma imagem no topo do perfil), funções sociais, entre outras funcionalidades *modernas* . Um deles é tão moderno que tem até opção de colocar com quem você é casado… isso é, qual é a sua waifu, ou husbando, como preferir. Ele, claro, suporta HTTPS e tem uma API fácil de trabalhar. Também tem clientes, logo dá para atualizar sem ter que abrir a página, (ao menos no momento) no celular. Só que tem um problema: ele já segue a ideologia “os EUA são o máximo” faz tempo. Exemplo: qualquer desenho que pareça com anime é aceito lá, como Avatar, Steven Universo e cia. Suponho que eles aceitariam Turma da Mônica Jovem se lançarem um anime dele, e se já lançaram só pedir que eles adicionam. Também, no momento, ele não mostra o nome em japonês dos animes, só romaji, e em alguns deles o nome em inglês que é o principal. Por causa disso parece que ele é muito ligado as empresas de tradução, logo falta muita informação nele: não dá para saber qual é a ordem das temporadas, não há muita informação sobre a produção, episódios, etc. Uso ele por que suporta HTTPS e tem um cliente, dessa forma posso atualizar a lista pelo celular em uma rede insegura. Um script no meu computador usando a API desse site recebe a mudança e atualiza os outros sites que uso (que é o primeiro que eu falei, já que o segundo tem uma API chata de trabalhar, mais do que o primeiro).

Só que, como bibliotecas JavaScript, nunca é o suficiente: ainda há mais sites de lista de anime. Só tem um problema com eles: como são menos famosos eles tem menos usuários e assim volta e meia ficam desatualizados. Se você quiser colocar que assistiu algo raro ou que lançou hoje melhor anotar no Keep (ou no bloco de notas, como preferir) e esperar que ele seja adicionado.

Já escrevi muito. Não quero citar nomes também por que talvez seja óbvio (o nome de um desses sites está na barra lateral). As vezes fico pensando em fazer outro desses sites, já que nenhum sendo suficientemente bom para tudo, mas pensando bem é bem difícil que um site consiga isso. Bem, é isso o que eu penso disso tudo.