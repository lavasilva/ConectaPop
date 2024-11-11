describe('Teste de atualização de situacao', () => {

    it('cenario1 - O usuário procurará por uma obra existente', () => {
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Atualizações para Moradores').click({ force: true });
        cy.get('#endereco').type('Rua exemplo, 123');
        cy.get('form > .btn').click();
        cy.wait(3000);
        cy.get(':nth-child(9) > .btn').click();
    });

    it('cenario2 - o usuário procurara por uma obra que não existe', () => {
        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Atualizações para Moradores').click({ force: true });
        cy.get('#endereco').type('endereço nao cadastrado');
        cy.get('form > .btn').click();
        cy.wait(3000);
        cy.get('.container > :nth-child(3) > .btn').click();
    });

    it('cenario3 - o usuário procurará, não encontrará, vai cadastrar e buscar novamente', () => {
        // Limpa os dados relacionados ao endereço antes de iniciar o cenário 3
        cy.request('GET', 'http://127.0.0.1:8000/limpar_problemas/?endereco=Rua%20do%20Problema%20X')
            .then((response) => {
                expect(response.status).to.eq(200); // Verifica se a limpeza foi bem-sucedida
            });

        cy.visit('http://127.0.0.1:8000/');
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Atualizações para Moradores').click({ force: true });
        cy.get('#endereco').type('Rua do Problema X');
        cy.get('form > .btn').click();
        cy.wait(3000);
        cy.get('.container > :nth-child(3) > .btn').click(); //Aqui o usuário retorna a home e vai começar o cadastro
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Relatar Problemas').click({ force: true });
        cy.get(':nth-child(2) > input').type('Problema X');
        cy.get('textarea').type('Descrição do Problema X');
        cy.get('select').select('buracos');
        cy.get('#endereco').type('Rua do Problema X');
        cy.get('#cidade').type('Cidade X');
        cy.get('#estado').type('Estado X');
        cy.get('#cep').type('12345678');
        cy.get('#foto').type('http://exemploX.com/imagem.jpg');
        cy.get('.btn').click();
        cy.wait(3000);
        cy.get(':nth-child(1) > [href="#"]').trigger('mouseover');
        cy.contains('Atualizações para Moradores').click({ force: true });
        cy.get('#endereco').type('Rua do Problema X');
        cy.get('form > .btn').click();
        cy.wait(3000);
        cy.get(':nth-child(9) > .btn').click();
    });

});
