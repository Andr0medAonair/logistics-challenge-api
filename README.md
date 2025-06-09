# Desafio API Logística

## Descrição

Este projeto está sendo desenvolvido a partir do desafio técnico Vertical Logística proposto pelo LuizaLabs suja proposta é integrar dois sistemas cujo sistema legado envia um arquivo desnormalizado e o sistema necessita realizar a normalização, tratamento de dados e envio do payload num arquivo JSON.

## Tabela de Conteudos

- [Descrição](#descrição)
- [Tabela de Conteudos](#tabela-de-conteúdos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Executar](#como-executar)
- [Requisições](#requisições)
- [Tecnologias](#tecnologias)

### ⚙️ Configuração do Ambiente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Andr0medAonair/logistics-challenge-api.git
    cd ${basepath}/logistics-challenge-api
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Este projeto foi criado através da tecnologia [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), deve ser feito login na plataforma e criar um cluster para popular o banco. Após a criação deve ser pego a string de conexão e colado na variável de ambiente <DB_CONNECTION_URL>.
4.  Configure as variáveis de ambiente:
    - Crie um arquivo `.env` e configure o mesmo baseado no arquivo `.env.example` e preencha com as configurações necessárias.

### 🚀 Como Executar

Para iniciar a aplicação:

```bash
npm start
```

ou

```bash
npm start:dev
```

para o modo de desenvolvimento.

#### Utilizando Docker:

Depois de instalar o docker daemon (Docker Desktop, Rancher Desktop), execute na raiz do projeto:

```bash
docker compose up
```

A API estará disponível em http://localhost:3000.

### Endpoints da API
#### POST /api/v1/orders
Realiza o upload dos arquivos de dados para processamento e persistência.

```bash
curl --location 'http://localhost:3000/api/v1/orders' \
--form 'file1=@"/C:/Users/User/Downloads/desafioluizalabspessoadesenvolvedorabackend/data_1.txt"' \
--form 'file2=@"/C:/Users/User/Downloads/desafioluizalabspessoadesenvolvedorabackend/data_2.txt"'
```

#### GET /api/v1/orders
Lista os pedidos, com filtros opcionais por data.

```bash
curl --location 'http://localhost:3000/api/v1/orders?startDate=2021-10-29&endDate=2021-10-30'

# Busca todos os pedidos (sem filtro de data)
curl --location 'http://localhost:3000/api/v1/orders'
```

#### GET /api/v1/orders/{userId}
Busca todos os pedidos de um usuário específico pelo userId.

```bash
curl --location 'http://localhost:3000/api/v1/orders/17'
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Nest.JS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com)
- [Jest](https://jestjs.io/)
