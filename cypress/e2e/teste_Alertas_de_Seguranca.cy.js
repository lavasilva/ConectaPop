describe('teste da historia 8', () => {

    // Função que limpa o banco de dados antes de cada teste
    const cleanupAndSetupData = () => {
        cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {
            cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
        });
    };

    beforeEach(() => {
        cleanupAndSetupData(); // Limpa e prepara o banco de dados antes de cada teste
    });

    it('cenario1 - dados válidos (busca pelo endereço)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('.historico-item > form > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario2 - dados válidos (busca pelo serviço)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Resolver problemas');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('.historico-item > form > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario3 - dados válidos porém incompletos (buscar)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('.historico-item > form > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario4 - dados válidos porém incompletos 3 (excluir)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('.historico-item > form > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario5 - dados inválidos (endereço)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario6 - dados inválidos (serviço)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#violacao').should('be.visible').type('Cometeu erro');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(3000);
    });

    it('cenario7 - dados inválidos (violação)', () => {
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.get('#endereco').should('be.visible').type('Endereço');
        cy.get('#servico').should('not.be.disabled').type('Resolver problemas');
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').should('be.visible').click();
        cy.wait(2000);
        cy.get('[method="GET"] > .form-group > [type="text"]').should('be.visible').type('Endereço');
        cy.get('.form-group > .btn').should('be.visible').click();
        cy.wait(3000);
    });

});
