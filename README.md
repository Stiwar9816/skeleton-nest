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

# Skeleton NestJS

NestJS base project, authentication and password recovery module with email sending integration, user modules ready using GraphQL and Postgres as database, authentication endpoints made in Rest and documented with Swagger.

1. Instalar **[NestJS CLI](https://docs.nestjs.com/#installation)** globalmente

2. Clonar el repositorio

3. Instalar las depencias con el comando:

```
yarn install, npm install o pnpm install
```

3. Clonar el archivo **`.env.template`** y renombrarlo a **`.env`**

4. Cambiar las variables de entorno

5. Instalar **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** según la versión de tu sistema operativo

6. Levantar la base de datos postgres

```
docker-compose up -d
docker-compose up (Para revisar los logs)
```

7. Levantar el proyecto en modo de desarrollo con el comando:

```
yarn start:dev
```

8. Construir imagen de docker:

```
docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build
```

9. Correr la iamgen de docker en local

```
docker-compose -f docker-compose.prod.yml --env-file .env.prod up
```

10. Correr imagen de docker desde el docker hub

```
docker run -p 3000:3000 --env-file=.env.prod stiwar1098/skeleton
```

## Cambiar nombre de la imagen de docker

```
docker tag <nombre app> <usuario docker hub>/<nombre repositorio>
```

## Subir imagen a docker hub

```
docker push <usuario docker hub>/<nombre repositorio>
```

## Nota

Por defecto, `docker-compose` usa el archivo `.env`, por lo que si tenemos el archivo `.env` configurado con las variables de entorno de producción, bastaría con ejecutar el siguiente comando

```
docker-compose -f docker-compose.prod.yml up --build
```

### Swagger Doc

```
localhost:3000/api/auth
```

### Api GraphQL

```
localhost:3000/graphql
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stack Usado

- NestJS
- Docker
- Postgres
- GraphQL
- Swagger
