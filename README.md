# Projeto Imobiliária - API REST & Cliente Web

## Tecnologias Utilizadas
* **Front-end:** React, React Router DOM, CSS Modules.
* **Back-end:** Java 21, Spring Boot, JdbcTemplate, CORS.
* **Banco de Dados:** MySQL.

## Estrutura do Repositório
* `/cliente` - Aplicação Front-end em React.
* `/api` - API REST em Spring Boot.

## Como Executar

**1. Banco de Dados**
* Execute o arquivo `api/schema.sql` no seu servidor MySQL para criar o banco e a tabela.
* Confirme suas credenciais de acesso no arquivo `application.properties`.

**2. Back-end (API)**
* Abra a pasta `/api` na sua IDE de preferência.
* Execute a classe principal `ProjetoIndividualBackApplication.java`.

**3. Front-end (Cliente)**
* No terminal, acesse a pasta `/cliente`.
* Instale as dependências com `npm install`.
* Inicie o projeto com `npm run dev`.

## 🔗 Endpoints da API (Rotas)


* `POST /imobiliaria` - Cadastra um novo imóvel.
* `GET /imobiliaria` - Lista todos os imóveis cadastrados.
* `GET /imobiliaria/filtro` - Busca imóveis por parâmetros dinâmicos (`tipo`, `bairro`, `precoMax`, `quartosMin`).
* `DELETE /imobiliaria/{id}` - Exclui um imóvel específico pelo seu ID.
