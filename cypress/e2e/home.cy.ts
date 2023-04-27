/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should contain search bar', () => {
    cy.get('[data-cy="search-input"]').should('be.visible');
  });

  it('Should render 8 cards with huts', () => {
    cy.get('[data-cy="catalogue-card"]').should('have.length', 8);
  });

  it('Should show proper search results', () => {
    cy.intercept(
      {
        url: 'https://my-json-server.typicode.com/elukashova/react-custom-api/**',
        middleware: true,
      },
      (req) => {
        req.on('response', (res) => {
          res.setDelay(500);
        });
      }
    );

    cy.get('[data-cy="search-input"]').type('az{enter}');
    cy.get('[data-cy="catalogue-card"]').should('have.length', 1);
  });

  it('Should tell when no data was found', () => {
    cy.get('[data-cy="search-input"]').type('aza{enter}');
    cy.get('[data-cy="no-data"]').should('be.visible');
  });

  it('Should open and close modal window', () => {
    cy.get('[data-cy="catalogue-card"]').eq(0).click();
    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="close-btn"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });
});
