---
title: JavaScript no AutoCAD - Parte 2
date: '2017-07-25'
excerpt: Como disse antes eu iria dividir aquela postagem em duas partes, já que ela
  estava ficando longa. Resumindo o que aconteceu nesse meio...
---



Como disse antes eu iria dividir aquela postagem em duas partes, já que ela estava ficando longa. Resumindo o que aconteceu nesse meio tempo: as coisas não são nada boas.

Vejamos, ao que entendi a API foi lançada no AutoCAD 2014. A última versão lançada é o 2018. Provavelmente deve ter muita coisa na internet a respeito, correto?

![inline image](https://res.cloudinary.com/qgustavor/image/upload/v1500954700/kb5hhryyc5yd4mi6k7bv.png)

APENAS sete resultados. Só. Se pesquisar pela função mais básica para manipular objetos na API só sai isso. E para piorar: praticamente nenhum resultado funciona.

O que eu acho que aconteceu é simples: lançaram a API, ninguém se interessou, e jogaram ela em um canto sem nunca adicionarem mais nada nela. Aliás, em um dos resultados mostrou a triste situação da API: é mais fácil você gerar um código LISP e rodar do que usar qualquer comandos dele.

Só tem um problema: não tem como ver os resultados dos comandos. Tudo bem que você pode criar um hack, como salvar o resultado em um objeto e depois pegá-lo usando o .getProperties(), ou ainda colocar na área de transferência e tentar achar uma forma de pegar isso pela API padrão do Chrome… só que isso está bem errado, não está?

No fim das contas programei cinco comandos que irão me ajudar muito no meu dia a dia, por outro lado eu queria ter ido bem além desses cinco comandos. Onde travei? Não consigo manipular desenhos que não sejam o já carregado. Se eu desativar o diálogo de abertura de arquivos dá para eu abrir outro arquivo, processá-lo e depois fechá-lo e voltar para o arquivo anterior. Por outro lado, por que tudo isso é tão complicado?

Outro problema: se por um lado o código verifica um monte de coisas, por exemplo se os tipos das variáveis estão certos - o que para mim é um desperdício de memória já que poderiam ser usados objetos simples para tudo e não classes - há certos casos que não são verificados o AutoCAD simplesmente trava e fecha.

Mas mesmo em meio a tantos problemas achei uma coisa boa: eu estava procurando uma forma de pegar o resultado de uma função LISP, até agora não consegui fazer isso, mas descobri que existem variáveis que não aparecem na lista de variáveis do sistema (aquela do Express Tools) mas podem ser lidas pela função Acad.SystemVariableCollection.getSystemVariable(). O bom é que alguns comandos, como o comando de área por exemplo, guardam os seus resultados nessas variáveis, então, mesmo que não seja o que eu estava esperando isso vai facilitar muito. Ainda não vi todas as variáveis, mas se uma delas guardar a resposta do último comando posso criar uma ponte entre o JavaScript e o LISP.

No caso estou querendo criar essa ponte para ter acesso ao sistema de arquivos, já que as funções que fazem isso em JavaScript não funcionam de jeito nenhum (parece que não terminaram de ser implementadas). Já escrevi muito nessa postagem, continuo na próxima assim que eu tiver mais detalhes sobre essa jornada.