describe('ArticleTile Component', () => {
  it('should display the article details correctly', () => {
    // Visit the page where the ArticleTile component is rendered
    cy.visit('http://localhost:3000/'); // Adjust the URL to where your component is rendered

    // Check if the article title is rendered
    cy.get('[data-testid="tile-title"]').should('exist');

    // Check if the article abstract is rendered
    cy.get('[data-testid="tile-abstract"]').should('exist');

    // Check if the article published_date is rendered
    cy.get('[data-testid="tile-published_date"]').should('exist');

    // Check if the article image is rendered
    cy.get('[data-testid="tile-thumbnail"]', { timeout: 1000 }).should('exist');

    // // Click on the article to open the modal
    cy.get('[data-testid="tile-button"]').each(($el) => {
      cy.wrap($el).click({ force: true });
    });

    // Check if the modal opens with the article details
    cy.get('.modal-class').should('be.visible');
  });
});
