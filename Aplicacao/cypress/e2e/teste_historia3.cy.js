
describe('teste da historia 1', () => {
    
    const cleanupAndSetupData = () => {
        
        cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {
            
            cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
            cy.wait(3000);
            cy.get('.nav-links > :nth-child(2) > [href="#"]').trigger('mouseover');
            cy.contains('Participar de Enquetes e Sugestões').click({ force: true });
            cy.get('#nome').type('Nome');
            cy.get('#idade').type('20');
            cy.get('#endereco').type('Rua exemplo, 123');
            cy.get('textarea').type('Bom');
            cy.get('#opcao1').select('Custo da obra');
            cy.get('#opcao2').select('Lento');
            cy.get('#opcao3').select('Parcialmente');
            cy.get('.btn').click(); 
        });
    };

    it('cenario1 - inserindo dados validos', () => {
        cleanupAndSetupData(); 
    });

    it('cenario2 - dados validos porem incompletos (endereço)', () => {
        cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
        cy.wait(3000);
        cy.get('.nav-links > :nth-child(2) > [href="#"]').trigger('mouseover');
        cy.contains('Participar de Enquetes e Sugestões').click({ force: true });
        cy.get('#nome').type('Nome');
        cy.get('#idade').type('20');
        cy.get('textarea').type('Bom');
        cy.get('#opcao1').select('Custo da obra');
        cy.get('#opcao2').select('Lento');
        cy.get('#opcao3').select('Parcialmente');
        cy.get('.btn').click();



    });

    it('cenario3 - dados validos porem incompletos 2 (descrição)', () =>{
        cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
        cy.wait(3000);
        cy.get('.nav-links > :nth-child(2) > [href="#"]').trigger('mouseover');
        cy.contains('Participar de Enquetes e Sugestões').click({ force: true });
        cy.get('#nome').type('Nome');
        cy.get('#idade').type('20');
        cy.get('#endereco').type('Rua exemplo, 123');
        cy.get('#opcao1').select('Custo da obra');
        cy.get('#opcao2').select('Lento');
        cy.get('#opcao3').select('Parcialmente');
        cy.get('.btn').click(); 

    })

    it('cenario4 - dados validos porem incompletos 3 (idade)', () =>{
        cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
        cy.wait(3000);
        cy.get('.nav-links > :nth-child(2) > [href="#"]').trigger('mouseover');
        cy.contains('Participar de Enquetes e Sugestões').click({ force: true });
        cy.get('#nome').type('Nome');
        cy.get('#endereco').type('Rua exemplo, 123');
        cy.get('textarea').type('Bom');
        cy.get('#opcao1').select('Custo da obra');
        cy.get('#opcao2').select('Lento');
        cy.get('#opcao3').select('Parcialmente');
        cy.get('.btn').click(); 
    })



});
