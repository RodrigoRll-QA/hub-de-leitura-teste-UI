# 🧪 Hub de Leitura - Automação de UI com Cypress

[![EBAC](https://img.shields.io/badge/Origin-EBAC-blue)](https://ebaconline.com.br/)
[![Cypress](https://img.shields.io/badge/Framework-Cypress-blueviolet)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Faker-JS](https://img.shields.io/badge/Library-Faker.js-ff69b4)](https://fakerjs.dev/)
[![NodeJS](https://img.shields.io/badge/Runtime-Node.js-brightgreen)](https://nodejs.org/)

Este repositório contém a suíte de testes automatizados de interface (UI) para o projeto **Hub de Leitura**. O objetivo é garantir a qualidade das funcionalidades críticas e a integridade da jornada do usuário.

## 🎯 Escopo dos Testes

O projeto cobre as seguintes funcionalidades:

### 1. Cadastro de Usuários
* **Caminho Feliz:** Registro realizado com sucesso utilizando massa de dados dinâmica (JS Puro e biblioteca Faker).
* **Validação de E-mail:** Verificação de mensagens de erro ao inserir formatos de e-mail inválidos.
* **Persistência de Dados:** Garantia de que o usuário permanece na página correta em caso de falha.

### 2. Contato
* **Envio de Formulário:** Validação de envio com campos obrigatórios preenchidos.
* **Interação com Componentes:** Testes em dropdowns e alertas de confirmação.

## 🚀 Tecnologias Utilizadas

* **Cypress:** Framework principal de automação.
* **Faker-JS:** Geração de massa de dados aleatória e realista para testes de escala.
* **JavaScript (ES6+):** Linguagem para escrita dos scripts.

## 🛠️ Estrutura do Projeto

* `cypress/e2e/`: Scripts de teste (.cy.js).
* `cypress/support/`: Comandos customizados e configurações auxiliares.

## 🏁 Como Executar os Testes

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/RodrigoRll-QA/hub-de-leitura-teste-UI.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Pré-requisito:**
    Certifique-se de que o ambiente do **Hub de Leitura** está rodando localmente (ex: `localhost:8080`).

4.  **Abra o Cypress:**
    ```bash
    npx cypress open
    ```

## 👤 Rodrigo Lins Lopes - Analista de QA em formação