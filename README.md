<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# MiniService-notification

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->


![ezgif-2-6395e017c3](https://user-images.githubusercontent.com/75326612/208764168-5f98b6ac-046b-4af0-8533-5c472a40246c.gif)




Projeto "MiniService-notification" - Um serviço de notifications, com alguns campos (contéudo, category, ID), usando alguns principios de arquitetura construido com Nest e Prisma. 


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* clonar o projeto com para a sua máquina local. (git clone https://github.com/Thiago-Mota-Santos/Miniservice-notification.git)
* verificar de ter o node.js instalado, juntamente com o gerenciador de pacotes (npm ou yarn)


## 🚀 Instalando <MiniService-notification>

Para instalar o (MiniService-notification) , siga estas etapas:



Windows:
```
clonar o projeto com para a sua máquina local. (git clone https://github.com/Thiago-Mota-Santos/Miniservice-notification.git)
cd Miniservice-notification (acessar a pasta do projeto)
npm install (para instalar as dependências do node.js na sua máquina)
npm run start:dev (iniciar o projeto)
npx prisma studio (para visualizar na interface do prisma as tabelas, dentro do navegador)

 
```

## ☕ Usando <MiniService-notification>

Para usar (MiniService-notification), siga estas etapas:
  
* Utilize alguma ferramenta para fazer as operações HTTP, no caso dessa aplicação : (get, post, patch)
* Os casos de uso (use-case) para essa aplicação se definem em : 
   - Criar uma notificação; 
   - ler uma notificação;
   - Desmarcar uma notificação como lida;
   - Cancelar uma notificação;
   - Contar as notificações;
   - Buscar uma notificação por ID.
 * Use algum serviço para mandar as requisições (usei o Insomnia como exemplo):
   - Criar uma notificação - metódo GET - /notifications - enviar um json com envolvendo a estrutura ("content", "category", "recipientId"),
 {
    "content: "content example",
    "category" "category example",
    "recipientId" "uuid",
 }
  Ps.:: "RecipientId" precisa de um ID único, em softwares como insomnia há como criar um ID único universal
     
    - ler uma notificação - metódo PATCH - /notifications/o número do ID da notificação/read
    (O id da notificação será retornada no json quando você criar uma notificação, use-a se quiser)
    - Desmarcar uma notificação como lida - metódo PATCH - /notifications/o número do ID da notificação/unread;
    - Cancelar uma notifificação - metódo PATCH - /notifications/o número do ID da notificação/cancel;
    - Contar as notificações - metódo GET - /notifications/count/from/o número do ID da notificação/;
    - Buscar uma notificação como ID - metódo GET - notifications/from/o número do RecipientID da notificação (Quando uma notificação é criada, também há no JSON um 'recipientId' que se diferente do ID, use-o para retornar uma notificação).
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
