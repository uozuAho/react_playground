describe('homepage', function() {
  it('shows lifecycle demos', function() {
    cy.visit('http://localhost:3000/');
    cy.contains('LifecycleDemos');
  });
});
