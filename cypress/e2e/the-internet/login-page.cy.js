/// <reference types="cypress" />

describe("visit the internet", () => {
    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com")
    })

    it("should log into Form Authentication", () => {
        cy
            .get("div#content")
            .find("li")
            .contains("a", "Form Authentication")
            .click()

        cy
            .get("div#content")
            .find("h2")
            .should("contain.text", "Login Page")

        cy
            .get("input#username").type("tomsmith")
            .get("input#password").type("SuperSecretPassword!")
            .get("form#login").submit()
        
        cy
            .get("div#content")
            .find("h2")
            .should("contain.text", "Secure Area")
    })

})