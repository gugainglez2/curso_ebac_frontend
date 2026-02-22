describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('Novo Contato')
        cy.get('input[type="email"]').type('novo@contato.com')
        cy.get('input[type="tel"]').type('1140028922')
        cy.get('.adicionar').click()
        cy.contains('Novo Contato').should('exist')
    })

    it('Deve alterar um contato existente', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Nome Alterado')
        cy.get('.alterar').click()
        cy.contains('Nome Alterado').should('exist')
    })

    it('Deve remover um contato da lista', () => {
        cy.get('.contato').should('have.length.at.least', 1)
        
        cy.get('.contato').then((itens) => {
            const qtdInicial = itens.length
            cy.get('.delete').first().click()
            cy.get('.contato').should('have.length', qtdInicial - 1)
        })
    })
})