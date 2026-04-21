/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no hub de leitura ', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve realizar cadastro com sucesso, usando função JS', () => {
        let email = `rodrigolins${Date.now()}@gmail.com`
        let password = `SenhaSegura${Date.now()}`
        cy.get('#name').type('Rodrigo Lins Lopes')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(password)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')

    });

    it('Deve exibir erro ao inserir e-mail inválido, usando JS', () => {
        let emailInvalido = `rodrigolins${Date.now()}@gmail` // Sem o ".com"
        cy.get('#name').type('Rodrigo Lins Lopes')
        cy.get('#email').type(emailInvalido)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('Senha123')
        cy.get('#confirm-password').type('Senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Validação do erro
        cy.get('#register-form > :nth-child(2) > .invalid-feedback')
            .should('be.visible')
            .and('contain', 'Email válido é obrigatório')

    });

    it('Deve realizar cadastro com sucesso, usando Faker', () => {
        let name = `Rodrigo ${faker.person.lastName()}`;
        let email = faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('SenhaSegura123')
        cy.get('#confirm-password').type('SenhaSegura123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', name)

    });

    it('Deve exibir erro ao inserir e-mail inválido, usando Faker', () => {
        let nome = `Rodrigo ${faker.person.lastName()}`
        let textoAleatorio = faker.lorem.word()
        cy.get('#name').type(nome)
        cy.get('#email').type(textoAleatorio)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('Senha123')
        cy.get('#confirm-password').type('Senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Validação: Garantir que a mensagem apareceu e o usuário não saiu da página
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
        cy.url().should('include', 'register.html')
    });

});