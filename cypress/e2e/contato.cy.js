describe('funcionalidade: contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com Sucesso', () => {
    //Aqui vai ser implementado o primeiro teste
    cy.get('[name="name"]').type('Rodrigo Lins Lopes')
    cy.get('[name="email"]').type('Rodrigolinsrll@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre o curso de Cypress')
    cy.get('#btn-submit').click()
    //Resultado esperado: Exibir mensagem de sucesso
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve exibir mensagem de erro ao enviar formulário sem preencher nome', () => {

    cy.get('[name="email"]').type('Rodrigolinsrll@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre o curso de Cypress')
    cy.get('#btn-submit').click()
    //Resultado esperado: Exibir mensagem de erro
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it('Deve exibir mensagem de erro ao enviar formulário sem preencher E-mail', () => {

    cy.get('[name="name"]').type('Rodrigo Lins Lopes')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre o curso de Cypress')
    cy.get('#btn-submit').click()
    //Resultado esperado: Exibir mensagem de erro
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it('Deve exibir mensagem de erro ao enviar formulário sem selecionar o assunto', () => {

    cy.get('[name="name"]').type('Rodrigo Lins Lopes')
    cy.get('[name="email"]').type('Rodrigolinsrll@gmail.com')
    cy.get('[name="message"]').type('Olá, gostaria de saber mais sobre o curso de Cypress')
    cy.get('#btn-submit').click()
    //Resultado esperado: Exibir mensagem de erro
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it('Deve exibir mensagem de erro ao enviar formulário sem preencher mensagem', () => {

    cy.get('[name="name"]').type('Rodrigo Lins Lopes')
    cy.get('[name="email"]').type('Rodrigolinsrll@gmail.com')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('#btn-submit').click()
    //Resultado esperado: Exibir mensagem de erro
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });


})