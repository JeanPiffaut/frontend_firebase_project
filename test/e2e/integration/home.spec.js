// test/e2e/integration/home.spec.js

describe('Home Page', () => {
    it('should load the home page and display the main content', () => {
        // Visita la página principal de la aplicación
        cy.visit('/');

        // Verifica que el contenido principal esté presente
        cy.contains('Edit').should('be.visible'); // Ajusta esto según el contenido de tu página de inicio
    });
});
