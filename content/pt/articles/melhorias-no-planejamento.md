---
title: Melhorias no planejamento
date: '2019-10-23'
excerpt: Recentemente postei a interface que eu uso para organizar os meus animes
  e, apesar disso, ela é bagunçada e difícil de entender. Queria...
---



Recentemente postei a interface que eu uso para organizar os meus animes e, apesar disso, ela é bagunçada e difícil de entender. Queria saber como posso melhorá-la, então resolvi testar algumas ideias.

Um problema que há na interface é que ela só mostra o nome dos animes (e outros conteúdos) dentro das barras ou no lado direito delas. Se o script conseguisse posicionar os textos de forma mais inteligente a interface ficaria mais limpa:

![Gráfico de Gantt com planejamento de animes a serem assistidos.](https://i.imgur.com/rPY9dcA.png)

Com essa mudança apenas agora é possível ver cada uma das filas sem que elas precisem ficar balançando para cima e para baixo para que os textos fiquem visíveis.

Outra possibilidades seriam melhorar o esquema de cores usado e usar cores menos vibrantes e usar cores que lembrassem os shows, usando as cores mais fortes e encontradas nas imagens promocionais deles. Acho que uma ferramenta para criar anotações no diagrama seria ótima também. Só tenho que me preocupar para não deixar a interface mais carregada ainda.

Será que uma ferramenta como essa seria boa para outras pessoas? Se sim estive pensando: ela não precisa ser um plugin do Taiga ou algo mais complicado que isso, é possível implementar isso como um site que, se conectando ao AniList ou Kitsu.

(O AniDB também seria uma possibilidade, mas a API e a interface dele são complicadas demais para mim. Talvez ele até tenha essa função e eu não saiba.)

Cada um poderia organizar suas listas de planejamento de forma mais organizada, deixar esse planejamento público (ou não) até receber notificações do tipo "Bom dia, o último anime que você assistiu foi o ‘XYZ’. Seguindo o seu planejamento, esses são seus animes do dia: …". Com uma API ainda por cima ficaria fácil alguém integrar um site desses ao Taiga e adicionar funções *mais úteis* .

Será que alguém se interessaria?