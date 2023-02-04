# API para controle de estoque

Esta API foi construída com o objetivo de gerenciar o estoque de uma empresa.

Para o desenvolvimento, foram utilizados Node.js, Sequelize, Express e um banco de dados MySQL.

## Funcionalidades
• A API possui as seguintes funcionalidades:

• Listagem de todos os produtos do estoque

• Busca de um produto específico pelo seu ID

• Exclusão de um produto pelo seu ID

• Atualização de um produto pelo seu ID

• Adição de um novo produto ao estoque

## Instalação
Para rodar a API em sua máquina, você precisará ter o Node.js instalado.

Clone este repositório para sua máquina e execute os seguintes comandos:
```
npm install

npm run
```
## Configuração do banco de dados
Antes de iniciar a API, é necessário configurar a conexão com o banco de dados MySQL. Para isso, basta alterar as seguintes variáveis no arquivo de código:

SCHEMA_DB: Nome do esquema do banco de dados
USER_DB: Nome de usuário do banco de dados
PASSWORD_DB: Senha do usuário do banco de dados
HOST: Endereço do servidor do banco de dados
## Rotas da API
A API possui as seguintes rotas:

``GET`` `/products:` Retorna a lista de todos os produtos do estoque

`GET` `/products/:id:` Retorna um produto específico pelo seu ID

`DELETE` `/products/:id:` Exclui um produto pelo seu ID

`PUT` `/products/:id:` Atualiza um produto pelo seu ID

`POST` `/products:` Adiciona um novo produto ao estoque


