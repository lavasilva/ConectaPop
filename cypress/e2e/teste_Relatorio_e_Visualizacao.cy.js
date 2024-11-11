
describe('Teste da historia 6 e 10', () => {

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

        // relatorios
        cy.visit('http://127.0.0.1:8000/home_adm/');
        cy.wait(1000);
        cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
        cy.get('#tituloRelatorio').type('Pavimentação da Rua Alfredo de Carvalho.');
        cy.get('#descricaoProgresso').type('Funcionários trabalhando 3h por noite. Esperada a finalização em 3 dias úteis.');
        cy.get('#dataRelatorio').type('2024-10-20');
        cy.get('#statusProjeto').select('Em Progresso');
        cy.get('#validacaoRelatorio').select('Aprovado');
        cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
        cy.wait(1000);
        cy.get('[action="/relatorio_progresso/"] > .btn').click();
        cy.wait(1000);

        cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
        cy.get('#tituloRelatorio').type('Repavimentação na Av. João de Barros.');
        cy.get('#descricaoProgresso').type('Esperada a finalização em 2 dias úteis.');
        cy.get('#dataRelatorio').type('2024-10-20');
        cy.wait(500);
        cy.get('#statusProjeto').select('Pendente');
        cy.wait(500);
        cy.get('#validacaoRelatorio').select('Em Revisão');
        cy.wait(500);
        cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
        cy.wait(1000);
        cy.get('[action="/relatorio_progresso/"] > .btn').click();
        cy.wait(1000);

        //mostrando ações
        cy.get(':nth-child(1) > :nth-child(2) > details > summary')
        .should('exist')
        .and('be.visible')
        .click();   
        cy.wait(2000);
        cy.get(':nth-child(2) > :nth-child(2) > details > summary')
        .should('exist')
        .and('be.visible')
        .click();      
        cy.get(':nth-child(2) > :nth-child(2) > form > .btn').click();
        cy.wait(2000);

        //status de reforma
        cy.visit('http://127.0.0.1:8000/'); 
        cy.wait(500);
        cy.visit('http://127.0.0.1:8000/status_reformas/');
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(3) > .btn-info').click();
        cy.wait(4000);
        cy.get('.nav-links > a').click();
        cy.wait(4000);

      });
  };

  // testes de registro

  it('cenario1 - registrando usuario com dados 100% validos', () => {
      cleanupAndSetupData();
  });

  it('cenario2 - registrando usuario com dados validos mas sem nome', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="email"]').type('laviniamsilva@conecta.pop');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('1234');        
    cy.get('.register-button').click();
    cy.wait(1000);
    cy.get('[type="text"]')
    .scrollIntoView()
    .should('be.visible');
  });

  it('cenario3 - registrando usuario com dados com e-mail invalido', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[type="email"]').type('lavinia@gmail.com');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('1234');        
    cy.get('.register-button').click();
    cy.wait(2000);
  });

  it('cenario3.2 - registrando usuario com dados sem email', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('1234');        
    cy.get('.register-button').click();
    cy.wait(2000);
  });

  it('cenario4 - registrando usuario com dados sem senha', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[type="email"]').type('laviniamsilva@conecta.pop');
    cy.wait(200);       
    cy.get('.register-button').click();
    cy.wait(2000);
  });

  it('cenario5 - registrando usuario com dados com senhas que nao coincidem', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[type="email"]').type('laviniamsilva@conecta.pop');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('11111111');        
    cy.get('.register-button').click();
    cy.wait(2000);
  });

  // testes de login ---------------------

  it('cenario6 - logando com e-mail invalido', () => {
    // registro 
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[type="email"]').type('laviniamsilva@conecta.pop');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('1234');        
    cy.get('.register-button').click();

    //login 
    cy.visit('http://127.0.0.1:8000/login'); 
    cy.get('[type="text"]').type('lavinia@gmail.com');
    cy.wait(200);
    cy.get('[type="password"]').type('1234');
    cy.wait(200);
    cy.get('.login-button').click();
    cy.wait(2000);
  });

  it('cenario7 - logando com senha incorreta', () => {
    // registro 
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(200);
    cy.visit('http://127.0.0.1:8000/registro'); 
    cy.wait(200);
    cy.get('[type="text"]').type('Lavinia');
    cy.wait(200);
    cy.get('[type="email"]').type('laviniamsilva@conecta.pop');
    cy.wait(200);
    cy.get('[name="senha"]').type('1234');
    cy.wait(200); 
    cy.get('[name="confirmar_senha"]')
      .should('not.be.disabled') 
      .type('1234');        
    cy.get('.register-button').click();

    //login 
    cy.visit('http://127.0.0.1:8000/login'); 
    cy.get('[type="text"]').type('laviniamsilva@gmail.com');
    cy.wait(200);
    cy.get('[type="password"]').type('5672');
    cy.wait(200);
    cy.get('.login-button').click();
    cy.wait(2000);
  });

  // testes de relatorios

  it('cenario8 - registro de relatorio sem titulo', () => {
        cy.visit('http://127.0.0.1:8000/home_adm/');
        cy.wait(1000);
        cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
        cy.get('#descricaoProgresso').type('Funcionários trabalhando 3h por noite. Esperada a finalização em 3 dias úteis.');
        cy.get('#dataRelatorio').type('2024-10-20');
        cy.get('#statusProjeto').select('Em Progresso');
        cy.get('#validacaoRelatorio').select('Aprovado');
        cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
        cy.wait(1000);
        cy.get('[action="/relatorio_progresso/"] > .btn').click();
        cy.wait(2000);
  });

  it('cenario9 - registro de relatorio sem data', () => {
    cy.visit('http://127.0.0.1:8000/home_adm/');
    cy.wait(1000);
    cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
    cy.get('#tituloRelatorio').type('Pavimentação da Rua Alfredo de Carvalho.');
    cy.get('#descricaoProgresso').type('Funcionários trabalhando 3h por noite. Esperada a finalização em 3 dias úteis.');
    cy.get('#statusProjeto').select('Em Progresso');
    cy.get('#validacaoRelatorio').select('Aprovado');
    cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
    cy.wait(1000);
    cy.get('[action="/relatorio_progresso/"] > .btn').click();
    cy.wait(2000);
  });

  it('cenario11 - registro de relatorio sem status de progresso', () => {
    cy.visit('http://127.0.0.1:8000/home_adm/');
    cy.wait(1000);
    cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
    cy.get('#tituloRelatorio').type('Pavimentação da Rua Alfredo de Carvalho.');
    cy.get('#descricaoProgresso').type('Funcionários trabalhando 3h por noite. Esperada a finalização em 3 dias úteis.');
    cy.get('#dataRelatorio').type('2024-10-20');
    cy.get('#validacaoRelatorio').select('Aprovado');
    cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
    cy.wait(1000);
    cy.get('[action="/relatorio_progresso/"] > .btn').click();
    cy.wait(2000);
  });

  it('cenario12 - registro de relatorio sem validacao', () => {
    cy.visit('http://127.0.0.1:8000/home_adm/');
    cy.wait(1000);
    cy.visit('http://127.0.0.1:8000/relatorio_progresso/');
    cy.get('#tituloRelatorio').type('Pavimentação da Rua Alfredo de Carvalho.');
    cy.get('#descricaoProgresso').type('Funcionários trabalhando 3h por noite. Esperada a finalização em 3 dias úteis.');
    cy.get('#dataRelatorio').type('2024-10-20');
    cy.get('#statusProjeto').select('Em Progresso');
    cy.get('#comentariosAuditor').type('Progresso está muito lento; poucos funcionários disponibilizados.');
    cy.wait(1000);
    cy.get('[action="/relatorio_progresso/"] > .btn').click();
    cy.wait(2000);
  });

});
