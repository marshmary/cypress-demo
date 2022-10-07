/// <reference types="Cypress" />

describe("Song searching with text", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Try to input value", () => {
        const inputValue = `moon halo`;

        cy.getBySelector("text-search")
            .type(inputValue)
            .should("have.value", inputValue);
    });

    it("Search for a song", () => {
        cy.getBySelector("text-search").type(`moon halo`).type("{enter}");
    });
});
