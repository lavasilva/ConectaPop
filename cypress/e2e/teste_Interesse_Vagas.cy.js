
describe('Teste da historia 4 e 5', () => {

  beforeEach(() => {
    cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/');
  });
    
  const cleanupAndSetupData = () => {
      
      cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(500);
        cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
        cy.wait(500);
        cy.get('.btn-info').should('be.visible').first().click();
        cy.wait(500);
        cy.get('#descricao-vaga').type('Tenho experiência prática em obras de construção civil, onde desenvolvi habilidades em supervisão de equipes, leitura de projetos e coordenação de atividades no canteiro. Ao longo da minha trajetória, aprimorei minha capacidade de liderar e trabalhar em equipe, sempre buscando a entrega de projetos com qualidade e no prazo estipulado. Sou dedicado, responsável e comprometido com a segurança e a excelência no trabalho. ');
        cy.get('#pretensao-salarial').select('De 1000 a 5000');
        cy.wait(500);
        cy.get('#tempo-vaga').select('Indeterminado');
        cy.wait(500);
        cy.get('#nivel-escolaridade').select('Ensino Médio');
        cy.wait(500);
        cy.get('#email-contato').type('laviniamaranhao@gmail.com');
        cy.get('.btn').click();
      });
  };

  // testes de registro

  it('cenario1 - registrando vaga com dados 100% validos', () => {
      cleanupAndSetupData();
  });

  it('cenario2 - registrando vaga sem descrição', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(500);
    cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
    cy.wait(500);
    cy.get('.btn-info').should('be.visible').first().click();    
    cy.wait(500);
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.wait(500);
    cy.get('#tempo-vaga').select('Indeterminado');
    cy.wait(500);
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.wait(500);
    cy.get('#email-contato').type('laviniamaranhao@gmail.com');
    cy.get('.btn').click();

  });

  it('cenario3 - registrando vaga sem salário', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(500);
    cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
    cy.wait(500);
    cy.get('.btn-info').should('be.visible').first().click();
    cy.wait(500);
    cy.get('#descricao-vaga').type('Tenho experiência prática em obras de construção civil, onde desenvolvi habilidades em supervisão de equipes, leitura de projetos e coordenação de atividades no canteiro. Ao longo da minha trajetória, aprimorei minha capacidade de liderar e trabalhar em equipe, sempre buscando a entrega de projetos com qualidade e no prazo estipulado. Sou dedicado, responsável e comprometido com a segurança e a excelência no trabalho. ');
    cy.get('#tempo-vaga').select('Indeterminado');
    cy.wait(500);
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.wait(500);
    cy.get('#email-contato').type('laviniamaranhao@gmail.com');
    cy.get('.btn').click();
    cy.wait(4000);
  });

  it('cenario4 - registrando vaga sem definir tempo de trabalho', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(500);
    cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
    cy.wait(500);
    cy.get('.btn-info').should('be.visible').first().click();
    cy.wait(500);
    cy.get('#descricao-vaga').type('Tenho experiência prática em obras de construção civil, onde desenvolvi habilidades em supervisão de equipes, leitura de projetos e coordenação de atividades no canteiro. Ao longo da minha trajetória, aprimorei minha capacidade de liderar e trabalhar em equipe, sempre buscando a entrega de projetos com qualidade e no prazo estipulado. Sou dedicado, responsável e comprometido com a segurança e a excelência no trabalho. ');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.wait(500);
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.wait(500);
    cy.get('#email-contato').type('laviniamaranhao@gmail.com');
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario5 - registrando vaga sem escolaridade', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(500);
    cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
    cy.wait(500);
    cy.get('.btn-info').should('be.visible').first().click();
    cy.wait(500);
    cy.get('#descricao-vaga').type('Tenho experiência prática em obras de construção civil, onde desenvolvi habilidades em supervisão de equipes, leitura de projetos e coordenação de atividades no canteiro. Ao longo da minha trajetória, aprimorei minha capacidade de liderar e trabalhar em equipe, sempre buscando a entrega de projetos com qualidade e no prazo estipulado. Sou dedicado, responsável e comprometido com a segurança e a excelência no trabalho. ');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.wait(500);
    cy.get('#tempo-vaga').select('Indeterminado');
    cy.wait(500);
    cy.get('#email-contato').type('laviniamaranhao@gmail.com');
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario6 - registrando vaga sem contato no formato de e-mail', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.wait(500);
    cy.visit('http://127.0.0.1:8000/vagas-disponiveis/');
    cy.wait(500);
    cy.get('.btn-info').should('be.visible').first().click();
    cy.wait(500);
    cy.get('#descricao-vaga').type('Tenho experiência prática em obras de construção civil, onde desenvolvi habilidades em supervisão de equipes, leitura de projetos e coordenação de atividades no canteiro. Ao longo da minha trajetória, aprimorei minha capacidade de liderar e trabalhar em equipe, sempre buscando a entrega de projetos com qualidade e no prazo estipulado. Sou dedicado, responsável e comprometido com a segurança e a excelência no trabalho. ');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.wait(500);
    cy.get('#tempo-vaga').select('Indeterminado');
    cy.wait(500);
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.wait(500);
    cy.get('#email-contato').type('laviniamaranhao2gmail.com');
    cy.get('.btn').click();
    cy.wait(4000);

  });
  

});
