/// <reference types = "cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade endereços - Faturamente e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Augusto', 'Lima', 'Carrefour', 'Brasil', 'Avenida Atlântica', '501 Qd 15', 'Goiânia', 'Goiás', '74795-350', '5555-8888', 'emaildeteste2@ebac.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});