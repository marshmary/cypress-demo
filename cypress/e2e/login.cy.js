/// <reference types="Cypress" />

describe("Login", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it("Access login page", () => {
        cy.contains("Login"); // Try to search for 'Login' text in button
    });

    it("Input email & password", () => {
        cy.get('[data-cy="email"]')
            .type("example@gmail.com")
            .should("have.value", "example@gmail.com");

        cy.get('[data-cy="password"]')
            .type("12345678")
            .should("have.value", "12345678");
    });
});
