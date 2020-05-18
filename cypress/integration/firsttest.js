Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe ('my first test', function () {
    it('Does not do much', function () {
        cy.visit('http://localhost:3002/pizza')

        cy.get('#name')
            .type('Can I type here')
            .should('have.value','Can I type here')

        cy.get('[type="radio"]').check()

        cy.get('[type="checkbox"]').check()

        cy.get('form').submit() 
    } )
})


