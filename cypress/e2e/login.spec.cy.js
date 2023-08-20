/// <reference types = "cypress"/>

context ('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('usuarioinvalido@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de')
    })

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('senhainvalida')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha')
    })

} )
