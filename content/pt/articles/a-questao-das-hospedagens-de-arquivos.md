---
title: A questão das hospedagens de arquivos
date: '2015-09-22'
excerpt: Hospedar arquivos não é algo fácil, você tem que se preocupar com toda a
  parte técnica como servidores, disponibilidade, balanceamento, e a parte legal,
  como copyright, por exemplo.
---



Hospedar arquivos não é algo fácil, você tem que se preocupar com toda a parte técnica
como servidores, disponibilidade , balanceamento, e a parte legal, como copyright
por exemplo. Quando você faz disso um serviço então a situação complica por que você
tem uma fonte de dados completamente descontrolada, que são os usuários. Além disso
eles são tão diversos quanto os arquivos que podem ser colocados nos servidores,
onde cada um tem suas razões diferentes para usar o seu serviço e uma ideia de como
melhorá-lo ou usá-lo.

Uma vez já tive a experiência de programar um serviço de hospedagem de arquivos e
assim posso dizer que não é algo fácil. No meu caso eu procurei valorizar a usabilidade
em favor da segurança, ou seja, você poderia fazer embeds dos arquivos de mídia do
site via hotlink e compartilhar os arquivos facilmente como quisesse. Foi um projeto
que já fechou faz anos mas trouxe várias lições sobre o assunto.

Uma lição que eu tive é que sempre que for possível todo serviço será usado de forma
maliciosa, e isso vale para qualquer serviço: hospedagem de arquivos, encurtamento
de URLs, até mesmo aquele que a única coisa que você faz nele é mandar um "yo" para
alguém. Dessa forma acaba sendo obrigação de todo administrador desse tipo de serviço
oferecer uma forma de remover conteúdo malicioso dele contra a vontade de quem enviou
ele. Isso é um problema pois hospedagens são abertas e fechadas e muitos não conseguem
lidar com esse problema. No meu caso eu permiti hotlink de arquivos de mídia (imagens,
vídeos, audio) já que esses, ainda que possam representar um risco (desde difamação
até o controle de uma botnet) não é um risco para o computador (vírus); e para os
arquivos que são executáveis ou poderiam conter executáveis foi criada uma página
intermediária com a possibilidade de denúncia. Algo simples, mas resolveu o problema.

Só que, voltando ao caso de que cada usuário tem seus motivos, há aqueles que querem
ter segurança de maneira que não seja possível do provedor do serviço ter acesso
aos dados. Baseado nessa ideia se popularizou o serviço MEGA que implementou isso
mais como uma forma de se proteger de problemas judiciais porém foi uma grande melhoria
para os usuários já que dessa forma os arquivos só poderiam ser removidos caso a
chave que protege os arquivos fosse revelada.

Em prática, para quem usa o serviço de forma individual isso foi uma grande melhoria,
já que seria impossível de um filtro automatizado sair vasculhando nos arquivos e
assim na privacidade dele. Só que para quem usa o serviço de maneira compartilhada
isso não alterou nada: quem antes vasculhava a internet em busca de arquivos ditos
"ilegais" continuou trabalhando da mesma forma, o máximo que mudou é que dessa vez
não podem fazer esse processo com a ajuda do provedor de hospedagem, porém não foi
uma grande melhoria na segurança já que em prática os arquivos ao serem compartilhados
deixam de ter a segurança tão esperada.

Porém, como parece que tudo na internet só tende a piorar, recentemente esse serviço
está passando por várias mudanças. Como usuário preocupado com o que está acontecendo
fiz diversas comparações entre os códigos de cada versão lançada e a tendência é
realmente o que está sendo anunciado: nem se você for manter os arquivos só para
você mesmo dá para assumir uma segurança. Aliás, antes de mais nada o modelo do site,
desde a sua criação foi criticado por um problema simples: se você usa o site simplesmente
acessando o site você não tem segurança alguma, se o servidor for invadido não há
chave que resista isso; se você usa o site por uma extensão também não há segurança
já que se uma versão insegura for postada na loja não há ninguém que saiba parar
a atualização. De fato o principal problema nesse sistema é que ele é baseado em
partes que se atualizam automaticamente e que mesmo se isso fosse possível de ser
desativado elas nunca foram auditadas. É uma segurança cega baseada apenas no "ele
disse que é seguro".

Então me perguntam: eu não sou terrorista e nem coloco nada errado nesses sites,
por que o drama? Por que há pessoas que precisam disso. Quem busca conteúdo para
remover tem que sair procurando em todos os lugares, e enquanto a maioria não colocar
proteção no que publicam fica fácil dizer que quem coloca proteção é que está fazendo
algo errado. Se mudarmos essa ideia que só terrorista usa criptografia (no momento
você está usando e por acaso você é um?) vai proteger as pessoas que a usam para
fins melhores. E como que alguém precisaria se proteger se usa para o bem? Por que
o bem é relativo: você pode ter postado uma frase bonita no seu perfil esses dias,
mas quem disse que essa frase não seja ilegal em determinado país por que ela vai
contra aos conceitos de uma religião ou legislação? Enquanto não tenha acontecido
nada por que você possivelmente vive em um lugar que isso não cause problema algum
há aqueles que vivem e esses são os que podem fazer uso dessa tecnologia. Só que
não podem pois lá isso é proibido, e isso é justamente é proibido por que só terroristas
usam isso.

Com uma situação ruim dessa e com esse tipo de serviço sendo necessário, poderíamos
esperar quais soluções para esse problema? Alguém lançar um outro serviço que resolva
essas questões? A popularização do torrent (mesmo que ele tenha vários problemas
com privacidade)? Muito está sendo discutido e como pode ser imaginado não é nem
uma questão fácil e nem tem respostas fáceis no momento. Espero que isso seja resolvido
logo, mas tenho a impressão que voltaremos a época onde a maioria dos arquivos eram
passados por *sneakernet*.
