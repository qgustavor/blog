---
title: Automatizei o Let's Encrypt
date: '2017-07-18'
excerpt: Estive usando o Let's Encrypt desde que ele entrou no beta nos domínios de
  teste que tenho. Só que devido alguns problemas demorou anos...
---



Estive usando o Let's Encrypt desde que ele entrou no beta nos domínios de teste que tenho. Só que devido alguns problemas demorou anos para eu automatizar ele.

Alguns detalhes complicam a situação: a porta 80, do HTTP, está bloqueada, só posso usar a 443, a do HTTPS. Também o fato de eu usar o Apache no Windows atrapalha um pouco (pois o mais comum é usar o Apache em um Linux ou o IIS no Windows).

Antes eu usava certificados não são reconhecidos por navegadores (os *self-signed* ) então era complicado. Havia o CloudFlare, mas seria inseguro (pois ele é um MITM e não quero compartilhar o conteúdo deles) e nem seria possível pois, ao menos até onde vi, ele não possui uma função que redireciona a porta 443 para a 80 (só o oposto).

Mesmo assim eu sempre dava um jeito para fazer o Let's Encrypt funcionar. Os primeiros certificados que peguei foi usando um servidor gratuito, fazendo tudo manualmente. Depois passei a usar a verificação por DNS. Achei que iria conseguir automatizar dessa forma (já que eu uso o CloudFlare como servidor DNS e posso usar a API dela) mas não deu muito certo por causa de bugs.

Aliás, havia algo ruim nesse monte de processos manuais: o cliente que eu usava não suporta renovar certificados e nem reusar uma chave privada já existente. Eu tinha que ficar gerando chaves novas toda vez. Isso é ruim pois me impedia de usar algumas funções de segurança como *key pinning* .

Faz poucos dias achei uma solução melhor: em primeiro lugar troquei de cliente, em segundo lugar agora estou verificando domínios usando TLS e não DNS. Só que existe um detalhe nessa verificação: ela precisa de um servidor específico ou um hook. No Linux o cliente pode usar o Apache que já está rodando mesmo, mas no Windows não. Então eu desligo o servidor por alguns segundos, ligo o servidor que vem no cliente e faço a verificação. Depois só atualizar os certificados e religar o servidor.

E foi assim que finalmente consegui automatizar o Let's Encrypt.