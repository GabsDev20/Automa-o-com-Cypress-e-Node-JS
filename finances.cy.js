/// <reference types = "cypress" />
// hooks
// trechos que executam antes e depois do teste

// before -> antes de todos os testes
// beforeEach -> antes de cada teste
// after -> depois de todos os testes
// afterEach -> depois de cada teste

beforeEach(() => {
  cy.visit('https://dev-finance.netlify.app/#') // acesando site
  cy.get('#data-table tbody tr').should('have.length', 0) // verificar tamanho da tabela após inserir registros.
});


context('Dev Finances Agilizei', () => {
  it('Cadastrar entradas', ()=> {
  //- entender o fluxo manualmente
  //- mapear os elementos que vamos interagir
  //- descrever as interações com Cypress
  //- adicionar as asserções que a gente precisa

  
  
  cy.get('#transaction .button').click() // id + classe
  cy.get('#description').type('Mesada') // id
  cy.get('[name=amount]').type(12) // atributos
  cy.get('[type = date]').type('2022-03-17') // atributos
  cy.get('button').contains('Salvar').click() // tipo e valor

  cy.get('#data-table tbody tr').should('have.length', 1) // verificar tamanho da tabela após inserir registros.






  // Cadastrar Saidas
  // Remover entradas e saidas
  });

  it('Cadastrar Saidas',() =>{
    cy.visit('https://dev-finance.netlify.app/#') // acesando site

  cy.get('#data-table tbody tr').should('have.length', 0) // verificar tamanho da tabela após inserir registros.
  cy.get('#transaction .button').click() // id + classe
  cy.get('#description').type('Mesada') // id
  cy.get('[name=amount]').type(-12) // atributos
  cy.get('[type = date]').type('2022-03-17') // atributos
  cy.get('button').contains('Salvar').click() // tipo e valor

  cy.get('#data-table tbody tr').should('have.length', 1) // verificar tamanho da tabela após inserir registros.


  });

  it.only('Remover entradas e saídas', () =>{

    const entrada = 'Mesada'
    const saida = 'KinderOvo'
    cy.get('#transaction .button').click() // id + classe
    cy.get('#description').type(entrada) // id
    cy.get('[name=amount]').type(100) // atributos
    cy.get('[type = date]').type('2022-03-17') // atributos
    cy.get('button').contains('Salvar').click() // tipo e valor
  
    cy.get('#transaction .button').click() // id + classe
    cy.get('#description').type(saida) // id
    cy.get('[name=amount]').type(-35) // atributos
    cy.get('[type = date]').type('2022-03-17') // atributos
    cy.get('button').contains('Salvar').click() // tipo e valor

    // estrátegia 1: voltar para elemento pai, e avançar para um td img attr
    cy.contains(entrada)
    .parent()
    .find('img[onclick*=remove]')
    .click()


    
  });
  it('Validar saldo com diversas transações', () =>{
    // capturar as linhas com as transações
    // formatar esses valores das linhas

  });
});