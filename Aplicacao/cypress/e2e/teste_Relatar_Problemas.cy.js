//O usuário padrão (sem login) irá tentar relatar por um problema em seu endereço
//problema selecionado: Buracos nas ruas
//O teste cobrirá tentativas válidas e inválidas dos usuários
//inváidas seja por campos obrigatórios incomletos ou pela digitação equivocada

//OBS: NENHUM DOS CASOS DE CENÁRIO INVALIDOS SERÃO GUARDADOS NO BANCO DE DADOS

describe('teste da historia 1', () => {
    
    const cleanupAndSetupData = () => {
        
        cy.request('GET', 'http://127.0.0.1:8000/cleanup_db/').then(() => {
            
            cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
            cy.wait(3000);
            cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
            cy.contains('Relatar Problemas').click({ force: true });
            cy.get(':nth-child(2) > input').type('Teste de Problema');
            cy.get('textarea').type('Descrição do problema TESTE');
            cy.get('select').select('buracos');
            cy.get('#endereco').type('Rua exemplo, 123');
            cy.get('#cidade').type('Cidade exemplo');
            cy.get('#estado').type('Estado exemplo');
            cy.get('#cep').type('50080160');
            cy.get('#foto').type('http://exemplo.com/imagem.jpg');
            cy.wait(2000);
            cy.get('.btn').click(); 
        });
    };

    it('cenario1 - inserindo dados validos', () => {
        cleanupAndSetupData(); 
    });

    it('cenario2 - dados validos porem incompletos (endereço)', () => {
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Relatar Problemas').click({ force: true });
        cy.get(':nth-child(2) > input').type('Teste de Problema 2');
        cy.get('textarea').type('Descrição do problema TESTE 2');
        cy.get('select').select('buracos');
        cy.get('#cidade').type('Cidade exemplo 2');
        cy.get('#estado').type('Estado exemplo 2');
        cy.get('#cep').type('50080160');
        cy.get('#foto').type('http://exemplo.com/imagem.jpg');
        cy.wait(2000);
        cy.get('.btn').click();



    });

    it('cenario3 - dados validos porem incompletos 2 (cep)', () =>{
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Relatar Problemas').click({ force: true });
        cy.get(':nth-child(2) > input').type('Teste de Problema 3');
        cy.get('textarea').type('Descrição do problema TESTE 3');
        cy.get('select').select('buracos');
        cy.get('#cidade').type('Cidade exemplo 3');
        cy.get('#estado').type('Estado exemplo 3');
        cy.get('#foto').type('http://exemplo.com/imagem.jpg');
        cy.wait(2000);
        cy.get('.btn').click();

    })

    it('cenario4 - dados validos porem incompletos 3 (cidade e estado)', () =>{
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Relatar Problemas').click({ force: true });
        cy.get(':nth-child(2) > input').type('Teste de Problema 4');
        cy.get('textarea').type('Descrição do problema TESTE 4');
        cy.get('select').select('buracos');
        cy.get('#cep').type('50080160');
        cy.get('#foto').type('http://exemplo.com/imagem.jpg');
        cy.wait(2000);
        cy.get('.btn').click();

    })

    it('cenario5 - dados inválidos (cep)', () => {
        cy.visit('http://127.0.0.1:8000/'); // Visitar a URL
            cy.wait(3000);
            cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
            cy.contains('Relatar Problemas').click({ force: true });
            cy.get(':nth-child(2) > input').type('Teste de Problema 5');
            cy.get('textarea').type('Descrição do problema TESTE 5');
            cy.get('select').select('buracos');
            cy.get('#endereco').type('Rua exemplo, 123');
            cy.get('#cidade').type('Cidade exemplo 5');
            cy.get('#estado').type('Estado exemplo 5');
            cy.get('#cep').type('5000160');
            cy.get('#foto').type('http://exemplo.com/imagem.jpg');
            cy.wait(2000);
            cy.get('.btn').click(); 
    })


});
