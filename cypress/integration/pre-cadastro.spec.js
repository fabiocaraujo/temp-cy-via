/// <reference types="cypress" />
import CadastroPage from "../support/pages/cadastro.page"

describe('Pré-Cadastro', () => {
    
    beforeEach(() => {
        cy.fixture('login').then((user) => {
            cy.login(user.usuario, user.senha)
        CadastroPage.acessoCadastro()
        }) 
    });
    it('Deve fazer cadastro com sucesso', () => {
        CadastroPage.cadastro('Fabio', 'Araujo', '0433000000')
        cy.get('.title').should('contain', 'Checkout: Overview')

    });
    

});