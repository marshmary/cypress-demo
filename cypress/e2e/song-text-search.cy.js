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

    it.only("Search for a song", () => {
        cy.fixture("song-text-search").then((data) => {
            cy.intercept("POST", "/api/search/song?keyword=*", {
                statusCode: 200,
                body: data,
            }).as("songTextSearchApi");
        });

        cy.getBySelector("text-search").type(`moon halo`).type("{enter}");
        cy.wait(`@songTextSearchApi`);
        /* ==== Generated with Cypress Studio ==== */
        cy.getBySelector("song-name").first().should("have.text", "Moon Halo");
        /* ==== End Cypress Studio ==== */
    });
});
