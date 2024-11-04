describe('Homepage', () => {
    it('has a title', () => {
        cy.visit('https://beta.gouv.fr/');

        cy.findByRole('heading', { level: 1 })
            .should('have.text', 'Construisons ensemble les services publics numériques de demain')
    })
    it('searches the input', () => {
        cy.visit('http://beta.gouv.fr/');

        cy.findByRole('search')
            .findByRole('searchbox')
            .type('foo')
        cy.findByRole('button', { name: "Rechercher" })
            .click()

        cy.findByRole('heading', { level: 1 })
            .should('have.text', 'Résultats')
        cy.findByText('Aucun résultat pour « foo »')
            .should('be.visible')
    })
})
