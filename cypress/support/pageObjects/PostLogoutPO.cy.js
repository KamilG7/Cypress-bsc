/// <reference types="cypress" />

class PostLogoutPage {

    get signOutConfirmation() {
        return cy.get("a").contains("Sign In")
    }

}

export default PostLogoutPage