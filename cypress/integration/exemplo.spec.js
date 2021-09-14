/// <reference types="cypress" />
import loginDados from "../fixtures/login.json"

describe('Pedidos SauceLabs', () => {

    beforeEach(() => {
        cy.visit("/")
        //cy.login('standard_user', 'secret_sauce')

        cy.login(loginDados.usuario, loginDados.senha)

        /* cy.fixture('login').then((user) => {
            cy.login(user.usuario, user.senha)
        }) */

        /*  cy.fixture('usuarios').then((user) => {
            cy.login(user[1].usuario, user[1].senha)
        }) */
    });
    
it('Deve selecionar um produto e direcionar para PDP', () => {
    //cy.contains('Sauce Labs Backpack').click()
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack')
    cy.url().should('include', 'inventory-item')
});

it('Deve adicionar um produto ao carrinho', () => {
    cy.get('.btn_inventory').last().click()
    cy.get('.shopping_cart_badge').should('contain', 1)
});

});

