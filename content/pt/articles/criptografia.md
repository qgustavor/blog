---
title: Criptografia
date: '2016-09-06'
excerpt: Todo mundo sabe o que é criptografia, que é tão antigo que vem desde o tempo
  dos romanos e que é melhor não mexer com isso, se mexer melhor...
---



Todo mundo sabe o que é criptografia, que é tão antigo que vem desde o tempo dos romanos e que é melhor não mexer com isso, se mexer melhor não publicar, e se publicar só depois da aprovação de especialistas na área¹. Antigamente era algo restrito a exércitos e terroristas me de vinte anos para cá é algo comum na vida de qualquer pessoa… embora boa parte não soubesse disso.

Para ler isso seu computador teve que usar criptografia, isso é, se não tiver um https:// na barra de endereços do seu navegador pare agora e peça para alguém tirar o vírus do seu computador. Hoje até mesmo um blog estático tem esse tipo de segurança. Sem essa segurança que se não tivesse segurança poderia sofrer ataques onde o conteúdo deles é alterado, propagandas inseridas, falhas exploradas, e tudo mais.

Acontece que várias das tecnologias envolvidas para isso tudo funcionar, que uma vez foram consideradas de nível militar, faz décadas que estão disponíveis para o público. E antes que alguém venha falar que "isso é muito complicado, são centenas, talvez milhares de linhas de código" vários desses algoritmos são bem simples. Por exemplo, devido a lei que proíbia exportação de criptografia nos EUA, existem vários modelos de camisa que explicam (em 5 linhas de pseudo-código) ou dão o código necessário (em 4 linhas de perl) para o algoritmo RSA funcionar. A biblioteca TweetNaCl tem 25 funções de criptografia porém é tão pequena que cabe em 100 tweets.

Por que falar disso? Obviamente por causa da discussão recente sobre o assunto. Isso é, um serviço fala para todo mundo que usa criptografía, passa por problemas e no final o que é mais falado? Que a culpa é da criptografia. No final a culpa era, adivinhem, do modelo de custo mínimo do serviço: enquanto a lei local exige que os serviços mantenham dados de seus usuários por um tempo eles não salvam nada, e não é por que usam criptografia e sim para economizar dinheiro em memória e servidores.

Aí sempre aparece um e pergunta “Armazenar o quê? Está tudo criptografado!”: nem tudo está criptografado, por que nem tudo dá para ser criptografado. Por exemplo: tem como você esconder que você usou determinado serviço? Não, nem Tor resolve esse problema, mesmo com toda a segurança dele dá para saber que alguém está usando ele. Outro exemplo: dá para esconder quando você usou algum serviço? Também não, no máximo dá para disfarçar os horários agendando ações para o futuro.

Agora, vocês acham que um serviço de mensagens terá a mesma tecnologia do Tor para impedir que a rede envolvida na transmissão das mensagens saiba o caminho que as mensagens passam? Isso é, o conteúdo não importa, ele está criptografado de qualquer forma, e sim o caminho delas que importa. Claro que não! Acham que criptografia ajuda alguma coisa? Hoje em dia é bem capaz que pessoas já morram pelos metadados de suas mensagens, o conteúdo delas não importa.

E como isso se aplicaria aqui? Digamos que *a polícia foi invadir o morro* e do nada um sujeito X começa a mandar centenas de mensagens para o sujeito Y. Ninguém sabe o que tem nessas mensagens, mas dá para ter ideia do que são. Agora alguém pode dizer: “deve ser coincidência”. Bem, se o serviço guardasse os dados dos usuários poderiam mostrar que em nenhum momento antes ou depois os dois sujeitos se comunicaram tanto quanto naquela situação, ou seja, não era tanta coincidência. Acontece que esse serviço assume uma arquitetura de custo baixo e por isso não guarda praticamente nada.

Enquanto isso estou tentando implementar criptografia nos sites que eu crio: o adorai já verifica assinaturas de cada página (bem o código para isso está pronto, mas está desativado devido alguns bugs), o Safe MEGA e Direct MEGA obviamente tem praticamente metade do seu código ocupado por criptografia. Até o minoshirokin usa criptografia! Minha regra é: usar criptografia quando possível e tratar ela como algo normal, isso é, se nenhum usuário sabe se o serviço usa PNG, SVG ou FLIF por que ele precisaria saber se o serviço usa criptografia? Só se for mexer nas configurações avançadas por algum motivo ou ler as licenças open-source (para depois ligar nos telefones delas reclamando que algo não funciona).

¹ Tem que ser na área de criptografia e segurança, matemáticos e engenheiros que “sabem o que estão fazendo” não valem.