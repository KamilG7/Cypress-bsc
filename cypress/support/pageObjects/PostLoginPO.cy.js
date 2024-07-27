/// <reference types="cypress" />

class PostLoginPage {


    get loggedInConfirmationLocator() {
        return cy.get("#category-name")
    }

    get dropdownMenu() {
        return cy.get("button[class='dropdown__toggle-button']")
    }

    get signOutButton() {
        return cy.contains("Sign Out")
    }


}

export default PostLoginPage