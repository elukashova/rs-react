/// <reference types="cypress" />

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('Should show error message when no data present', () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]').should('be.visible');
  });

  it('Should show error when departure is earlier than arrival', () => {
    cy.get('[data-cy="arrival"]').type('2023-04-15');
    cy.get('[data-cy="departure"]').type('2023-04-14');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]')
      .eq(2)
      .should('have.text', "!!!Departure can't be earlier than arrival");
  });

  it('Should show error when invalid file format', () => {
    cy.get('[data-cy="image"]').selectFile('cypress/fixtures/test.txt');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]')
      .eq(5)
      .should('have.text', '!!!Please, upload an .jpg, .jpeg or .png file');
  });

  it('Should submit form and show newly-created card', () => {
    cy.get('[data-cy="name"]').type('Ele');
    cy.get('[data-cy="hut"]').select('Azzoni hut');
    cy.get('[data-cy="arrival"]').type('2023-04-14');
    cy.get('[data-cy="departure"]').type('2023-04-15');
    cy.get('[data-cy="image"]').selectFile('cypress/fixtures/Moon.jpg');
    cy.get('[data-cy="rating"]').eq(2).check();
    cy.get('[data-cy="privacy"]').check();
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="submit-message"]').should('be.visible');
    cy.get('[data-cy="review"]').contains('Ele').should('be.visible');
  });
});
