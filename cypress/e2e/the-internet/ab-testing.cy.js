/// <reference types="cypress" />

describe("visit the internet", () => {
    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com")
    })

    it("should go to A/B Testing", () => {
        cy
            .get("div#content")
            .find("li")
            .contains("a", "A/B Testing")
            .click()

        cy
            .get("div#content")
            .find("h3")
            .should("contain.text", "A/B Test Control")
    })

})