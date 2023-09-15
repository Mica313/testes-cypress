/// <reference types="cypress" />


describe('testes para a pagina home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('testes para a adicao de um novo contato', () => {
        cy.get('input[type="text"]').type('Micael Santos')
        cy.get('input[type="email"]').type('almeida1micael@gmail.com')
        cy.get('input[type="tel"]').type('75983368491')
        cy.get('.adicionar').click()
        cy.get('.contato').should('contain', 'Micael Santos')
    })
    it('teste para o botao deletar', () => {
        cy.get('.delete').first().click({ multiple: true })
    })
    it('testes para o botao editar', () => {
        cy.get('.edit').click({ multiple: true })
        cy.get('input[type="text"]').type(' Almeida')
        cy.get('.alterar').click({ multiple: true })
        cy.get('.contato').should('contain', 'Almeida')
    })
})