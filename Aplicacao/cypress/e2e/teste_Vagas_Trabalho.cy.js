
describe('Teste da historia 4', () => {

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

        //registro de vaga
        cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
        cy.get('#titulo-vaga').type('Mestre de Obras');
        cy.get('#descricao-vaga').should('not.be.disabled');
        cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
        cy.get('#pretensao-salarial').select('De 1000 a 5000');
        cy.get('#tempo-vaga').select('2 Meses');
        cy.get('#nivel-escolaridade').select('Ensino Médio');
        cy.get('#email-contato').type('laviniasfaria@gmail.com');
        cy.wait(1500);
        cy.get('.btn').click();
        cy.wait(4000);


        // visitar vagas pro usuário - esperando história ficar pronta
      });
  };

  // testes de registro

  it('cenario1 - registrando vaga com dados 100% validos', () => {
      cleanupAndSetupData();
  });

  it('cenario2 - registrando vaga sem titulo', () => {
    cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
    cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.get('#tempo-vaga').select('2 Meses');
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.get('#email-contato').type('laviniasfaria@gmail.com');
    cy.wait(1500);
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario3 - registrando vaga sem salario', () => {
    cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
    cy.get('#titulo-vaga').type('Mestre de Obras');
    cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
    cy.get('#tempo-vaga').select('2 Meses');
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.get('#email-contato').type('laviniasfaria@gmail.com');
    cy.wait(1500);
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario4 - registrando vaga sem definir tempo de trabalho', () => {
    cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
    cy.get('#titulo-vaga').type('Mestre de Obras');
    cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.get('#email-contato').type('laviniasfaria@gmail.com');
    cy.wait(1500);
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario5 - registrando vaga sem escolaridade', () => {
    cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
    cy.get('#titulo-vaga').type('Mestre de Obras');
    cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.get('#tempo-vaga').select('2 Meses');
    cy.get('#email-contato').type('laviniasfaria@gmail.com');
    cy.wait(1500);
    cy.get('.btn').click();
    cy.wait(4000);

  });

  it('cenario6 - registrando vaga sem contato no formato de e-mail', () => {
    cy.visit('http://127.0.0.1:8000/anunciar-vaga/');
    cy.get('#titulo-vaga').type('Mestre de Obras');
    cy.get('#descricao-vaga').type('Trabalho diurno e vespertino. 6h por dia no centro do Recife, próximo ao Armazém do Campo');
    cy.get('#pretensao-salarial').select('De 1000 a 5000');
    cy.get('#tempo-vaga').select('2 Meses');
    cy.get('#nivel-escolaridade').select('Ensino Médio');
    cy.get('#email-contato').type('(81) 988351464');
    cy.wait(1500);
    cy.get('.btn').click();
    cy.wait(4000);

  });
  

});
