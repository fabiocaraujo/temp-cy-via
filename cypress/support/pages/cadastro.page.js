class CadastroPage {

    cadastro(nome, sobrenome, cep) {
        cy.get('[data-test=firstName]').type(nome)
        cy.get('[data-test=lastName]').type(sobrenome)
        cy.get('[data-test=postalCode]').type(cep)
        cy.get('[data-test=continue]').click()
    }

    acessoCadastro() {
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click()
    }
}
export default new CadastroPage()