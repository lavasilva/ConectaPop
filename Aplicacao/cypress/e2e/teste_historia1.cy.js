describe('teste da historia 1', () => {

    it('cenario1', () => {
        cy.visit('http://127.0.0.1:8000/') //Visitar uma url
        cy.wait(3000)
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover')
        cy.contains('Relatar Problemas').click({ force: true });
        cy.get(':nth-child(2) > input').type('Teste de Problema')
        cy.get('textarea').type('Descrição do problema TESTE')
        cy.get('.dropdown-button').click(); // Abre o dropdown
        cy.get('.dropdown-content').contains('Buracos nas Ruas').click();
        
    })


})