describe('Home Page', () => {
    it('should display the home page correctly', () => {
        cy.visit('/');
        cy.contains('Welcome to Home').should('be.visible');
    });
});
