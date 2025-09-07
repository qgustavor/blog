---
title: Folder2RSS
date: '2016-02-09'
excerpt: Criei um script que gera um feed RSS baseado em uma pasta do MEGA ou Google
  Drive.
---



Adaptei o script que avisa quando novos episódios de anime são lançados
através de pastas do MEGA e Google Drive e fiz uma que transforma as pastas
em feeds RSS. No fundo o funcionamento da ferramenta continua o mesmo,
rodando no Google Apps Script, porém com essa alteração agora ela é uma
ferramenta de uso público, fácil de usar e que funciona com qualquer leitor
de RSS já existente.

Uma dúvida aparece: se as fansubs geralmente já tem um feed RSS por que
gerar outro em cima das pastas? O primeiro motivo por que nem sempre elas
tem um feed de RSS, ou quando tem as vezes ele só mostra parte da postagem
e nunca o link direto para o arquivo; outro motivo é pela segurança, já que
nem toda fansub tem HTTPS e carregar o feed baseado nas pastas garante que
só conexões seguras serão usadas.

Como o script roda no Apps Script ele gera um link enorme, para facilitar o
uso encurtei ele no TinyURL, ficando assim:
`https://tinyurl.com/folder2rss?[id da pasta]`. Só adicionar o endereço no
seu leitor de RSS favorito e pronto.

No caso do MEGA o ID da pasta é a parte depois do `#F!`, ou seja,
`https://mega.nz/#F!exemplo!exemploexemploexemplo` vira
`https://tinyurl.com/folder2rss?exemplo!exemploexemploexemplo`. Se quiser
mais segurança não precisa de colocar a chave da pasta no link, no exemplo
só `https://tinyurl.com/folder2rss?exemplo` já funciona (só não mostra os
nomes dos arquivos e da pasta).

No caso do Google Drive é só pegar a parte depois de `id=`, ou seja,
`https://drive.google.com/folderview?id=exemploexemploexemploexemplo` vira
`https://tinyurl.com/folder2rss?exemploexemploexemploexemplo`.

Finalmente, caso o TinyURL não funcione por algum motivo o link completo do
script é esse:
https://script.google.com/macros/s/AKfycbyo-ax54NOhoKzi0NPKEijQaLW3-8NtLTKCoBaZyAZn5RYCjLze/exec
A forma de usar é a mesma da versão encurtada.
