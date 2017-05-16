---
layout: post
tags: []
title: "MKV Extract"
date: 2017-05-16 03:51:38 +0000
excerpt: "Já fiz um site onde é possível baixar arquivos do MEGA sem ter que passar por aquela interface pesada e complexa do site original, o Direct..."
---

Já fiz um site onde é possível baixar arquivos do MEGA sem ter que passar por aquela interface pesada e complexa do site original, o Direct MEGA. Também é possível visualizar alguns tipos de arquivos direto do navegador, como vídeos, músicas e imagens.

Porém me deparei com um detalhe: é comum encontrar pessoas disponibilizando vídeos pelo MEGA em MKV, porém nenhum navegador que eu conheço suporta esse formato. O que resolvi fazer? Investigar uma forma de resolver esse problema.

Comecei lendo as especificações do formato. Ainda não consegui resolver o problema, mas consegui desenvolver uma ferramenta que roda direto no navegador e consegue trabalhar com arquivos nesse formato: [https://qgustavor.github.io/mkv-extract/](https://qgustavor.github.io/mkv-extract/) 

Essa ferramenta faz apenas o básico: ele abre o arquivo e extrai o conteúdo de algumas partes dele, no caso os anexos (geralmente fontes, embora as vezes seja possível encontrar imagens e outros conteúdos) e as fontes. Não coloquei para extrair o vídeo e o vídeo já é mais complicado, talvez eu não implemente isso já que é bem provável que eles não funcionem sem um container.

Enfim, essa é só uma etapa: quem sabe no futuro estaremos assistido vídeos MKV direto do navegador? Seria prático, não é?