describe('teste da historia 1', () => {

    // Função que limpa o banco de dados antes de cada teste
    const cleanupAndSetupData = () => {
        cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {
            cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
        });
    };

    beforeEach(() => {
        cleanupAndSetupData(); // Limpa e prepara o banco de dados antes de cada teste
    });

    it('cenario1 - dados validos (busca pelo endereço)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
        cy.get('.historico-item > form > .btn').click();
        cy.wait(1000);
    });

    it('cenario2 - dados validos (busca pelo serviço)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Resolver problemas');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
        cy.get('.historico-item > form > .btn').click();
        cy.wait(1000);
    });

    it('cenario3 - dados validos porem incompletos (buscar)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
        cy.get('.historico-item > form > .btn').click();
        cy.wait(1000);
    });

    it('cenario4 - dados validos porem incompletos 3 (excluir)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
        cy.get('.historico-item > form > .btn').click();
        cy.wait(1000);
    });

    it('cenario5 - dados inválidos (endereço)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
    });

    it('cenario6 - dados inválidos (serviço)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#violacao').type('Cometeu erro');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
    });

    it('cenario7 - dados inválidos (violação)', () => {
        cy.wait(2000);
        cy.get('.nav-links > :nth-child(3) > [href="#"]').trigger('mouseover');
        cy.wait(1000);
        cy.contains('Alertas de Segurança').click({ force: true });
        cy.wait(1000);
        cy.get('#endereco').type('Endereço');
        cy.wait(1000);
        cy.get('#servico').type('Resolver problemas');
        cy.wait(1000);
        cy.get('[method="POST"][action="/alerta_seguranca/"] > .btn').click();
        cy.wait(1000);
        cy.get('[method="GET"] > .form-group > [type="text"]').type('Endereço');
        cy.wait(1000);
        cy.get('.form-group > .btn').click();
        cy.wait(1000);
    });
});
