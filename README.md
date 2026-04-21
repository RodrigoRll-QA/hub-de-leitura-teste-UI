# 🧪 Hub de Leitura - Automação de UI com Cypress

![EBAC](https://img.shields.io/badge/Origin-EBAC-blue)
![Cypress](https://img.shields.io/badge/Framework-Cypress-blueviolet)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![NodeJS](https://img.shields.io/badge/Runtime-Node.js-brightgreen)
![Status](https://img.shields.io/badge/Status-Estudo-green)

Este repositório contém a suíte de testes automatizados de interface (UI) para o projeto **Hub de Leitura**. O objetivo principal é garantir a qualidade e a integridade das funcionalidades críticas, começando pelo fluxo de comunicação do usuário.

## 🎯 Escopo dos Testes
Atualmente, o projeto foca na validação do formulário **"Fale Conosco"**, cobrindo os seguintes cenários:
- [x] **Caminho Feliz:** Envio de formulário com todos os campos válidos.
- [x] **Validação de Campos Obrigatórios:** Verificação de mensagens de erro para Nome, E-mail, Assunto e Mensagem.
- [x] **Interação com Componentes:** Seleção dinâmica de dropdowns e disparos de alertas.

## 🚀 Tecnologias Utilizadas
- **Cypress:** Framework de automação End-to-End.
- **JavaScript:** Linguagem base para escrita dos scripts.
- **Node.js:** Ambiente de execução.

## 🛠️ Estrutura do Projeto
Os testes estão organizados de forma a facilitar a manutenção e leitura:
- `cypress/e2e/`: Contém os arquivos de especificação de testes (.cy.js).
- `cypress/support/`: Comandos personalizados e configurações globais.

## 🏁 Como Executar os Testes

1. **Clone o repositório:**
```bash
git clone https://github.com/RodrigoRll-QA/hub-de-leitura-teste-UI.git
```  
2. Instale as dependências:

`npm install`

3. Abra o Cypress (Modo Interativo):

`npx cypress open`

4. Execute os testes (Modo Headless):

`npx cypress run`

## 📈 Próximos Passos
[ ] Implementação do padrão Page Object Model (POM).

[ ] Adição de testes para fluxos de validação de formato de E-mail.

[ ] Integração contínua (GitHub Actions).

## 👤 Rodrigo Lins Lopes - Analista de QA em formação
