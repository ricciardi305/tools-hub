<h1 align="center">Tools HUB</h1>

<p align="center">Aplicação para gerenciamento de ferramentas</p>

<p align="center">
    <img src="https://img.shields.io/github/license/ricciardi305/challenge-bossabox"/>
    <img src="https://img.shields.io/github/stars/ricciardi305/challenge-bossabox"/>
    <img src="https://img.shields.io/github/forks/ricciardi305/challenge-bossabox"/>
    <img src="https://img.shields.io/github/repo-size/ricciardi305/challenge-bossabox"/>
    <img src="https://img.shields.io/github/last-commit/ricciardi305/challenge-bossabox"/>  
</p>

<h4 align="center">
   🚧 Tools HUB ⚙️ Em construção... 🚧
</h4>

<hr/>

<p align="center">
    <a href="#sobre">Sobre</a> •
    <a href="#features">Features</a> •
    <a href="#pré-requisitos">Pré-requisitos</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#autor">Autor</a>
</p>

# Sobre

Tools HUB é uma aplicação criada a aprtir de um desafio backend da lista [back-end chelenges](https://github.com/CollabCodeTech/backend-challenges), lista essa inspirada na iniciativa do [Felipe Fialho](https://www.felipefialho.com/), Front-end Challenge. Este desafio é da BossaBox que consiste em uma api para gerenciamento de ferramentas.
Nesta api podemos Criar ferramentas com título, link (GitHub ou outras plataformas de hospedagem de repositórios), descrição e tags, além de outras funcionalidades.

# Features

Abaixo estão as features adiconadas a ferramentas e as que ainda serão implementadas:

### Features

-   [ ] Usuário
    -   [x] Cadastro:
    -   [x] Login
    -   [ ] Atualização
    -   [ ] Deleção
    <hr/>
-   [ ] Ferramentas
    -   [x] Cadastro de uma nova ferramenta
    -   [x] Listagem de todas as ferramentas
    -   [x] Listagem de ferramentas por tag
    -   [x] Exclusão de ferramenta
    -   [ ] Atualização de uma ferramenta

# Pré-requisitos

Antes de começar você vai precisar ter instalados em sua máquiana as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://docs.docker.com/engine/install/), [Docker Compose](https://docs.docker.com/compose/install/) e [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable).

O [Insomnia](https://insomnia.rest/download) é opcional, mas será mais fácil de utilizar a aplicação com ele.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Renomeie o arquivo `.env.example` para `.env`

# Como rodar a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/ricciardi305/challenge-bossabox>

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-bossabox

# Instale as dependências
$ yarn install

# Execute o docker compose para iniciar a aplicação em um contêiner
$ docker-compose up

# Execute as migrações
$ docker exec tools_hub yarn typeorm migration:run -d src/data-source.ts

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000/>
```

Também disponibilizei um arquivo do insomnia para acessar a API [aqui](github/Insomnia-Tools-HUB.json)

# Screenshot do Insomnia

<img src="./github/Captura%20de%20tela%20de%202022-08-31%2018-31-17.png">

# 🛠 Tecnologias

### As seguintes tecnologias foram utilizadas nesse projeto:

-   [Node](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Express](https://expressjs.com/pt-br/)
-   [CORS](https://expressjs.com/en/resources/middleware/cors.html)
-   [ts-node](https://github.com/wclr/ts-node-dev)
-   [PostgreSQL](https://www.postgresql.org/)
-   [TypeORM](https://typeorm.io/)
-   [dotENV](https://github.com/motdotla/dotenv)
-   [Swagger](https://swagger.io/)

> Veja o arquivo [package.json](package.json)

# Licença

Este projeto está sob a licença MIT License - Veja o arquivo [License](LICENSE) para mais detalhes.

# Autor

<a href="https://github.com/ricciardi305">
    <img src="https://avatars.githubusercontent.com/u/81863575?v=4&s=150" alt=""/>
    <br />
    <sub style="font-size: 16px"><b>Rafael Ricciardi</b></sub>
</a>

> Feito com ❤️ por Rafael Ricciardi 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Rafael_Ricciardi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/rafaelricciardi/)
[![Gmail Badge](https://img.shields.io/badge/-ricciardi.rafael1997@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:ricciardi.rafael1997@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-Rafael_Ricciardi-100000?style=flat-square&logo=github&logoColor=white&link=https://github.com/ricciardi305)](https://github.com/ricciardi305)
