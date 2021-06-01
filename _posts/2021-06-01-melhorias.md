---
layout: post
tags: []
title: "Melhorias"
date: 2021-06-01 03:14:12 +0000
excerpt: "Nas postagens anteriores escrevi que coloco traduções das músicas nos animes que eu vejo na..."
image: https://i.imgur.com/PextPcl.png
---

Nas postagens anteriores escrevi que coloco traduções das músicas nos animes que eu vejo na Crunchyroll. Faço isso desde quando comecei a ver animes lá, então talvez seja por isso que por muito tempo não reclamei delas não serem traduzidas. São várias melhorias que faço nos animes que vejo, aqui estão algumas delas:

# Músicas

A forma mais simples para resolver esse problema é colocando a legenda de alguma fansub[^1] por cima. Eu geralmente não me importo se a tradução das músicas está em inglês: é um detalhe para eu aproveitar melhor o anime, não quero ficar revisando a tradução do grupo. Bem, mesmo deixando em inglês mesmo assim eu acabo revisando a tradução, por exemplo em Uchuu Kyoudai a Commie errou a tradução de "atsui" e em Shigatsu a Tsundere errou a tradução de duas linhas que mudaram em um episódio.

Outra opção é pegar o vídeo do grupo e colocar a legenda em português por cima. Isso ainda tem o benefício de melhorar a qualidade da imagem (mas ainda há o risco de piorar, o que notei com Atashin'chi, então é bom considerar as opções). É fácil e o meu script consegue lidar com isso praticamente automaticamente, só arrastar o arquivo do grupo na interface, clicar no anime para abrir as opções, colar o link da CR nas configurações de legenda e ele faz o resto. É prático.

No caso de animes que tenham mudanças de cenas, como Director 's Cut, por exemplo Net-juu no Susume, eu preciso usar o [Sushi](https://github.com/tp7/Sushi/), o que dá mais um pouco de trabalho, mas é melhor do que ter que ver o anime na versão velha. O anime é ótimo, mas nenhuma fansub boa pegou esse anime, então não pensem que há uma opção melhor do que essa.

Recentemente resolvi melhorar esse sistema e fiz o meu sistema arrumar legendas nas músicas mesmo para animes indo ao ar. Funciona assim: clico na configuração do anime, coloco para ele abrir um vídeo que já tem a legenda pronta e defino onde está o início e o fim da música e ele sincroniza a legenda para o resto dos episódios. Se só existir uma legenda em inglês posso traduzir usando ela como base. Se não tiver nenhuma legenda no vídeo eu posso traduzir eu mesmo, nesse caso dá trabalho mas quando você vê o resultado você se sente recompensado. 

Alguns exemplos de como fica:

![](https://i.imgur.com/1Nc8pg1.png)

![](https://i.imgur.com/4X4qJnh.png)

Talvez no futuro eu melhore esse sistema para que outras pessoas possam disponibilizar as traduções das músicas que elas fizeram. Considerando a capacidade das APIs de Web Audio e das extensões para Firefox e Chrome imagino que um sistema desses poderia funcionar como uma extensão diretamente no player da CR e outros serviços, assim o pessoal pode ter a praticidade de assistir os animes horas depois de ir ao ar sem ter que baixar nada e sem ter que ficar sem as traduções das músicas. Teria que ser algo prático para quem for consumir, só instalar a extensão e pronto, mas acho que é possível.

# Notas de tradução

Algo que também faço é transformar comentários em notas de tradução, [como já postei anteriormente aqui](https://qgustavor.tk/notas-de-traducao/). A ideia por trás disso é que se um tradutor precisa deixar um comentário na legenda para explicar alguma coisa para o resto da equipe, então por que não explica para quem está vendo o anime também? Como a maioria dos comentários nas legendas são uma explicação de alguma escolha feita na tradução, isso funciona muito bem!

Há um monte de notas deixadas pelo pessoal da CR para os revisores e outros membros das equipes. Uma delas é tão grande que gastou cinco linhas na imagem: pesquisaram muito sobre o assunto para fazer a tradução do anime e fizeram uma ótima tradução por causa disso! E depois o pessoal acha que o pessoal da CR não se esforça! 

Isso é tão simples de ser implementado que já implementei duas vezes, uma para funcionar diretamente no player da CR e outra para funcionar no meu script de organização de animes. Se alguém quiser eu posso publicar o primeiro script: só instalar no Firefox, tenho conta de desenvolvedor no site da Mozilla, é fácil.

# Honoríficos

Muitas traduções não tem honoríficos e, embora existam alguns casos que eu concorde com essa escolha, como animes que não ocorrem no Japão como Tendebu, em vários casos as tentativas de tirar os honoríficos criam legendas terríveis de ser assistidas.

Para resolver esse problema criei um script que corrige esse problema. A ideia é simples: sempre que esse problema acontece há uma outra equipe que pensa direito e deixa os honoríficos, geralmente a equipe americana ou a alemã, então esse script pega os honoríficos dessas legendas e usa eles para corrigir a legenda problemática.

Funciona muito bem, desde que a legenda de referência esteja parecida ele consegue corrigir muito bem as traduções. Em Jashin-chan Dropkick, por exemplo, coloquei ele para adicionar os honoríficos da tradução alemã na brasileira e funcionou muito bem, só teve um -san que ele deixou de colocar porque na fala em alemão eles mudaram a estrutura da fala.

Já estudei uma forma de resolver isso usando só o áudio, mas trabalhar com reconhecimento de fala em japonês é complicado, ainda mais quando o áudio não é apenas a voz mas há outras coisas ocorrendo no fundo. Eu testei a API do Watson, talvez eu consiga resultados melhores no futuro se eu aplicar algum pré-processamento no áudio para isolar a voz e talvez usar alguma outra API.

# Fontes

São duas mudanças pequenas, mas que me ajudam muito:

Eu coloco para carregar as fontes que o pessoal da CR usa nas legendas, mas que não são suportadas pelo player - como Cambria, Forte e várias outras - assim eu posso ver os animes com uma qualidade melhor do que várias outras pessoas mas sem precisar de ficar dependendo de sites que pegam as legendas da Crunchyroll e disponibilizam por aí. Esses sites não atualizam as legendas quando a CR corrige os erros delas, então quem usa esses sites geralmente tem que lidar com animes com legendas piores que os que seguem um rumo mais legal. Qualquer um que reclame de erros e faça isso precisa tomar vergonha e notar que a culpa é deles por estarem pegando as legendas de uma fonte imprópria.

A segunda mudança que eu faço é aumentar o tamanho das fontes. Eu vejo animes para relaxar, não para ficar com a vista cansada. Infelizmente parece que tem muita gente que gosta de usar fontes minúsculas e outras pessoas nem pensam nos benefícios de poder aumentar a fonte de acordo com a necessidade. A Funimation permite alterar o tamanho da fonte no player deles, mesmo que o sistema deles suporte estilização complexa, já que é o mesmo da HIDIVE, parece que eles têm preguiça de arrumar a estilização dos animes deles.

---


Ainda há mais uma melhoria que estou aplicando nos animes que vejo recentemente mas ela vai ficar para outra postagem. A postagem de quinta será sobre um anime que vi em inglês, gostei muito e esperei sair em português até que descobri que já tinham traduzido e foi ótimo. Até mais!

[^1]:  Fansubs gringas, claro: muitos brasileiros são pobres e não conseguem comprar computadores de verdade, então muitos grupos diminuem a qualidade das legendas, senão muita gente não vê os animes deles e procura outros grupos, o que diminui o lucro que o grupo ganha com doações.