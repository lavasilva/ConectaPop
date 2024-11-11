describe('Teste da historia 7', () => {

  beforeEach(() => {
    cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/');
  });
    
  const cleanupAndSetupData = () => {
      
      cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {

        //login 
        cy.visit('http://127.0.0.1:8000/login'); 
        cy.get('[type="text"]').type('laviniamsilva@conecta.pop');
        cy.get('[type="password"]').type('1234');
        cy.wait(1000);
        cy.get('.login-button').click();

        // add relatorios
        cy.visit('http://127.0.0.1:8000/home_adm/');
        cy.wait(3000);
        cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
        cy.get('#tituloRelatorio').type('Construção de moradias populares no Torreão.');
        cy.get('#descricaoProgresso').type('Conjunto habitacional de 12 etapas sendo construído a partir do dia 10/12/2024.');
        cy.get('#dataRelatorio').type('2024-11-07');
        cy.wait(500);
        cy.get('#statusProjeto').select('Em Progresso');
        cy.wait(500);
        cy.get('#validacaoRelatorio').select('Em Revisão');
        cy.wait(500);
        cy.get('#comentariosAuditor').type('Faltando equipe paisagista da habitação.');
        cy.wait(1000);
        cy.get('[action="/relatorio_progresso/"] > .btn').click();
        cy.wait(2000);

        cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
        cy.get('#tituloRelatorio').type('Construção de moradias populares em Boa Viagem.');
        cy.get('#descricaoProgresso').type('Conjunto habitacional de 6 etapas com previsão de finalização para fev/2025.');
        cy.get('#dataRelatorio').type('2024-11-07');
        cy.wait(500);
        cy.get('#statusProjeto').select('Pendente');
        cy.wait(500);
        cy.get('#validacaoRelatorio').select('Em Revisão');
        cy.wait(500);
        cy.get('#comentariosAuditor').type('Progresso lento pela falta de incentivo/insumos fornecidos pelo município.');
        cy.wait(1000);
        cy.get('[action="/relatorio_progresso/"] > .btn').click();
        cy.wait(1000);

        //avaliando a reforma
        cy.visit('http://127.0.0.1:8000/'); //voltando pra "usuário"
        cy.wait(2000);
        cy.visit('http://127.0.0.1:8000/status_reformas/'); //checando que está disponível
        cy.wait(3000);
        cy.visit('http://127.0.0.1:8000/avaliar-reformas/');
        cy.wait(1000);
        cy.get('.btn-avaliar').click();
        cy.wait(1000);
        cy.get('#nota_andamento').select('8');
        cy.wait(500);
        cy.get('#justificativa').type('A população vulnerável do Recife precisa de mais obras boas assim! Só acho que deveria ter mais níveis/prédios.');
        cy.wait(2000);
        cy.get('form > button').click();
        cy.wait(3000);

      });
  };


  it('cenario1 - relatorio valido e avaliacao valida', () => {
      cleanupAndSetupData();
  });

  it('cenario2 - avaliacao sem nota', () => {
    cy.visit('http://127.0.0.1:8000/'); //voltando pra "usuário"
    cy.wait(2000);
    cy.visit('http://127.0.0.1:8000/status_reformas/'); //checando que está disponível
    cy.wait(3000);
    cy.visit('http://127.0.0.1:8000/avaliar-reformas/');
    cy.wait(1000);
    cy.get('.btn-avaliar').click();
    cy.wait(1000);
    cy.get('#justificativa').type('A população vulnerável do Recife precisa de mais obras boas assim! Só acho que deveria ter mais níveis/prédios.');
    cy.wait(2000);
    cy.get('form > button').click();
    cy.wait(3000);

  });

  it('cenario3 - avaliacao sem feedback por comentario', () => {
    cy.visit('http://127.0.0.1:8000/'); //voltando pra "usuário"
    cy.wait(2000);
    cy.visit('http://127.0.0.1:8000/status_reformas/'); //checando que está disponível
    cy.wait(3000);
    cy.visit('http://127.0.0.1:8000/avaliar-reformas/');
    cy.wait(1000);
    cy.get('.btn-avaliar').click();
    cy.wait(1000);
    cy.get('#nota_andamento').select('8');
    cy.wait(500);
    cy.get('form > button').click();
    cy.wait(3000);

  });

});