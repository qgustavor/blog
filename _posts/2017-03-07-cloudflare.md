---
tags: []
title: "CloudFlare"
date: 2017-03-07 03:51:38 +0000
excerpt: "O CloudFlare é um serviço curioso: de um lado ele melhora a segurança e deixa sites mais rápidos, do outro lado ele acaba sendo um ponto..."
---

O CloudFlare é um serviço curioso: de um lado ele melhora a segurança e deixa sites mais rápidos, do outro lado ele acaba sendo um ponto fraco e gera vários problemas. Mesmo assim eu gosto dele.

Não é difícil encontrar gente falando mal do CloudFlare, claro, tem gente de todo lado para reclamar dele:

* Quem gosta de segurança fala mal dele já que ele centraliza todos os dados de vários sites em um ponto, de modo que se ele for atacado vários serão prejudicados;
* Quem usa alguma VPN, principalmente o TOR, fala mal dele já que os dispositivos de segurança do CloudFlare geralmente bloqueiam esses tipos de usuários;
* Quem simplesmente usa um site que usa esse serviço fala mal já que nos últimos meses eles fizeram a besteira de não perceber um bug no código deles que possibilitou que várias informações secretas fossem espalhadas pela internet;

Mesmo assim eu gosto dele, sob uma única condição: use ele se for para um site estático, sem login, sem informações privadas, hospedado em um servidor bem ruim, que não tem funções simples como controle do cache ou suporte a HTTPS.

Um exemplo é o GitHub Pages: embora sejam de graça os servidores deles são bem problemáticos, não suportam HTTPS em domínios, controle de cache e os redirecionamentos só funcionam se for via HTML ou JavaScript. Como resolver isso? CloudFlare. E não se preocupe com segurança ou privacidade, ainda mais porque se você usa o GitHub Pages tudo o que estiver no site será publicado no repositório mesmo.

"Mas e se o GitHub Pages corrigir esses problemas?" Largue o CloudFlare e pronto. Infelizmente duvido que isso vá acontecer, isso é, talvez HTTPS eles implementem mas redirecionamentos e outras funções imagino que não.