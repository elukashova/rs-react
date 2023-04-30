/// <reference types="cypress" />

describe('Navigation bar in header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open Forms page', () => {
    cy.get('[data-cy="nav-link-form"]').click();
    cy.location('pathname').should('equal', '/forms');
  });

  it('Should open About Us page', () => {
    cy.get('[data-cy="nav-link-about"]').click();
    cy.location('pathname').should('equal', '/about');
  });
});
