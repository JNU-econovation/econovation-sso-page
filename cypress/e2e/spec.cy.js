import cy from 'cypress';

describe('Visit Web Site', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000');
  });
});
